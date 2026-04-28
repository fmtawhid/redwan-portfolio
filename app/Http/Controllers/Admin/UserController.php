<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class UserController extends Controller
{
    /* ------------ LIST ------------ */
    public function index()
    {
        return Inertia::render('admin/users/index', [
            'users' => User::with('roles')->paginate(15),
        ]);
    }

    /* ------------ CREATE FORM ------------ */
    public function create()
    {
        return $this->formPage(new User);
    }

    /* ------------ EDIT FORM ------------ */
    public function edit(User $user)
    {
        return $this->formPage($user->load('roles', 'permissions'));
    }

    /* ------------ STORE ------------ */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
            'roleIds'  => ['array'],
            'permIds'  => ['array'],
        ]);

        $user = User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        $user->syncRoles($data['roleIds'] ?? []);
        $user->syncPermissions($data['permIds'] ?? []);

        app(PermissionRegistrar::class)->forgetCachedPermissions();

        return redirect()
            ->route('admin.users.index')
            ->with('flash.success', 'User created');
    }

    /* ------------ UPDATE ------------ */
    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'email', "unique:users,email,{$user->id}"],
            'password' => ['nullable', 'string', 'min:6', 'confirmed'],
            'roleIds'  => ['array'],
            'permIds'  => ['array'],
        ]);

        $user->update([
            'name'  => $data['name'],
            'email' => $data['email'],
            ...( $data['password'] ? ['password' => Hash::make($data['password'])] : []),
        ]);

        $user->syncRoles($data['roleIds'] ?? []);
        $user->syncPermissions($data['permIds'] ?? []);

        app(PermissionRegistrar::class)->forgetCachedPermissions();

        return back()->with('flash.success', 'User updated');
    }

    /* ------------ DELETE ------------ */
    public function destroy(User $user)
    {
        $user->delete();

        return back()->with('flash.success', 'User deleted');
    }

    /* ------------ Shared form page ------------ */
    private function formPage(User $user)
    {
        return Inertia::render('admin/users/form', [
            'user'            => $user->exists
                                  ? $user->only('id', 'name', 'email')
                                  : null,
            'roles'           => Role::select('id','name')->get(),
            'permissions'     => Permission::select('id','name')->get(),
            'selectedRoleIds' => $user->roles->pluck('id')->values()->all(),
            'selectedPermIds' => $user->permissions->pluck('id')->values()->all(),
            'isEdit'          => $user->exists,
        ]);
    }
}

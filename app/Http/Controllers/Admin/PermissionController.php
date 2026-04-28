<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;
use Inertia\Inertia;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    // public function __construct()
    // {
    //     $this->middleware('permission:permissions.view')->only('index');
    //     $this->middleware('permission:permissions.create')->only(['create', 'store']);
    //     $this->middleware('permission:permissions.update')->only(['edit', 'update']);
    //     $this->middleware('permission:permissions.delete')->only('destroy');
    // }
    public function index()
    {
        $permissions = Permission::latest()->paginate(10);

        return Inertia::render('admin/permissions/index', [
            'permissions' => $permissions,
            'modules'     => array_keys(config('permission.modules')),  // for create dropdown
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/permissions/create', [
            'modules' => array_keys(config('permission.modules')),      // ← pass module list
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'module'  => ['required', 'in:' . implode(',', array_keys(config('permission.modules')))],
            'ability' => ['required', 'string'],
        ]);

        $name = "{$data['module']}.{$data['ability']}";

        Permission::firstOrCreate([
            'name'       => $name,
            'guard_name' => 'web',
        ]);

        app(PermissionRegistrar::class)->forgetCachedPermissions();     // ← flush cache

        return redirect()
            ->route('admin.permissions.index')
            ->with('flash.success', 'Permission created.');
    }

    public function edit(Permission $permission)
    {
        [$module, $ability] = explode('.', $permission->name);

        return Inertia::render('admin/permissions/edit', [
            'permission' => $permission,
            'current'    => compact('module', 'ability'),
            'modules'    => array_keys(config('permission.modules')),
        ]);
    }

    public function update(Request $request, Permission $permission)
    {
        $data = $request->validate([
            'module'  => ['required', 'in:' . implode(',', array_keys(config('permission.modules')))],
            'ability' => ['required', 'string'],
        ]);

        $permission->update([
            'name'       => "{$data['module']}.{$data['ability']}",
            'guard_name' => 'web',
        ]);

        app(PermissionRegistrar::class)->forgetCachedPermissions();     // ← flush cache

        return redirect()
            ->route('admin.permissions.index')
            ->with('flash.success', 'Permission updated.');
    }

    public function destroy(Permission $permission)
    {
        $permission->delete();

        app(PermissionRegistrar::class)->forgetCachedPermissions();     // ← flush cache

        return back()->with('flash.success', 'Permission deleted.');
    }
}

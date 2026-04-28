<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class PermissionSeeder extends Seeder
{
    public function run(): void
    {

        // dd(config('permissions.modules'));
        // 1. always flush cache first
        app(PermissionRegistrar::class)->forgetCachedPermissions();

        // 2. iterate modules → abilities
        foreach (config('permission.modules') as $module => $abilities) {
            foreach ($abilities as $ability) {
                Permission::firstOrCreate(
                    ['name' => "{$module}.{$ability}", 'guard_name' => 'web']
                );
            }
        }

        // 3. optional: log output
        $count = Permission::count();
        $this->command->info("✔ Permissions synced. Total: {$count}");
    }
}

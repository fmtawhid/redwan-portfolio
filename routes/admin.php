<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;

Route::middleware(['web', 'auth'])
      ->prefix('admin')
      ->as('admin.')
      ->group(function () {
          Route::resource('roles', RoleController::class);
          Route::resource('permissions', PermissionController::class);
          Route::resource('users', UserController::class);
      });

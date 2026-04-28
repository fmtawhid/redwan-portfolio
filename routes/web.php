<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\RoleController;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

// dashboard route
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard', [
            'totalContacts' => \App\Models\Contact::count(),
            'totalEmails' => \App\Models\Email::count(),
        ]);
    })->name('dashboard');
});

// Contact routes
Route::post('/contacts/store', [App\Http\Controllers\ContactController::class, 'store'])->name('contacts.store');
Route::get('/contacts', [App\Http\Controllers\ContactController::class, 'index'])->name('contacts.index')->middleware(['auth', 'verified']);
Route::delete('/contacts/{contact}', [App\Http\Controllers\ContactController::class, 'destroy'])->name('contacts.destroy')->middleware(['auth', 'verified']);

// Email subscription routes
Route::post('/emails/store', [App\Http\Controllers\EmailController::class, 'store'])->name('emails.store');
Route::get('/emails', [App\Http\Controllers\EmailController::class, 'index'])->name('emails.index')->middleware(['auth', 'verified']);
Route::delete('/emails/{email}', [App\Http\Controllers\EmailController::class, 'destroy'])->name('emails.destroy')->middleware(['auth', 'verified']);

//role manager


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

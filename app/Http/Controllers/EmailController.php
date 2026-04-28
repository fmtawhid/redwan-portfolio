<?php

namespace App\Http\Controllers;

use App\Models\Email;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmailController extends Controller
{
    public function index()
    {
        $emails = Email::latest()->get();
        return Inertia::render('admin/emails/index', [
            'emails' => $emails,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|max:255|unique:emails',
        ]);

        Email::create($validated);

        return back()->with('success', 'Email subscribed successfully!');
    }

    public function destroy(Email $email)
    {
        $email->delete();
        return back()->with('success', 'Email deleted successfully!');
    }
}

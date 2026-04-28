<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;   // ← this is the key

class Controller extends BaseController                // ← extends it
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}

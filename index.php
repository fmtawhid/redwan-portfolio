<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

/*
|--------------------------------------------------------------------------
| AUTO DETECT ROOT PATH
|--------------------------------------------------------------------------
*/
$basePath = __DIR__;

/*
|--------------------------------------------------------------------------
| Maintenance Mode
|--------------------------------------------------------------------------
*/
if (file_exists($basePath.'/storage/framework/maintenance.php')) {
    require $basePath.'/storage/framework/maintenance.php';
}

/*
|--------------------------------------------------------------------------
| Composer Autoload
|--------------------------------------------------------------------------
*/
$autoload = $basePath.'/vendor/autoload.php';

if (!file_exists($autoload)) {
    die("❌ vendor/autoload.php missing. Path: ".$autoload);
}

require $autoload;

/*
|--------------------------------------------------------------------------
| Bootstrap App
|--------------------------------------------------------------------------
*/
$app = require_once $basePath.'/bootstrap/app.php';

/** @var Application $app */
$app->handleRequest(Request::capture());
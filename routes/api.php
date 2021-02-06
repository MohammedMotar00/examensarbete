<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ShenController;
use App\Http\Controllers\YasuoController;
use App\Http\Controllers\YoneController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});

// get items collection for champions
Route::get('/shen', [ShenController::class, 'index'])->middleware('throttle:1000,1');
Route::get('/yasuo', [YasuoController::class, 'index'])->middleware('throttle:1000,1');
Route::get('/yone', [YoneController::class, 'index'])->middleware('throttle:1000,1');

Route::prefix('/items')->group(function () {
  // save items
  Route::post('/shen', [ShenController::class, 'store'])->middleware('throttle:1000,1');
  Route::post('/yasuo', [YasuoController::class, 'store'])->middleware('throttle:1000,1');
  Route::post('/yone', [YoneController::class, 'store'])->middleware('throttle:1000,1');

  // get items for specific champion
  Route::get('/shen/{id}', [ShenController::class, 'show'])->middleware("throttle:1000,1");
  Route::get('/yasuo/{id}', [YasuoController::class, 'show'])->middleware("throttle:1000,1");
  Route::get('/yone/{id}', [YoneController::class, 'show'])->middleware("throttle:1000,1");
});
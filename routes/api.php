<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/table/{id}/editor/get', 'Excel\ApiController@get')
    ->name('excel.editor.get')
    ->where('id', '[0-9]+');

Route::post('/table/{id}/editor/set', 'Excel\ApiController@store')
    ->name('excel.editor.set')
    ->where('id', '[0-9]+');

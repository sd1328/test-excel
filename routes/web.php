<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'Excel\TableController@index')
    ->name('excel.crud.list');

Route::get('/table', 'Excel\TableController@storeShow')
    ->name('excel.crud.create.show');
Route::post('/table', 'Excel\TableController@store')
    ->name('excel.crud.create');

Route::get('/table/{id}', 'Excel\TableController@updateShow')
    ->name('excel.crud.update.show')
    ->where('id', '[0-9]+');
Route::post('/table/{id}', 'Excel\TableController@update')
    ->name('excel.crud.update')
    ->where('id', '[0-9]+');

Route::get('/table/{id}/editor', 'Excel\TableController@editor')
    ->name('excel.editor')
    ->where('id', '[0-9]+');


Route::get('/table/{id}/remove', 'Excel\TableController@destroy')
    ->name('excel.crud.remove')
    ->where('id', '[0-9]+');



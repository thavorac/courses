<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\PostController;

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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/dashboard', function () {
  return view('dashboard');
});

// Product routes
Route::get('/products', [ProductController::class, 'index']);
Route::get('/product/form', [ProductController::class, 'create']);
Route::post('/product/form', [ProductController::class, 'store']);

// Author routes
Route::get('/authors', [AuthorController::class, 'index']);
Route::get('/author/form', [AuthorController::class, 'create']);
Route::post('/author/form', [AuthorController::class, 'store']);
Route::get('/authors/{id}/posts', [AuthorController::class, 'listPosts']);

// Post routes
Route::get('/post/form', [PostController::class, 'create']);
Route::post('/post/form', [PostController::class, 'store']);

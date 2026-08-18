<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/admin', [AdminController::class, 'index'])->name('admin');

//collection routes
Route::post('/collections', [CollectionController::class, 'store']);
Route::put('/collections/{collection}', [CollectionController::class, 'update'])
    ->name('collections.update');
Route::delete('/collections/{collection}', [CollectionController::class, 'destroy']);

//category routes
Route::post('/categories', [CategoryController::class, 'store']);
Route::put('/categories/{category}', [CategoryController::class, 'update'])
    ->name('categories.update');
Route::delete('/categories/{category}', [CategoryController::class, 'destroy']);

//products routes
Route::post('/products', [ProductController::class, 'store']);
Route::put('/products/{product}', [ProductController::class, 'update'])
    ->name('products.update');
Route::delete('/products/{product}', [ProductController::class, 'destroy']);

Route::inertia('/shop', 'Shop/Index')->name('shop');
Route::inertia('/product', 'Product/Index')->name('product');

Route::inertia('/signup', 'SignUp/Index')->name('signup');
Route::inertia('/login', 'Login/Index')->name('signup');


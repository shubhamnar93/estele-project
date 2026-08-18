<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Auth\Register;
use App\Http\Controllers\Auth\Login;
use App\Http\Controllers\Auth\Logout;

Route::get('/', [HomeController::class, 'index'])->name('home');


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

//register
Route::inertia('/signup', 'SignUp/Index')->name('signup');
Route::post('/register', Register::class)
    ->middleware('guest');

//login
Route::inertia('/login', 'Login/Index')->name('signup');
Route::post('/login', Login::class)
    ->middleware('guest');

//admin
Route::get('/admin', [AdminController::class, 'index'])
    ->name('admin')
    ->middleware('admin');
//logout
Route::post('/logout', Logout::class)
    ->middleware('admin');

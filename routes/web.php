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
Route::get('/collections/{collection}', [CollectionController::class, 'show'])
    ->name('collections.show');

Route::get('/search', [ProductController::class, 'search'])->name('search');

//products
Route::get('/products/{product}', [ProductController::class, 'show'])
    ->name('product.show');

Route::inertia('/shop', 'Shop/Index')->name('shop');
Route::inertia('/product', 'Product/Index')->name('product');

Route::middleware(['guest'])->group(function () {
    //register
    Route::inertia('/signup', 'SignUp/Index')->name('signup');
    Route::post('/register', Register::class);

    //login
    Route::inertia('/login', 'Login/Index')->name('login');
    Route::post('/login', Login::class);
});

Route::middleware(['auth'])->group(function () {
    Route::post('/logout', Logout::class)
        ->middleware('auth');
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])
        ->name('admin');

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
});

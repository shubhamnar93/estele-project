<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/* Route::inertia('/', Inertia::render('Home/Index'))->name('home'); */
Route::inertia('/', 'Home/Index')->name('home');
Route::inertia('/shop', 'Shop/Index')->name('shop');
Route::inertia('/product', 'Product/Index')->name('product');
Route::inertia('/admin', 'Admin/Index')->name('admin');
Route::inertia('/signup', 'SignUp/Index')->name('signup');
Route::inertia('/login', 'Login/Index')->name('signup');


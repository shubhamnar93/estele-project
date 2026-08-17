<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/* Route::inertia('/', Inertia::render('Home/Index'))->name('home'); */
Route::inertia('/', 'Home/Index')->name('home');
Route::inertia('/shop', 'Shop/Index')->name('shop');
Route::inertia('/product', 'Product/Index')->name('shop');
Route::inertia('/admin', 'Admin/Index')->name('shop');


<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/* Route::inertia('/', Inertia::render('Home/Index'))->name('home'); */
Route::inertia('/', 'Home/Index')->name('home');


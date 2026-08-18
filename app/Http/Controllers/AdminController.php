<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Collection;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function index(): Response
    {
        $products = Product::with(['category', 'collection']) ->latest()
            ->get();

        $categories = Category::orderBy('name')->get(['id', 'name', 'count', 'slug', 'imageurl']);
        $collections = Collection::orderBy('name')->get(['id', 'name', 'count', 'slug', 'imageurl']);

        return Inertia::render('Admin/Index', [
            'products' => $products,
            'categories' => $categories,
            'collections' => $collections,
        ]);
    }
}

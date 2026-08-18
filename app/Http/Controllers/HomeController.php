<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Collection;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
 public function index(): Response
    {
        $latestProducts = Product::with(['category', 'collection'])
            ->latest()
            ->take(4)
            ->get();
        $featuredProducts = Product::with(['category', 'collection'])
            ->whereHas('category', function ($query) {
                $query->where('is_featured', true);
            })
            ->latest()
            ->take(4)
            ->get();

        $categories = Category::orderBy('name')->get(['id', 'name', 'count', 'slug', 'imageurl']);
        $collections = Collection::orderBy('name')->get(['id', 'name', 'count', 'slug', 'imageurl']);

        return Inertia::render('Home/Index', [
            'featuredProducts' => $featuredProducts,
            'latestProducts' => $latestProducts,
            'categories' => $categories,
            'collections' => $collections,
        ]);
    }
}

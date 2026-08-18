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
            ->whereHas('collection', function ($query) {
                $query->where('name', 'New Arrivals');
            })
            ->latest()
            ->take(4)
            ->get();
        $bestSeller = Product::with(['category', 'collection'])
            ->whereHas('collection', function ($query) {
                $query->where('name', 'Best Sellers');
            })
            ->latest()
            ->take(4)
            ->get();

        $featuredProducts = Product::with(['category', 'collection'])
            ->whereHas('collection', function ($query) {
                $query->where('name', 'Premium Edit');
            })
            ->latest()
            ->take(4)
            ->get();

        $categories = Category::orderBy('name')->get(['id', 'name', 'count', 'slug', 'imageurl']);
        $collections = Collection::orderBy('name')->get(['id', 'name', 'count', 'slug', 'imageurl']);

        return Inertia::render('Home/Index', [
            'featuredProducts' => $featuredProducts,
            'latestProducts' => $latestProducts,
            'bestSellers' => $bestSeller,
            'categories' => $categories,
            'collections' => $collections,
        ]);
    }
}

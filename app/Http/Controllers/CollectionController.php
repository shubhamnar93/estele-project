<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\Collection;
use App\Models\Product;
use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;

class CollectionController extends Controller
{
 public function store( Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:collections,slug'],
            'description' => ['string', 'max:1000'],
            'imageurl' => ['nullable', 'string', 'max:1000'],
        ]);


        Collection::create($validated);

        return redirect('/admin')->with('success', 'collection created!');
}
public function update(Request $request, Collection $collection) {
    // Validate
    $validated = $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'slug' => ['required', 'string', 'max:255', 'unique:collections,slug'. $collection->id],
        'description' => ['string', 'max:1000', 'nullable'],
        'imageurl' => ['nullable', 'string', 'max:1000'],
    ]);

    // Update
    $collection->update($validated);

    return redirect('/admin')->with('success', 'collection updated!');
}

public function destroy(collection $collection)
{
    $collection->delete();

    return redirect('/admin')->with('success', 'collection deleted!');
}

    public function show(Collection $collection): Response
    {
        $products = Product::with(['category', 'collection'])
            ->where('collection_id', $collection->id)
            ->latest()
            ->get();
        $categories = Category::whereIn(
                'id',
                $products->pluck('category_id')->unique()
            )
            ->orderBy('name')
            ->get(['id', 'name', 'count', 'slug', 'imageurl']);


        return Inertia::render('Shop/Index', [
            "products" => $products,
            "collection" => $collection,
            "categories" => $categories
        ]);
    }
}

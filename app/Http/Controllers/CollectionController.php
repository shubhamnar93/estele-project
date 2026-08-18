<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Collection;
use Illuminate\Http\RedirectResponse;
use App\Models\Product;
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
            'imageUrl' => ['nullable', 'string', 'max:1000'],
        ]);


        Collection::create($validated);

        return redirect('/admin')->with('success', 'collection created!');
}
public function update(Request $request, Collection $collection)
{
    // Validate
    $validated = $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'slug' => ['required', 'string', 'max:255', 'unique:collections,slug'],
        'description' => ['string', 'max:1000'],
        'imageUrl' => ['nullable', 'string', 'max:1000'],
    ]);

    // Update
    $collection->update($validated);

    return redirect('/admin')->with('success', 'collection updated!');
}

public function destroy(collection $collection)
{
    $collection->delete();

    return redirect('/admin')->with('success', 'Category deleted!');
}

    public function show(Collection $collection): Response
    {
        $products = Product::with(['category', 'collection'])
            ->where('collection_id', $collection->id)
            ->latest()
            ->get();

        return Inertia::render('Shop/Index', [
            "products" => $products,
            "collection" => $collection
        ]);
    }
}

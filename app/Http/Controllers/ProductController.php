<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\Product;
use App\Models\Collection;
use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{

    public function store(Request $request): RedirectResponse
        {

            $validated = $request->validate([
                'category_id' => ['required', 'exists:categories,id'],
                'collection_id' => ['required', 'exists:collections,id'],
                'name' => ['required', 'string', 'max:255'],
                'price' => ['required', 'numeric', 'min:0'],
                'count' => ['required', 'integer', 'min:0'],
                'description' => ['nullable', 'string'],
                'images' => ['nullable', 'array'],
            ]);


            $product = Product::create($validated);

            Category::where('id', $product->category_id)
                ->increment('count');

            Collection::where('id', $product->collection_id)
                ->increment('count');


            return redirect('/admin')->with('success', 'collection created!');
    }

    public function update(Request $request, Product $product)
    {
        // Validate
        $validated = $request->validate([
                'category_id' => ['required', 'exists:categories,id'],
                'collection_id' => ['required', 'exists:collections,id'],
                'name' => ['required', 'string', 'max:255'],
                'price' => ['required', 'numeric', 'min:0'],
                'count' => ['required', 'integer', 'min:0'],
                'description' => ['nullable', 'string'],
                'images' => ['nullable', 'array'],
        ]);

        $oldCategoryId = $product->category_id;
        $oldCollectionId = $product->collection_id;
        // Update
        $product->update($validated);

        if ($oldCategoryId != $product->category_id) {
            Category::where('id', $oldCategoryId)->decrement('count');
            Category::where('id', $product->category_id)->increment('count');
        }

        if ($oldCollectionId != $product->collection_id) {
            Collection::where('id', $oldCollectionId)->decrement('count');
            Collection::where('id', $product->collection_id)->increment('count');
        }

        return redirect('/admin')->with('success', 'Product updated!');
    }
    public function destroy(Product $product)
    {
        $product->delete();

        return redirect('/admin')->with('success', 'Product deleted!');
    }

    public function show(Product $product): Response
    {

        return Inertia::render('Product/Index', [
            "product" => $product
        ]);
    }
    public function search(Request $request): Response
    {
        $query = $request->input('q', '');

        $products = Product::with(['category', 'collection'])
            ->where('name', 'like', "%{$query}%")
            ->latest()
            ->get();

        $categories = Category::orderBy('name')->get(['id', 'name', 'count', 'slug', 'imageurl']);

        return Inertia::render('Shop/Index', [
            'products'    => $products,
            'collection'  => (object) ['name' => "Search: {$query}", 'description' => ''],
            'categories'  => $categories,
        ]);
    }

}

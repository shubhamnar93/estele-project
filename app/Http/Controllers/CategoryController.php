<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Http\RedirectResponse;

class CategoryController extends Controller
{
 public function store( Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:collections,slug'],
            'description' => ['string', 'max:1000'],
            'imageUrl' => ['nullable', 'string', 'max:1000'],
        ]);

        Category::create($validated);

        return redirect('/admin')->with('success', 'collection created!');
}
public function update(Request $request, Category $category)
{
    // Validate
    $validated = $request->validate([
        'name' => ['required', 'string', 'max:255'],
        'slug' => ['required', 'string', 'max:255', 'unique:collections,slug'],
        'description' => ['string', 'max:1000'],
        'imageUrl' => ['nullable', 'string', 'max:1000'],
    ]);

    // Update
    $category->update($validated);

    return redirect('/admin')->with('success', 'collection updated!');
}
}

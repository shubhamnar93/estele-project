<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Collection;
use Illuminate\Http\RedirectResponse;

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
}

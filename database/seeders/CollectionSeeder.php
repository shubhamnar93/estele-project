<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CollectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Collection::create([
            'name' => 'Summer Collection',
            'slug' => 'summer-collection',
            'description' => 'Our latest summer collection',
            'imageurl' => 'https://example.com/images/summer.jpg',
        ]);

        Collection::create([
            'name' => 'Winter Collection',
            'slug' => 'winter-collection',
            'description' => 'Warm winter fashion',
            'imageurl' => 'https://example.com/images/winter.jpg',
        ]);

        Collection::create([
            'name' => 'New Arrivals',
            'slug' => 'new-arrivals',
            'description' => 'Latest products',
            'imageurl' => 'https://example.com/images/new-arrivals.jpg',
        ]);
    }
}

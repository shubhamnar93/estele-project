<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Collection;

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
    'description' => 'Lightweight and refreshing styles designed for warm summer days.',
    'imageurl' =>
                'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
]);

Collection::create([
    'name' => 'Winter Collection',
    'slug' => 'winter-collection',
    'description' => 'Warm and comfortable fashion pieces made for the winter season.',
    'imageurl' => 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
]);

Collection::create([
    'name' => 'New Arrivals',
    'slug' => 'new-arrivals',
    'description' => 'Discover our newest products and the latest additions to the store.',
    'imageurl' => 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
]);

Collection::create([
    'name' => 'Best Sellers',
    'slug' => 'best-sellers',
    'description' => 'Shop the products that customers love and buy the most.',
    'imageurl' => 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
]);

Collection::create([
    'name' => 'Premium Edit',
    'slug' => 'premium-edit',
    'description' => 'A curated selection of premium products with exceptional quality.',
    'imageurl' => 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80',
]);

Collection::create([
    'name' => 'Everyday Essentials',
    'slug' => 'everyday-essentials',
    'description' => 'Reliable and versatile products made for everyday use.',
    'imageurl' => 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80',
]);

Collection::create([
    'name' => 'Trending Now',
    'slug' => 'trending-now',
    'description' => 'Explore the styles and products currently trending with our customers.',
    'imageurl' => 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=80',
]);

Collection::create([
    'name' => 'Limited Edition',
    'slug' => 'limited-edition',
    'description' => 'Exclusive products available for a limited time only.',
    'imageurl' => 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80',
]);

Collection::create([
    'name' => 'Classic Collection',
    'slug' => 'classic-collection',
    'description' => 'Timeless styles and carefully selected pieces that never go out of fashion.',
    'imageurl' =>'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',

]);
    }
}

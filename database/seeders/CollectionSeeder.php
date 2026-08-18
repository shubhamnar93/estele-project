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
            'imageurl' => 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80',
        ]);

        Collection::create([
            'name' => 'Winter Collection',
            'slug' => 'winter-collection',
            'description' => 'Warm and comfortable fashion pieces made for the winter season.',
            'imageurl' => 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
        ]);

        Collection::create([
            'name' => 'New Arrivals',
            'slug' => 'new-arrivals',
            'description' => 'Discover our newest products and the latest additions to the store.',
            'imageurl' => 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80',
        ]);

        Collection::create([
            'name' => 'Best Sellers',
            'slug' => 'best-sellers',
            'description' => 'Shop the products that customers love and buy the most.',
            'imageurl' => 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
        ]);

        Collection::create([
            'name' => 'Premium Edit',
            'slug' => 'premium-edit',
            'description' => 'A curated selection of premium products with exceptional quality.',
            'imageurl' => 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
        ]);

        Collection::create([
            'name' => 'Everyday Essentials',
            'slug' => 'everyday-essentials',
            'description' => 'Reliable and versatile products made for everyday use.',
            'imageurl' => 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=80',
        ]);

        Collection::create([
            'name' => 'Trending Now',
            'slug' => 'trending-now',
            'description' => 'Explore the styles and products currently trending with our customers.',
            'imageurl' => 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
        ]);

        Collection::create([
            'name' => 'Limited Edition',
            'slug' => 'limited-edition',
            'description' => 'Exclusive products available for a limited time only.',
            'imageurl' => 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
        ]);

        Collection::create([
            'name' => 'Classic Collection',
            'slug' => 'classic-collection',
            'description' => 'Timeless styles and carefully selected pieces that never go out of fashion.',
            'imageurl' => 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=80',
        ]);
    }
}

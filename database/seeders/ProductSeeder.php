<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Collection;
use App\Models\Category;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'category_id' => 1,
            'collection_id' => 1,
            'name' => 'Elegant Pearl Necklace Set',
            'price' => 2499.00,
            'count' => 12,
            'description' => 'A sophisticated pearl necklace set designed for elegant occasions.',
            'images' => [
                'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 1,
            'collection_id' => 3,
            'name' => 'Golden Floral Necklace Set',
            'price' => 3199.00,
            'count' => 8,
            'description' => 'A delicate floral-inspired necklace set with a beautiful golden finish.',
            'images' => [
                'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 1,
            'collection_id' => 5,
            'name' => 'Royal Kundan Necklace Set',
            'price' => 5499.00,
            'count' => 5,
            'description' => 'A premium Kundan necklace set inspired by traditional Indian jewelry.',
            'images' => [
                'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 2,
            'collection_id' => 2,
            'name' => 'Classic Gold Pendant Set',
            'price' => 1899.00,
            'count' => 15,
            'description' => 'A timeless pendant set suitable for everyday wear and special occasions.',
            'images' => [
                'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 2,
            'collection_id' => 4,
            'name' => 'Ruby Heart Pendant',
            'price' => 2299.00,
            'count' => 10,
            'description' => 'A charming heart-shaped pendant featuring a rich ruby-inspired centerpiece.',
            'images' => [
                'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 2,
            'collection_id' => 8,
            'name' => 'Diamond Halo Pendant',
            'price' => 4299.00,
            'count' => 6,
            'description' => 'An elegant halo pendant designed to add sparkle to any outfit.',
            'images' => [
                'https://images.unsplash.com/photo-1599459183200-59c7687a0275?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 3,
            'collection_id' => 3,
            'name' => 'Crystal Drop Earrings',
            'price' => 1599.00,
            'count' => 20,
            'description' => 'Elegant crystal drop earrings with a graceful silhouette.',
            'images' => [
                'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 3,
            'collection_id' => 6,
            'name' => 'Pearl Stud Earrings',
            'price' => 999.00,
            'count' => 25,
            'description' => 'Minimal pearl stud earrings perfect for everyday elegance.',
            'images' => [
                'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 3,
            'collection_id' => 7,
            'name' => 'Golden Hoop Earrings',
            'price' => 1299.00,
            'count' => 18,
            'description' => 'Classic golden hoops with a modern polished finish.',
            'images' => [
                'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 4,
            'collection_id' => 5,
            'name' => 'Crystal harmonal Ring',
            'price' => 1799.00,
            'count' => 9,
            'description' => 'A refined solitaire-style ring with a clean and timeless design.',
            'images' => [
                'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
            ],
        ]);
        Product::create([
            'category_id' => 4,
            'collection_id' => 5,
            'name' => 'Classic Solitaire Ring',
            'price' => 2799.00,
            'count' => 9,
            'description' => 'A refined solitaire-style ring with a clean and timeless design.',
            'images' => [
                'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 4,
            'collection_id' => 4,
            'name' => 'Rose Gold Statement Ring',
            'price' => 2199.00,
            'count' => 11,
            'description' => 'A stylish statement ring featuring a warm rose-gold finish.',
            'images' => [
                'https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 5,
            'collection_id' => 1,
            'name' => 'Delicate Chain Bracelet',
            'price' => 1199.00,
            'count' => 16,
            'description' => 'A lightweight chain bracelet designed for simple everyday styling.',
            'images' => [
                'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 5,
            'collection_id' => 7,
            'name' => 'Charm Bracelet',
            'price' => 1799.00,
            'count' => 13,
            'description' => 'A playful charm bracelet featuring delicate decorative details.',
            'images' => [
                'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 6,
            'collection_id' => 2,
            'name' => 'Traditional Gold Bangles',
            'price' => 2999.00,
            'count' => 14,
            'description' => 'Traditional-inspired gold bangles crafted for festive occasions.',
            'images' => [
                'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 6,
            'collection_id' => 9,
            'name' => 'Classic Gold Bangle Set',
            'price' => 2499.00,
            'count' => 10,
            'description' => 'A versatile set of classic gold-toned bangles for timeless styling.',
            'images' => [
                'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 7,
            'collection_id' => 5,
            'name' => 'Floral Pearl Brooch',
            'price' => 1399.00,
            'count' => 7,
            'description' => 'A delicate floral brooch decorated with elegant pearl details.',
            'images' => [
                'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 8,
            'collection_id' => 3,
            'name' => 'Velvet Choker Necklace',
            'price' => 899.00,
            'count' => 22,
            'description' => 'A stylish velvet choker designed for a bold and modern look.',
            'images' => [
                'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 8,
            'collection_id' => 8,
            'name' => 'Layered Crystal Choker',
            'price' => 1699.00,
            'count' => 9,
            'description' => 'A layered choker featuring sparkling crystal-inspired details.',
            'images' => [
                'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 9,
            'collection_id' => 4,
            'price' => 1899.00,
            'name' => 'Traditional Maang Tikka',
            'count' => 8,
            'description' => 'A traditional Maang Tikka designed to complement festive and bridal looks.',
            'images' => [
                'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 2,
            'collection_id' => 4,
            'name' => 'Silver Pendant',
            'price' => 2299.00,
            'count' => 10,
            'description' => 'A charming heart-shaped pendant featuring a rich ruby-inspired centerpiece.',
            'images' => [
                'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 9,
            'collection_id' => 9,
            'name' => 'Bridal Pearl Maang Tikka',
            'price' => 3299.00,
            'count' => 6,
            'description' => 'A graceful bridal Maang Tikka featuring pearl-inspired embellishments.',
            'images' => [
                'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
            ],
        ]);

        Product::create([
            'category_id' => 8,
            'collection_id' => 3,
            'name' => 'Velvet Luxe Necklace',
            'price' => 299.00,
            'count' => 22,
            'description' => 'A stylish velvet choker designed for a bold and modern look.',
            'images' => [
                'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
            ],
        ]);
        Category::each(function ($category) {
            $category->update([
                'count' => Product::where('category_id', $category->id)->count(),
            ]);
        });

        Collection::each(function ($collection) {
            $collection->update([
                'count' => Product::where('collection_id', $collection->id)->count(),
            ]);
        });
    }
}

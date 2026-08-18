<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'name'=> "Necklace Sets",
            "slug"=> "necklace-sets",
            "description"=> "Beautiful necklace sets.",
            "imageurl"=> "https://estele.co/cdn/shop/files/NECKLACE_SETS_jpg.jpg?v=1777291365&width=600"
        ]);

        Category::create([
            "name"=> "Pendant Sets",
            "slug"=> "pendant-sets",
            "description"=> "Beautiful pendant sets.",
            "imageurl"=> "https://estele.co/cdn/shop/files/Pendant_Sets_jpg.jpg?v=1777291365&width=600"
        ]);

        Category::create([
            "name"=> "Earrings",
            "slug"=> "earrings",
            "description"=> "Elegant earrings.",
            "imageurl"=> "https://estele.co/cdn/shop/files/Earrings_jpg.jpg?v=1777291364&width=600"
        ]);

        Category::create([
            "name"=> "Rings",
            "slug"=> "rings",
            "description"=> "Elegant rings.",
            "imageurl"=> "https://estele.co/cdn/shop/files/Finger_Rings.jpg_1.jpg?v=1777291364&width=600"
        ]);
        Category::create([
            "name"=> "Bracelets",
            "slug"=> "bracelets",
            "description"=> "Beautiful bracelets.",
            "imageurl"=> "https://estele.co/cdn/shop/files/Bracelets_jpg.jpg?v=1777291367&width=600"
        ]);
        Category::create([
            "name"=> "Bangles",
            "slug"=> "bangles",
            "description"=> "Beautiful bangles.",
            "imageurl"=> "https://estele.co/cdn/shop/files/Bangles_jpg.jpg?v=1777291366&width=600"
        ]);
        Category::create([
            "name"=> "Brooch",
            "slug"=> "brooch",
            "description"=> "Beautiful brooches.",
            "imageurl"=> "https://estele.co/cdn/shop/files/Brooch_Pin_jpg.jpg?v=1777291366&width=600"
        ]);
        Category::create([
            "name"=> "Chokers",
            "slug"=> "chokers",
            "description"=> "Beautiful chokers.",
            "imageurl"=> "https://estele.co/cdn/shop/files/Choker_Set.jpg_1.jpg?v=1777291366&width=600"
        ]);
        Category::create([
            "name"=> "Maang Tikka",
            "slug"=> "maang-tikka",
            "description"=> "Beautiful maang tikka.",
            "imageurl"=> "https://estele.co/cdn/shop/files/Maang_Tikka_jpg.jpg?v=1778176394&width=600"
        ]);

    }
}

export type Category = {
    id: string;
    name: string;
    slug: string;
    description: string;
    imgUrl?: string;
};

export type Collection = {
    id: string;
    name: string;
    slug: string;
    description: string;
    featured?: boolean;
    imgUrl?: string;
};

export type Product = {
    id: string | number;
    name: string;
    title?: string;
    price: number;
    stock: number;
    categoryId: string;
    collectionId: string;
    imageUrls: string[];
    description: string;
    href?: string;
};

export const dummyCategories: Category[] = [
    {
        id: "cat-necklace-sets",
        name: "Necklace Sets",
        slug: "necklace-sets",
        description: "Beautiful necklace sets.",
        imgUrl: "https://estele.co/cdn/shop/files/NECKLACE_SETS_jpg.jpg?v=1777291365&width=600"
    },
    {
        id: "cat-pendant-sets",
        name: "Pendant Sets",
        slug: "pendant-sets",
        description: "Beautiful pendant sets.",
        imgUrl: "https://estele.co/cdn/shop/files/Pendant_Sets_jpg.jpg?v=1777291365&width=600"
    },
    {
        id: "cat-earrings",
        name: "Earrings",
        slug: "earrings",
        description: "Elegant earrings.",
        imgUrl: "https://estele.co/cdn/shop/files/Earrings_jpg.jpg?v=1777291364&width=600"
    },
    {
        id: "cat-rings",
        name: "Rings",
        slug: "rings",
        description: "Elegant rings.",
        imgUrl: "https://estele.co/cdn/shop/files/Finger_Rings.jpg_1.jpg?v=1777291364&width=600"
    },
    {
        id: "cat-bracelets",
        name: "Bracelets",
        slug: "bracelets",
        description: "Beautiful bracelets.",
        imgUrl: "https://estele.co/cdn/shop/files/Bracelets_jpg.jpg?v=1777291367&width=600"
    },
    {
        id: "cat-bangles",
        name: "Bangles",
        slug: "bangles",
        description: "Beautiful bangles.",
        imgUrl: "https://estele.co/cdn/shop/files/Bangles_jpg.jpg?v=1777291366&width=600"
    },
    {
        id: "cat-brooch",
        name: "Brooch",
        slug: "brooch",
        description: "Beautiful brooches.",
        imgUrl: "https://estele.co/cdn/shop/files/Brooch_Pin_jpg.jpg?v=1777291366&width=600"
    },
    {
        id: "cat-chokers",
        name: "Chokers",
        slug: "chokers",
        description: "Beautiful chokers.",
        imgUrl: "https://estele.co/cdn/shop/files/Choker_Set.jpg_1.jpg?v=1777291366&width=600"
    },
    {
        id: "cat-maang-tikka",
        name: "Maang Tikka",
        slug: "maang-tikka",
        description: "Beautiful maang tikka.",
        imgUrl: "https://estele.co/cdn/shop/files/Maang_Tikka_jpg.jpg?v=1778176394&width=600"
    },
];

export const dummyBudgetCollections = [
    {
        title: "₹999",
        href: "/collections/under-999",
        image:
            "https://estele.co/cdn/shop/files/Path_84397_2x_c51eb4f5-4c4f-4ee3-a489-d5daec626af9.png?v=1747328297",
    },
    {
        title: "₹1,499",
        href: "/collections/under-1999",
        image:
            "https://estele.co/cdn/shop/files/Path_84397_2x_c51eb4f5-4c4f-4ee3-a489-d5daec626af9.png?v=1747328297",
    },
    {
        title: "₹2,999",
        href: "/collections/under-2999",
        image:
            "https://estele.co/cdn/shop/files/Path_84397_2x_c51eb4f5-4c4f-4ee3-a489-d5daec626af9.png?v=1747328297",
    },
    {
        title: "Pearls",
        href: "/collections/pearl-collection",
        image:
            "https://estele.co/cdn/shop/files/Mask_Group_406_2x_02f982e3-943b-4bbb-ba34-450e126d2bc5.png?v=1747328554",
    },
];

export const dummyCollections: Collection[] = [
    { id: "col-bestsellers", name: "Bestsellers", slug: "bestsellers", description: "Most-loved everyday essentials.", featured: true },
    { id: "col-newin", name: "New In", slug: "new-in", description: "Fresh drops of the season.", featured: true },
    { id: "col-matte", name: "Matte Story", slug: "matte-story", description: "Long-wear matte finishes.", featured: false },
];

export const dummyProducts: Product[] = [
    {
        id: "prd-1",
        name: "Velvet Matte Lipstick — Rosewood",
        title: "Velvet Matte Lipstick — Rosewood",
        price: 599,
        stock: 128,
        categoryId: "cat-lips",
        collectionId: "col-bestsellers",
        imageUrls: ["https://estele.co/cdn/shop/files/Untitled-1_1d5591b5-9b5f-4016-860a-22d372f3530a.jpg?v=1783930024&width=600", "https://estele.co/cdn/shop/files/Untitled-2_e5b5b245-1de5-4251-ae01-437e7d56cb3f.jpg?v=1784351837&width=600"],
        description: "Weightless matte colour with 10-hour wear.",
        href: "/collections/new-arrivals/products/rajya-white-cz-hasli-necklace-set",
    },
    {
        id: "prd-2",
        name: "Intense Kajal — Jet Black",
        title: "Intense Kajal — Jet Black",
        price: 299,
        stock: 340,
        categoryId: "cat-eyes",
        collectionId: "col-bestsellers",
        imageUrls: ["https://estele.co/cdn/shop/files/Untitled-1_7b99eb6f-8a67-471c-ba11-4eecdc05add2.jpg?v=1783930089&width=600", "https://estele.co/cdn/shop/files/Untitled-2_8ecf423c-e50c-4216-b1b8-a7ddbb0df6a1.jpg?v=1784352222&width=600"],
        description: "Smudge-proof, waterproof definition.",
        href: "/collections/new-arrivals/products/rajwada-green-cz-hasli-necklace-set",
    },
    {
        id: "prd-3",
        name: "Glow Serum Foundation — Beige",
        title: "Glow Serum Foundation — Beige",
        price: 899,
        stock: 42,
        categoryId: "cat-face",
        collectionId: "col-newin",
        imageUrls: ["https://estele.co/cdn/shop/files/Untitled-1_fe49d788-a4c7-429a-b79c-5bb83fb3c547.jpg?v=1783932168&width=600", "https://estele.co/cdn/shop/files/Untitled-2_e563e9f4-2c5d-48d6-b253-cee641886bcb.jpg?v=1784268034&width=600"],
        description: "Skin-loving hydration with medium coverage.",
        href: "/collections/new-arrivals/products/maharani-ruby-cz-hasli-necklace-set",
    },
    {
        id: 10417768563005,
        name: "Rajya White CZ Hasli Necklace Set",
        title: "Rajya White CZ Hasli Necklace Set",
        price: 2750,
        stock: 50,
        categoryId: "cat-face",
        collectionId: "col-newin",
        imageUrls: ["https://estele.co/cdn/shop/files/Untitled-1_1d5591b5-9b5f-4016-860a-22d372f3530a.jpg?v=1783930024&width=600", "https://estele.co/cdn/shop/files/Untitled-2_e5b5b245-1de5-4251-ae01-437e7d56cb3f.jpg?v=1784351837&width=600"],
        description: "Rajya White CZ Hasli Necklace Set",
        href: "/collections/new-arrivals/products/rajya-white-cz-hasli-necklace-set",
    },
    {
        id: 10417917231421,
        name: "Rajwada Green CZ Hasli Necklace Set",
        title: "Rajwada Green CZ Hasli Necklace Set",
        price: 3500,
        stock: 50,
        categoryId: "cat-face",
        collectionId: "col-newin",
        imageUrls: ["https://estele.co/cdn/shop/files/Untitled-1_7b99eb6f-8a67-471c-ba11-4eecdc05add2.jpg?v=1783930089&width=600", "https://estele.co/cdn/shop/files/Untitled-2_8ecf423c-e50c-4216-b1b8-a7ddbb0df6a1.jpg?v=1784352222&width=600"],
        description: "Rajwada Green CZ Hasli Necklace Set",
        href: "/collections/new-arrivals/products/rajwada-green-cz-hasli-necklace-set",
    },
    {
        id: 10419605209405,
        name: "Maharani Ruby CZ Hasli Necklace Set",
        title: "Maharani Ruby CZ Hasli Necklace Set",
        price: 2500,
        stock: 50,
        categoryId: "cat-face",
        collectionId: "col-newin",
        imageUrls: ["https://estele.co/cdn/shop/files/Untitled-1_fe49d788-a4c7-429a-b79c-5bb83fb3c547.jpg?v=1783932168&width=600", "https://estele.co/cdn/shop/files/Untitled-2_e563e9f4-2c5d-48d6-b253-cee641886bcb.jpg?v=1784268034&width=600"],
        description: "Maharani Ruby CZ Hasli Necklace Set",
        href: "/collections/new-arrivals/products/maharani-ruby-cz-hasli-necklace-set",
    },
];

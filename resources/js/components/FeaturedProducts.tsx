import { Heart, Eye, GitCompareArrows } from "lucide-react";

type Product = {
    id: number;
    title: string;
    image: string;
    hoverImage: string;
    href: string;
    originalPrice: number;
    price: number;
};

const products: Product[] = [
    {
        id: 10417768563005,
        title: "Rajya White CZ Hasli Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/Untitled-1_1d5591b5-9b5f-4016-860a-22d372f3530a.jpg?v=1783930024&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_e5b5b245-1de5-4251-ae01-437e7d56cb3f.jpg?v=1784351837&width=600",
        href: "/collections/new-arrivals/products/rajya-white-cz-hasli-necklace-set",
        originalPrice: 5499,
        price: 2750,
    },
    {
        id: 10417917231421,
        title: "Rajwada Green CZ Hasli Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/Untitled-1_7b99eb6f-8a67-471c-ba11-4eecdc05add2.jpg?v=1783930089&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_8ecf423c-e50c-4216-b1b8-a7ddbb0df6a1.jpg?v=1784352222&width=600",
        href: "/collections/new-arrivals/products/rajwada-green-cz-hasli-necklace-set",
        originalPrice: 6999,
        price: 3500,
    },
    {
        id: 10419605209405,
        title: "Maharani Ruby CZ Hasli Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/Untitled-1_fe49d788-a4c7-429a-b79c-5bb83fb3c547.jpg?v=1783932168&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_e563e9f4-2c5d-48d6-b253-cee641886bcb.jpg?v=1784268034&width=600",
        href: "/collections/new-arrivals/products/maharani-ruby-cz-hasli-necklace-set",
        originalPrice: 4999,
        price: 2500,
    },
    {
        id: 10419605209405,
        title: "Maharani Ruby CZ Hasli Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/Untitled-1_fe49d788-a4c7-429a-b79c-5bb83fb3c547.jpg?v=1783932168&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_e563e9f4-2c5d-48d6-b253-cee641886bcb.jpg?v=1784268034&width=600",
        href: "/collections/new-arrivals/products/maharani-ruby-cz-hasli-necklace-set",
        originalPrice: 4999,
        price: 2500,
    },
];

function ProductCard({ product }: { product: Product }) {
    return (
        <article className="group">
            <div className="relative overflow-hidden">
                <a href={product.href}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="aspect-square w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />

                    <img
                        src={product.hoverImage}
                        alt=""
                        className="absolute inset-0 aspect-square w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                </a>

                {/* Sale badge */}
                <span className="absolute left-3 top-3 bg-black px-2 py-1 text-xs text-white">
                    -50%
                </span>

                {/* Wishlist */}
                <button
                    type="button"
                    aria-label="Add to Wishlist"
                    className="absolute right-3 top-3 rounded-full bg-white p-2"
                >
                    <Heart size={17} strokeWidth={1.5} />
                </button>

                {/* Product actions */}
                <div className="absolute bottom-3 left-3 right-3 flex translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <button
                        type="button"
                        className="flex flex-1 items-center justify-center gap-2 bg-white py-2 text-sm"
                    >
                        <Eye size={16} />
                        Quick view
                    </button>

                    <button
                        type="button"
                        aria-label="Compare"
                        className="bg-white p-2"
                    >
                        <GitCompareArrows size={16} />
                    </button>
                </div>
            </div>

            <div className="pt-3">
                <h3 className="text-sm">
                    <a href={product.href}>{product.title}</a>
                </h3>

                <div className="mt-1 flex items-center gap-2">
                    <del className="text-sm text-gray-400">
                        ₹{product.originalPrice.toLocaleString("en-IN")}
                    </del>

                    <span className="text-sm font-medium">
                        ₹{product.price.toLocaleString("en-IN")}
                    </span>
                </div>
            </div>
        </article>
    );
}

export default function FeaturedProducts() {
    return (
        <section className="mx-auto mt-12 max-w-7xl px-4 py-10">
            <div className="mb-7 text-center">
                <h2 className="text-xl text-gray-500 font-medium tracking-wide">
                    NEW ARRIVALS
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

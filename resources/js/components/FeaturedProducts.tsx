import { Heart, Eye, GitCompareArrows } from "lucide-react";
import { Product, dummyProducts } from "@/lib/data";

const products = dummyProducts;

function ProductCard({ product }: { product: Product }) {
    return (
        <article className="group">
            <div className="relative overflow-hidden">
                <a href={product.href}>
                    <img
                        src={product.imageUrls[0]}
                        alt={product.title}
                        className="aspect-square w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />

                    {product.imageUrls.length > 1 && (
                        <img
                            src={product.imageUrls[1]}
                            alt=""
                            className="absolute inset-0 aspect-square w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                    )}
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

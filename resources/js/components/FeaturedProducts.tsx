import { Product } from "@/types/product";
import { Heart, Eye, GitCompareArrows } from "lucide-react";


function ProductCard({ product }: { product: Product }) {
    return (
        <article className="group">
            <div className="relative overflow-hidden">
                <a href={""}>
                    <img
                        src={product.images ? product.images[0] : ""}
                        alt={product.name}
                        className="aspect-square w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />

                    {product.images && product.images.length > 1 && (
                        <img
                            src={product.images[1]}
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
            </div>

            <div className="pt-3">
                <h3 className="text-sm">
                    <a href={""}>{product.name}</a>
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

export default function FeaturedProducts({ products, text }: { products: Product[], text: string }) {
    return (
        <section className="mx-auto mt-12 max-w-7xl px-4 py-10">
            <div className="mb-7 text-center">
                <h2 className="text-xl uppercase text-gray-500 font-medium tracking-wide">
                    {text}
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

import { Heart, Eye, GitCompareArrows } from "lucide-react";
import { dummyProducts } from "@/lib/data";

const products = dummyProducts;

export default function FeaturedProducts() {
    return (
        <section className="mx-auto mb-12 mt-12 max-w-[1600px] px-4">
            <div className="grid grid-cols-2 gap-x-2.5 gap-y-8 md:grid-cols-3 md:gap-x-7 lg:grid-cols-4">
                {products.map((product) => (
                    <article key={product.id} className="group">
                        <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                            <a href={product.href}>
                                <img
                                    src={product.imageUrls[0]}
                                    alt={product.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    loading="lazy"
                                />

                                {product.imageUrls.length > 1 && (
                                    <img
                                        src={product.imageUrls[1]}
                                        alt={product.title}
                                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                        loading="lazy"
                                    />
                                )}
                            </a>


                            {/* Wishlist */}
                            <button
                                className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"
                                aria-label="Add to wishlist"
                            >
                                <Heart size={17} strokeWidth={1.5} />
                            </button>

                            {/* Hover actions */}
                            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                <button className="flex items-center gap-1 bg-white px-3 py-2 text-xs shadow-sm">
                                    <Eye size={15} />
                                    Quick view
                                </button>

                                <button
                                    className="flex h-8 w-8 items-center justify-center bg-white shadow-sm"
                                    aria-label="Compare"
                                >
                                    <GitCompareArrows size={15} />
                                </button>
                            </div>
                        </div>

                        {/* Product info */}
                        <div className="pt-3">
                            <h3 className="text-sm font-normal text-[#222]">
                                <a href={product.href}>{product.title}</a>
                            </h3>

                            <div className="mt-1 flex items-center gap-2 text-sm">
                                <span className="text-[#222]">
                                    ₹{product.price.toLocaleString("en-IN")}
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

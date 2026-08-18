import { Heart, Eye, GitCompareArrows } from "lucide-react";
import { Product } from "@/types/product";


export default function FeaturedProducts({ featuredProducts }: { featuredProducts: Product[] }) {
    return (
        <section className="mx-auto mb-12 mt-12 max-w-[1600px] px-4">
            <div className="grid grid-cols-2 gap-x-2.5 gap-y-8 md:grid-cols-3 md:gap-x-7 lg:grid-cols-4">
                {featuredProducts.map((product: Product) => (
                    <article key={product.id} className="group">
                        <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                            <a href={"/"}>
                                <img
                                    src={product.images ? product.images[0] : ""}
                                    alt={product.name}
                                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    loading="lazy"
                                />

                                {product.images && product.images.length > 1 && (
                                    <img
                                        src={product.images[1]}
                                        alt={product.name}
                                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                        loading="lazy"
                                    />
                                )}
                            </a>


                        </div>

                        {/* Product info */}
                        <div className="pt-3">
                            <h3 className="text-sm font-normal text-[#222]">
                                <a href={""}>{product.name}</a>
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

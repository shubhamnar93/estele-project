import { Heart } from "lucide-react";

type Product = {
    id: number;
    title: string;
    image: string;
    hoverImage: string;
    href: string;
    originalPrice: number;
    price: number;
};

export default function ProductCard({ product }: { product: Product }) {
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

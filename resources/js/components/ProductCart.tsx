import { Product } from "@/types/product";
import { Link } from "@inertiajs/react";


export default function ProductCard({ product }: { product: Product }) {
    return (
        <article className="group ">
            <div className="relative overflow-hidden">
                <Link href={`/products/${product.id}`}>
                    <img
                        src={product.images && product.images[0]}
                        alt={product.name}
                        className="aspect-square rounded-xl w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />

                    <img
                        src={product.images && product.images.length > 1 ? product.images[1] : ""}
                        alt=""
                        className="absolute inset-0 aspect-square w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                </Link>

                {/* Sale badge */}
                <span className="absolute left-3 top-3 bg-black px-2 py-1 text-xs text-white">
                    -50%
                </span>
            </div>

            <div className="pt-3">
                <h3 className="text-sm">
                    <a href={"/"}>{product.name}</a>
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

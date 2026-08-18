import { Product } from "@/types/product";
import ProductCard from "./ProductCart";

export default function CollectionGrid({ products }: { products: Product[] }) {
    return (
        <section className="mx-auto mt-12 max-w-7xl px-4 py-10">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
                {products.map((product) => (
                    <ProductCard key={`products-${product.id}`} product={product} />
                ))}
            </div>
        </section>
    );
}

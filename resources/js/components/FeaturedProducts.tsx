import { Product } from "@/types/product";
import ProductCard from "./ProductCart";

export default function FeaturedProducts({ products, text }: { products: Product[], text: string }) {
    return (
        <section className="mx-auto mt-12 max-w-7xl px-4 py-10">
            <div className="mb-7 text-center">
                <h2 className="text-xl uppercase text-gray-500 font-medium tracking-wide">
                    {text}
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
                {products.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

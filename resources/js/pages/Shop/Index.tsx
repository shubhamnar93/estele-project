import CollectionHeader from "@/components/FilterSection"
import Layout from "../Layout"
import CollectionGrid from "@/components/CollectionGrid"
import { Product } from "@/types/product"
import { Collection } from "@/types/collection"
import { Category } from "@/types/category"
import { useEffect, useMemo, useState } from "react"

const sortOptions = [
    { label: "Featured", value: "manual" },
    { label: "Alphabetically, A-Z", value: "title-ascending" },
    { label: "Alphabetically, Z-A", value: "title-descending" },
    { label: "Price, low to high", value: "price-ascending" },
    { label: "Price, high to low", value: "price-descending" },
    { label: "Date, old to new", value: "created-ascending" },
    { label: "Date, new to old", value: "created-descending" },
];

export default function Shop({ products, collection, categories }: { categories: Category[], collection: Collection, products: Product[] }) {
    const [selected, setSelected] = useState<Set<number>>(new Set());
    const [selectedSort, setSelectedSort] = useState("manual");


    const [price, setPrice] = useState<[number, number]>([0, 0]);

    const { productShown, minPrice, maxPrice } = useMemo(() => {
        // 1. Filter by category
        const filtered = products.filter((p) => {
            if (selected.size === 0) return true;

            return selected.has(p.category_id);
        });

        // 2. Sort
        const sorted = [...filtered].sort((a, b) => {
            switch (selectedSort) {
                case "title-ascending":
                    return a.name.localeCompare(b.name);

                case "title-descending":
                    return b.name.localeCompare(a.name);

                case "price-ascending":
                    return Number(a.price) - Number(b.price);

                case "price-descending":
                    return Number(b.price) - Number(a.price);

                case "created-ascending":
                    return (
                        new Date(a.created_at).getTime() -
                        new Date(b.created_at).getTime()
                    );

                case "created-descending":
                    return (
                        new Date(b.created_at).getTime() -
                        new Date(a.created_at).getTime()
                    );

                case "manual":
                default:
                    return 0;
            }
        });

        // 3. Calculate actual price range
        const prices = sorted.map((p) => Number(p.price));

        const actualMinPrice = prices.length
            ? Math.min(...prices)
            : 0;

        const actualMaxPrice = prices.length
            ? Math.max(...prices)
            : 0;

        // 4. Determine selected price range
        const selectedMinPrice = price[0] || actualMinPrice;
        const selectedMaxPrice = price[1] || actualMaxPrice;

        // 5. Filter by price
        const productShown = sorted.filter((p) => {
            const productPrice = Number(p.price);

            return (
                productPrice >= selectedMinPrice &&
                productPrice <= selectedMaxPrice
            );
        });

        return {
            productShown,
            minPrice: actualMinPrice,
            maxPrice: actualMaxPrice,
        };
    }, [products, selected, selectedSort, price]);


    return (
        <Layout>
            <img src={`${collection.imageurl}`} className="w-full object-cover h-[600px]" />
            <div className="max-w-[1200px] mt-8 mx-auto px-4">
                <h3 className="text-2xl font-bold">{collection.name}</h3>
                <p>{collection.description}</p>
            </div>
            <section className="max-w-[1200px] mt-12 mb-0 mx-auto px-4">
                <CollectionHeader price={price} setPrice={setPrice} priceMax={maxPrice} priceMin={minPrice} selectedSort={selectedSort} setSelectedSort={(a: string) => setSelectedSort(a)} categories={categories} sortOptions={sortOptions} selected={selected} setSelected={setSelected} />
            </section>
            {productShown && (
                <CollectionGrid products={productShown} />
            )
            }
        </Layout>
    )
}

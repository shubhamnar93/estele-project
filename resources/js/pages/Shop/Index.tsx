import CollectionHeader from "@/components/FilterSection"
import Layout from "../Layout"
import CollectionGrid from "@/components/CollectionGrid"
import { Product } from "@/types/product"
import { Collection } from "@/types/collection"
import { Category } from "@/types/category"
import { useMemo, useState } from "react"

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

    const productShown = useMemo(() => {
        // 1. Filter by category
        const filtered = products.filter((p) => {
            if (selected.size === 0) return true;
            return selected.has(p.category_id);
        });

        // 2. Sort
        return [...filtered].sort((a, b) => {
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
                    return new Date(a.created_at).getTime() -
                        new Date(b.created_at).getTime();

                case "created-descending":
                    return new Date(b.created_at).getTime() -
                        new Date(a.created_at).getTime();

                case "manual":
                default:
                    return 0;
            }
        });
    }, [products, selected, selectedSort]);


    return (
        <Layout>
            <img src="https://estele.co/cdn/shop/files/Rakshabandhan_Banner_Creative_2612-1080-morbagh_creative.jpg_1.jpg?format=pjpg&v=1785494658&width=2612" />
            <div className="max-w-[1200px] mt-8 mx-auto px-4">
                <h3 className="text-2xl text-bold">{collection.name}</h3>
                <p>{collection.description}</p>
            </div>
            <section className="max-w-[1200px] mt-12 mb-0 mx-auto px-4">
                <CollectionHeader selectedSort={selectedSort} setSelectedSort={(a: string) => setSelectedSort(a)} categories={categories} sortOptions={sortOptions} selected={selected} setSelected={setSelected} />
            </section>
            {productShown && (
                <CollectionGrid products={productShown} />
            )
            }
        </Layout>
    )
}

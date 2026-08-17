import { X } from "lucide-react";
import { useState } from "react";

type category = { name: string, href: string, count: number }

const categories: category[] = [
    {
        name: "Necklace Set",
        count: 117,
        href: "/collections/crystal-blooms?filter.p.product_type=Bracelets&filter.p.product_type=Necklace+Set",
    },
    {
        name: "Bracelets",
        count: 62,
        href: "/collections/crystal-blooms",
    },
    {
        name: "Bangles",
        count: 3,
        href: "/collections/crystal-blooms?filter.p.product_type=Bracelets&filter.p.product_type=Bangles",
    },
    {
        name: "Rings",
        count: 6,
        href: "/collections/crystal-blooms?filter.p.product_type=Bracelets&filter.p.product_type=Rings",
    },
];

export default function ProductTypeFilter() {
    const [selected, setSelected] = useState<null | category>(null)
    return (
        <>
            <div className="mt-4">
                <h5 className="mb-4 text-lg font-semibold uppercase tracking-wide">
                    CATEGORIES
                </h5>
                <ul className="flex gap-4">
                    {categories.map((c) =>
                        <li onClick={() => setSelected(c)} className="bg-[#ffe3ec] px-2 py-1 rounded-md border-1 capitalize">{c.name} Set({c.count})</li>
                    )}
                </ul>
            </div>
            {selected &&
                <div className="flex gap-4 mt-8">
                    <div className="flex gap-2 pr-4 border-r-1 border-gray-400">
                        <div className="text-red-500">{selected.count} </div>
                        <div>Product found</div>
                    </div>
                    <div onClick={() => setSelected(null)} className="flex gap-1 cursor-pointer">
                        <X className="w-4" />
                        Bangles
                    </div>
                </div>
            }
        </>

    );
}

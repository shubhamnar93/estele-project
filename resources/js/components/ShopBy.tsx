import { useEffect, useRef, useState } from "react";
import { Collection } from "@/types/collection";

function usePerView() {
    // 8 on desktop, 3 on tablet, 2 on mobile — matches the source
    const [perView, setPerView] = useState(8);
    useEffect(() => {
        const calc = () => {
            if (window.innerWidth < 768) setPerView(2);
            else if (window.innerWidth < 1024) setPerView(3);
            else setPerView(8);
        };
        calc();
        window.addEventListener("resize", calc);
        return () => window.removeEventListener("resize", calc);
    }, []);
    return perView;
}

export default function CategoryCarousel({ heading, categories, catOrCol }: { catOrCol: "category" | "collection", heading: string, categories: Collection[] }) {
    const perView = usePerView();
    const trackRef = useRef(null);
    const [page, setPage] = useState(0);

    const pageCount = Math.ceil(categories.length / perView);

    // reset page if it goes out of range on resize
    useEffect(() => {
        if (page >= pageCount) setPage(0);
    }, [pageCount, page]);

    return (

        <section className="py-4 mt-12 my-2.5 mx-auto">
            <div className="max-w-[1600px] mx-auto px-4">
                {/* heading */}
                <h3
                    className="text-center mb-5"
                    style={{
                        fontSize: "23px",
                        color: "rgba(63,63,63,0.77)",
                        lineHeight: "30px",
                        fontWeight: 400,
                    }}
                >
                    {heading}
                </h3>

                {/* viewport */}
                <div className="overflow-x-auto scrollbar-none ">
                    <div
                        ref={trackRef}
                        className="flex transition-transform duration-500 ease-out flex items-center justify-center gap-4 "
                        style={{
                            transform: `translateX(-${page * 100}%)`,
                        }}
                    >
                        {categories.map((c) => (
                            <a
                                key={c.id}
                                href={`/collections/${c.id}`}
                                className="group block shrink-0 min-w-0 text-center"
                            >
                                {/* image — 2:3 portrait, rounded 8% like source */}
                                <div
                                    className="relative w-full overflow-hidden bg-gray-100"
                                    style={{ aspectRatio: "2 / 3", borderRadius: "8%" }}
                                >
                                    <img
                                        src={c.imageurl}
                                        alt={c.name}
                                        loading="lazy"
                                        className="w-[115px] h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                {/* caption */}
                                <div className="pt-3 pb-1">
                                    <span className="block text-[13px] text-[#222] group-hover:text-black">
                                        {catOrCol}
                                    </span>
                                    <span className="block text-[11px] text-[#878787] mt-0.5">
                                        <span>{c.count}</span> Products
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}

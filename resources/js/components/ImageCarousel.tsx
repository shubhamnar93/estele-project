import { Link } from "@inertiajs/react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";

const AUTOPLAY_MS = 8500;
const slides = [
    {
        image:
            "https://estele.co/cdn/shop/files/Freedom_Fest_Creatives_Banner_jpg.jpg?format=pjpg&v=1785915712&width=2612",
        link: "/collections/freedom-sale-flat-50",
        alt: "Freedom Fest — Flat 50",
    },
    {
        image:
            "https://estele.co/cdn/shop/files/Rakshabandhan_Banner_Creative_2612-1080-morbagh_creative.jpg_1.jpg?format=pjpg&v=1785494658&width=2612",
        link: "/collections/rakhi-gifting-guide",
        alt: "Rakshabandhan Gifting Guide",
    },
    {
        image:
            "https://estele.co/cdn/shop/files/banner.jpg_3.jpg?format=pjpg&v=1785220320&width=2612",
        link: "/collections/rakhi",
        alt: "Rakhi Collection",
    },
    {
        image:
            "https://estele.co/cdn/shop/files/Hasli_Collection_Banner-2_jpg.jpg?format=pjpg&v=1784201314&width=2612",
        link: "/collections/hasli-collection",
        alt: "Hasli Collection",
    },
    {
        image:
            "https://estele.co/cdn/shop/files/Banner.jpg_2.jpg?format=pjpg&v=1780052350&width=2612",
        link: "/collections/sitara",
        alt: "Sitara Collection",
    },
    {
        image:
            "https://estele.co/cdn/shop/files/Banner.jpg_1_54ef9678-0bf5-4964-a1a1-e441f615f57e.jpg?format=pjpg&v=1778837912&width=2612",
        link: "/collections/maharani-collection",
        alt: "Maharani Collection",
    },
];

export default function Slideshow({ slides = [] }: { slides: { image: string, link: string, alt: string }[] }) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const count = slides.length;

    const go = (next: any) => {
        if (count === 0) return;
        setIndex((i) => (next ? (i + 1) % count : (i - 1 + count) % count));
    };

    useEffect(() => {
        if (paused || count <= 1) return;
        const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
        return () => clearInterval(id);
    }, [paused, count]);

    if (count === 0) return null;

    return (
        <section
            className="relative w-full overflow-hidden bg-black"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="relative w-full aspect-[2.42/1] max-md:aspect-[3/4]">
                {slides.map((s, i) => (
                    <Link
                        key={i}
                        href={"/collections/1"}
                        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                        style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 10 : 0 }}
                        aria-hidden={i !== index}
                    >
                        <img
                            src={s.image}
                            alt={s.alt || ""}
                            className="w-full h-full object-cover"
                            loading={i === 0 ? "eager" : "lazy"}
                        />
                    </Link>
                ))}
            </div>

            <button
                type="button"
                onClick={() => go(false)}
                aria-label="Previous"
                className="absolute top-1/2 left-[30px] -translate-y-1/2 z-20 grid place-items-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/80 text-black hover:bg-white shadow transition"
            >
                <ArrowLeftIcon direction="prev" />
            </button>
            <button
                type="button"
                onClick={() => go(true)}
                aria-label="Next"
                className="absolute top-1/2 right-[30px] -translate-y-1/2 z-20 grid place-items-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/80 text-black hover:bg-white shadow transition"
            >
                <ArrowRightIcon direction="next" />
            </button>

            <ol className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
                {slides.map((_, i) => (
                    <li key={i}>
                        <button
                            type="button"
                            aria-label={`Page dot ${i + 1}`}
                            onClick={() => setIndex(i)}
                            className="block rounded-full transition-all duration-300"
                            style={{
                                width: i === index ? 12 : 8,
                                height: i === index ? 12 : 8,
                                backgroundColor: i === index ? "#000" : "rgba(0,0,0,0.3)",
                            }}
                        />
                    </li>
                ))}
            </ol>
        </section>
    );
}

export function ImageCarousel() {
    return <Slideshow slides={slides} />;
}

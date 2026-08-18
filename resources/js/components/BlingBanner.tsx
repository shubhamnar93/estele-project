import { dummyBudgetCollections as collections } from "@/lib/data";

function CollectionCard({
    title,
    href,
    image,
}: {
    title: string;
    href: string;
    image: string;
}) {
    return (
        <a href={href} className="group block">
            <div className="h-[120px]">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="aspect-square w-[150px] h-[115px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="mt-3 text-center">
                <h3 className="text-sm font-medium">
                    {title}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                    0 Products
                </p>
            </div>
        </a>
    );
}

export default function BlingBanner() {
    return (
        <section className="mb-[50px] mt-12 md:mb-[50px] h-fit">
            <div className="mx-auto justify-around flex items-center gap-y-8 max-w-7xl px-4 md:px-6" >
                {/* Heading */}
                <div className="mb-[30px] text-center">
                    <p className="text-xl">
                        Your Budget,
                    </p>
                    <p className="text-xl">
                        <b>Your Bling</b>
                    </p>
                </div>

                {/* Collections */}
                <div className="grid grid-cols-2 gap-x-2.5 gap-y-2.5 md:grid-cols-2 md:gap-x-[30px] md:gap-y-[30px] lg:grid-cols-4">
                    {collections.map((collection) => (
                        <CollectionCard
                            key={collection.href}
                            {...collection}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

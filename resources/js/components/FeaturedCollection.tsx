import { Heart, Eye, GitCompareArrows } from "lucide-react";

const products = [
    {
        id: 1,
        title: "Petal Glow Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/12_de3d39c8-8ad2-4447-942b-9da2bb0c96a8.jpg?v=1781711427&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_3a97bccb-1c4c-4f4e-bcfc-06f01a0a13f3.jpg?v=1785840980&width=600",
        originalPrice: "₹5,799",
        price: "₹2,900",
        discount: "-50%",
        link: "/collections/rose-gold-collection/products/petal-glow-necklace-set",
    },
    {
        id: 2,
        title: "Crystal Harmony Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/12_6962d233-1b1b-473b-bd05-ef039e56afd3.jpg?v=1781711088&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-1_58142d89-c747-49ad-b291-5e3ccec6ed4f.jpg?v=1785839613&width=600",
        originalPrice: "₹4,299",
        price: "₹2,150",
        discount: "-50%",
        link: "/collections/rose-gold-collection/products/crystal-harmony-necklace-set",
    },
    {
        id: 3,
        title: "Crystal Luxe Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/11_20ee3717-9a74-43d3-aac0-9b789895a265.jpg?v=1781710224&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_6d834cd6-a137-4705-b066-aa979b1c4bd0.jpg?v=1785836124&width=600",
        originalPrice: "₹3,299",
        price: "₹1,650",
        discount: "-50%",
        link: "/collections/rose-gold-collection/products/crystal-luxe-necklace-set",
    },
    {
        id: 4,
        title: "Crystal Whisper Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/11_23369300-5eb0-4ff6-b862-501d12389323.jpg?v=1781710002&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_c147c774-a35f-44c6-b4a3-dc7d8d774986.jpg?v=1785835768&width=600",
        originalPrice: "₹4,499",
        price: "₹2,250",
        discount: "-50%",
        link: "/collections/rose-gold-collection/products/crystal-whisper-necklace-set",
    },
];

export default function FeaturedProducts() {
    return (
        <section className="mx-auto mb-12 mt-12 max-w-[1600px] px-4">
            <div className="grid grid-cols-2 gap-x-2.5 gap-y-8 md:grid-cols-3 md:gap-x-7 lg:grid-cols-4">
                {products.map((product) => (
                    <article key={product.id} className="group">
                        <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                            <a href={product.link}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                                    loading="lazy"
                                />

                                <img
                                    src={product.hoverImage}
                                    alt={product.title}
                                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                    loading="lazy"
                                />
                            </a>

                            {/* Sale badge */}
                            <span className="absolute right-3 top-3 bg-black px-2 py-1 text-[11px] text-white">
                                {product.discount}
                            </span>

                            {/* Wishlist */}
                            <button
                                className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"
                                aria-label="Add to wishlist"
                            >
                                <Heart size={17} strokeWidth={1.5} />
                            </button>

                            {/* Hover actions */}
                            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                <button className="flex items-center gap-1 bg-white px-3 py-2 text-xs shadow-sm">
                                    <Eye size={15} />
                                    Quick view
                                </button>

                                <button
                                    className="flex h-8 w-8 items-center justify-center bg-white shadow-sm"
                                    aria-label="Compare"
                                >
                                    <GitCompareArrows size={15} />
                                </button>
                            </div>
                        </div>

                        {/* Product info */}
                        <div className="pt-3">
                            <h3 className="text-sm font-normal text-[#222]">
                                <a href={product.link}>{product.title}</a>
                            </h3>

                            <div className="mt-1 flex items-center gap-2 text-sm">
                                <del className="text-[#999]">
                                    {product.originalPrice}
                                </del>

                                <span className="text-[#222]">
                                    {product.price}
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

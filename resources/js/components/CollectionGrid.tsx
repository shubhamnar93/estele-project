import ProductCard from "./ProductCart";

type Product = {
    id: number;
    title: string;
    image: string;
    hoverImage: string;
    href: string;
    originalPrice: number;
    price: number;
};
const products: Product[] = [
    {
        id: 10417768563006,
        title: "Rajya White CZ Hasli Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/Untitled-1_1d5591b5-9b5f-4016-860a-22d372f3530a.jpg?v=1783930024&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_e5b5b245-1de5-4251-ae01-437e7d56cb3f.jpg?v=1784351837&width=600",
        href: "/collections/new-arrivals/products/rajya-white-cz-hasli-necklace-set",
        originalPrice: 5499,
        price: 2750,
    },
    {
        id: 10417917231422,
        title: "Rajwada Green CZ Hasli Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/Untitled-1_7b99eb6f-8a67-471c-ba11-4eecdc05add2.jpg?v=1783930089&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_8ecf423c-e50c-4216-b1b8-a7ddbb0df6a1.jpg?v=1784352222&width=600",
        href: "/collections/new-arrivals/products/rajwada-green-cz-hasli-necklace-set",
        originalPrice: 6999,
        price: 3500,
    },
    {
        id: 10419605209401,
        title: "Maharani Ruby CZ Hasli Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/Untitled-1_fe49d788-a4c7-429a-b79c-5bb83fb3c547.jpg?v=1783932168&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_e563e9f4-2c5d-48d6-b253-cee641886bcb.jpg?v=1784268034&width=600",
        href: "/collections/new-arrivals/products/maharani-ruby-cz-hasli-necklace-set",
        originalPrice: 4999,
        price: 2500,
    },
    {
        id: 10419605209405,
        title: "Maharani Ruby CZ Hasli Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/Untitled-1_fe49d788-a4c7-429a-b79c-5bb83fb3c547.jpg?v=1783932168&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_e563e9f4-2c5d-48d6-b253-cee641886bcb.jpg?v=1784268034&width=600",
        href: "/collections/new-arrivals/products/maharani-ruby-cz-hasli-necklace-set",
        originalPrice: 4999,
        price: 2500,
    },
    {
        id: 10417768563005,
        title: "Rajya White CZ Hasli Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/Untitled-1_1d5591b5-9b5f-4016-860a-22d372f3530a.jpg?v=1783930024&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_e5b5b245-1de5-4251-ae01-437e7d56cb3f.jpg?v=1784351837&width=600",
        href: "/collections/new-arrivals/products/rajya-white-cz-hasli-necklace-set",
        originalPrice: 5499,
        price: 2750,
    },
    {
        id: 10417917231421,
        title: "Rajwada Green CZ Hasli Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/Untitled-1_7b99eb6f-8a67-471c-ba11-4eecdc05add2.jpg?v=1783930089&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_8ecf423c-e50c-4216-b1b8-a7ddbb0df6a1.jpg?v=1784352222&width=600",
        href: "/collections/new-arrivals/products/rajwada-green-cz-hasli-necklace-set",
        originalPrice: 6999,
        price: 3500,
    },
    {
        id: 10419605209405,
        title: "Maharani Ruby CZ Hasli Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/Untitled-1_fe49d788-a4c7-429a-b79c-5bb83fb3c547.jpg?v=1783932168&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_e563e9f4-2c5d-48d6-b253-cee641886bcb.jpg?v=1784268034&width=600",
        href: "/collections/new-arrivals/products/maharani-ruby-cz-hasli-necklace-set",
        originalPrice: 4999,
        price: 2500,
    },
    {
        id: 10419605209405,
        title: "Maharani Ruby CZ Hasli Necklace Set",
        image:
            "https://estele.co/cdn/shop/files/Untitled-1_fe49d788-a4c7-429a-b79c-5bb83fb3c547.jpg?v=1783932168&width=600",
        hoverImage:
            "https://estele.co/cdn/shop/files/Untitled-2_e563e9f4-2c5d-48d6-b253-cee641886bcb.jpg?v=1784268034&width=600",
        href: "/collections/new-arrivals/products/maharani-ruby-cz-hasli-necklace-set",
        originalPrice: 4999,
        price: 2500,
    },
];
export default function CollectionGrid() {
    return (
        <section className="mx-auto mt-12 max-w-7xl px-4 py-10">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

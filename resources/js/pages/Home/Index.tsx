import { Banner } from "@/components/Banner"
import { Header } from "@/components/Header"
import { ImageCarousel } from "@/components/ImageCarousel"
import CategoryCarousel from "@/components/ShopBy"


const categories = [
    {
        title: "Necklace Sets",
        image:
            "https://estele.co/cdn/shop/files/NECKLACE_SETS_jpg.jpg?v=1777291365&width=600",
        link: "/collections/necklace-sets",
    },
    {
        title: "Pendant Sets",
        image:
            "https://estele.co/cdn/shop/files/Pendant_Sets_jpg.jpg?v=1777291365&width=600",
        link: "/collections/pendant-sets",
    },
    {
        title: "Earrings",
        image:
            "https://estele.co/cdn/shop/files/Earrings_jpg.jpg?v=1777291364&width=600",
        link: "/collections/earrings",
    },
    {
        title: "Rings",
        image:
            "https://estele.co/cdn/shop/files/Finger_Rings.jpg_1.jpg?v=1777291364&width=600",
        link: "/collections/rings",
    },
    {
        title: "Bracelets",
        image:
            "https://estele.co/cdn/shop/files/Bracelets_jpg.jpg?v=1777291367&width=600",
        link: "/collections/bracelets",
    },
    {
        title: "Bangles",
        image:
            "https://estele.co/cdn/shop/files/Bangles_jpg.jpg?v=1777291366&width=600",
        link: "/collections/bangles",
    },
    {
        title: "Brooch",
        image:
            "https://estele.co/cdn/shop/files/Brooch_Pin_jpg.jpg?v=1777291366&width=600",
        link: "/collections/brooch",
    },
    {
        title: "Chokers",
        image:
            "https://estele.co/cdn/shop/files/Choker_Set.jpg_1.jpg?v=1777291366&width=600",
        link: "/collections/chokers",
    },
    {
        title: "Maang Tikka",
        image:
            "https://estele.co/cdn/shop/files/Maang_Tikka_jpg.jpg?v=1778176394&width=600",
        link: "/collections/maang-tikka",
    },
];

export default function Index() {
    return (
        <>
            <div className="top-0 sticky z-9999">
                <Banner />
                <Header />
            </div>
            <main>
                <ImageCarousel />
                <CategoryCarousel heading="Shop By Category" categories={categories} />
                <CategoryCarousel heading="Shop By collections" categories={categories} />
            </main>
        </>
    )
}

import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedCollection from "@/components/FeaturedCollection";
import { ImageCarousel } from "@/components/ImageCarousel"
import { RoseGoldCollection } from "@/components/RoseGoldCollection";
import CategoryCarousel from "@/components/ShopBy"
import BlingBanner from "@/components/BlingBanner";
import Layout from "../Layout";


import { dummyCategories } from "@/lib/data";

export default function Index() {
    return (
        <Layout>
            <main className="">
                <ImageCarousel />
                <CategoryCarousel heading="Shop By Category" categories={dummyCategories} />
                <RoseGoldCollection />
                <FeaturedCollection />
                <CategoryCarousel heading="Shop By collections" categories={dummyCategories} />
                <FeaturedProducts />
                <BlingBanner />
                <FeaturedProducts />
            </main>
        </Layout>
    )
}

import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedCollection from "@/components/FeaturedCollection";
import { ImageCarousel } from "@/components/ImageCarousel"
import { RoseGoldCollection } from "@/components/RoseGoldCollection";
import CategoryCarousel from "@/components/ShopBy"
import BlingBanner from "@/components/BlingBanner";
import Layout from "../Layout";
import { Product } from "@/types/product";
import { Category } from "@/types/category";
import { Collection } from "@/types/collection";

export default function Index({ featuredProducts, categories, collections, latestProducts, bestSellers }: { bestSellers: Product[], latestProducts: Product[], featuredProducts: Product[], categories: Category[], collections: Collection[] }) {
    return (
        <Layout>
            <main className="">
                <ImageCarousel />
                <CategoryCarousel catOrCol="category" heading="Shop By Category" categories={categories} />
                <RoseGoldCollection />
                <FeaturedCollection featuredProducts={featuredProducts} />
                <CategoryCarousel catOrCol="collection" heading="Shop By Collections" categories={collections} />
                <FeaturedProducts text="New arrivals" products={latestProducts} />
                <BlingBanner />
                <FeaturedProducts text="best sellers" products={bestSellers} />
            </main>
        </Layout>
    )
}

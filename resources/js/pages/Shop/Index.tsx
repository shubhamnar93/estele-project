import CollectionHeader from "@/components/FilterSection"
import Layout from "../Layout"
import FilterSidebar from "@/components/FilterSidebar"
import CollectionGrid from "@/components/CollectionGrid"

export default function Shop() {
    return (
        <Layout>
            <img src="https://estele.co/cdn/shop/files/Rakshabandhan_Banner_Creative_2612-1080-morbagh_creative.jpg_1.jpg?format=pjpg&v=1785494658&width=2612" />
            <div className="max-w-[1200px] mt-8 mx-auto px-4">
                <h3 className="text-2xl text-bold">Crystal Blooms</h3>
                <p>Sparkling crystal jewellery inspired by blooming florals—perfect for special occasions and statement styling.
                </p>
            </div>
            <section className="max-w-[1200px] mt-12 mb-8 mx-auto px-4">
                <CollectionHeader />
            </section>
            <CollectionGrid />
        </Layout>
    )
}

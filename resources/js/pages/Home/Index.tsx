import { Banner } from "@/components/Banner"
import { Header } from "@/components/Header"
import { ImageCarousel } from "@/components/ImageCarousel"

export default function Index() {
    return (
        <>
            <div className="top-0 sticky z-9999">
                <Banner />
                <Header />
            </div>
            <div>
                <ImageCarousel />
            </div>
        </>
    )
}

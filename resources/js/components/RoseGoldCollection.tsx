import { Link } from "@inertiajs/react"
import { ArrowRight } from "lucide-react"

export const RoseGoldCollection = () => {
    return (
        <section className="flex flex-col mt-12 justify-center items-center py-4">
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
                    ROSE GOLD COLLECTION
                </h3>
            </div>
            <div className="w-full">
                <img src="https://estele.co/cdn/shop/files/Rose_Gold_jpg.jpg" className="w-full" />
            </div>
            <div className="pt-4 text-[20px] flex items-center gap-2 underline text-[#cb6b88]">
                <Link className="cursor-pointer hover:text-[#ad3d5f]" href={"/collections/1"}>shop collection</Link>
                <ArrowRight height={"20"} />
            </div>

        </section>

    )
}

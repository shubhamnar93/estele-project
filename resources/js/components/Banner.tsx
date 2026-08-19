import { Link } from "@inertiajs/react"

export const Banner = () => {
    return (
        <div className="text-[12px] bg-red-700 border-b-1 border-neutral-400 text-white">
            <div className="px-3 py-2 flex justify-center gap-2">
                FREEDOM SALE - FLAT 50% - SITEWIDE{' '}
                <Link href="/collections/1" className="border-b-1 border-b-black text-bold">SHOP NOW</Link>
            </div>
        </div>
    )
}

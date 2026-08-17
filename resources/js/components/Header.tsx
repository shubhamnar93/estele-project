import { Heart, MapPin, ShoppingBasket, UserRound } from "lucide-react"
export const Header = () => {
    return (
        <header className="pt-[15px] pb-[27px] px-[30px] grid grid-cols-3 items-center">
            <div>
                <a href="">
                    <p className="flex text-[16px] gap-[2px] items-center text-neutral-600">
                        <MapPin height={16} />
                        store locator
                    </p>
                </a>
            </div>
            <div className="flex items-center justify-center">
                <a href="">
                    <img className={"h-[50px] w-[90px]"} src="https://estele.co/cdn/shop/files/estele-logo-200--80_160x_160x_5902a255-6c63-4705-af1e-836e5585dedb.png?v=1747398696&width=180">
                    </img>
                </a>
            </div>
            <div className="flex items-center text-neutral-600 gap-3 justify-end">
                <input placeholder={"Search"} className="hidden md:flex h-[40px] w-[300px] px-3 text-[13px] text-[#2c2c2ccc] border-1 rounded-sm bg-transparent border-neutral-400" />
                <Heart />
                <ShoppingBasket />
                <UserRound />
            </div>
        </header>
    )
}

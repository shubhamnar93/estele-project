import { Heart, MapPin, Search, ShoppingBasket, UserRound } from "lucide-react"
import { Link } from "@inertiajs/react"


import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

const navs = [{ title: "hasli collection", }, { title: "crystal blooms", }, { title: "best seller", }]
export const Header = () => {
    return (
        <header className="pt-[15px] pb-[27px] px-[30px] bg-white/90 backdrop-blur-lg">
            <div className="grid grid-cols-3 items-center">
                <div>
                    <Link href="">
                        <p className="flex cursor-not-allowed text-[16px] gap-[2px] items-center text-neutral-600">
                            <MapPin height={16} />
                            store locator
                        </p>
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <img className={"h-[50px] w-[90px]"} src="https://estele.co/cdn/shop/files/estele-logo-200--80_160x_160x_5902a255-6c63-4705-af1e-836e5585dedb.png?v=1747398696&width=180">
                        </img>
                    </Link>
                </div>
                <div className="flex items-center text-neutral-600 gap-3 justify-end">
                    <InputGroup className="max-w-xs h-[40px]">
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>
                    <ShoppingBasket />
                    <UserRound />
                </div>
            </div>
            <div className="mt-[24px] flex-1">
                <nav >
                    <ul className="flex justify-between">
                        {navs.map((n) =>
                            <li className="hover:bg-gray-100/90 py-2 w-full flex justify-center uppercase text-neutral-600">
                                {n.title}
                            </li>
                        )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

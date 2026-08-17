import { Heart, MapPin, Search, ShoppingBasket, UserRound } from "lucide-react"


import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

const navs = [{ title: "hasli collection", }, { title: "crystal blooms", }, { title: "best seller", }]
export const Header = () => {
    return (
        <header className="pt-[15px] pb-[27px] px-[30px] bg-white ">
            <div className="grid grid-cols-3 items-center">
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
                    <InputGroup className="max-w-xs h-[40px]">
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>
                    <Heart />
                    <ShoppingBasket />
                    <UserRound />
                </div>
            </div>
            <div className="mt-[24px] flex-1">
                <nav >
                    <ul className="flex justify-between">
                        {navs.map((n) =>
                            <li className="hover:bg-gray-100 py-2 w-full flex justify-center uppercase text-neutral-600">
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

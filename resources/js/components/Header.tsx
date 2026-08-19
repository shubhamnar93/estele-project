import { MapPin, Search, ShieldUser, ShoppingBag, SquareArrowRightExit, UserRound } from "lucide-react"
import { Link, usePage } from "@inertiajs/react"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { Collection } from "@/lib/data"
import { useCart } from "@/lib/cart"
import { CartDrawer } from "./CartDrawer"

export const Header = () => {
    const cart = useCart();
    const { auth, collections, isAdmin } = usePage().props;

    return (
        <header className="pt-[15px] pb-[27px] px-[30px] bg-white/90 backdrop-blur-lg">
            <div className="grid grid-cols-3 items-center">
                <div>
                    {isAdmin ?
                        <Link href="/admin">
                            <p className="flex w-fit text-[16px] gap-[2px] items-center text-neutral-600">
                                <ShieldUser height={24} />
                                Admin Pannel
                            </p>
                        </Link> : <Link href="">
                            <p className="flex w-fit cursor-not-allowed text-[16px] gap-[2px] items-center text-neutral-600">
                                <MapPin height={16} />
                                store locator
                            </p>
                        </Link>
                    }
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
                    <button onClick={() => cart.setOpen(true)}>
                        <ShoppingBag />
                    </button>
                    {(auth as any).user ?

                        <Link href={"/logout"} method="post">
                            <SquareArrowRightExit />
                        </Link>
                        :
                        <Link href={"/signup"}>
                            <UserRound />
                        </Link>
                    }
                </div>
            </div>
            <div className="mt-[24px] flex-1">
                <nav >
                    <ul className="flex justify-between">

                        {(collections as Collection[]).map((n, idx) =>
                            <li key={`collections-${idx}`} className="hover:bg-gray-100/90 py-2 w-full flex justify-center uppercase text-[8px] md:text-xs text-neutral-600">
                                <Link href={`/collections/${n.id}`}>
                                    {n.name}
                                </Link>
                            </li>
                        )
                        }
                    </ul>
                </nav>
            </div>
            <CartDrawer cart={cart} />
        </header>
    )
}

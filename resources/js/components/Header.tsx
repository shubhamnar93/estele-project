import { MapPin, Menu, Search, ShieldUser, ShoppingBag, SquareArrowRightExit, UserRound, X } from "lucide-react"
import { Link, router, usePage } from "@inertiajs/react"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { useCart } from "@/lib/cart"
import { CartDrawer } from "./CartDrawer"
import { ReactNode, useState } from "react"
import { Collection } from "@/types/collection"

export const Header = () => {
    const cart = useCart();
    const { auth, collections, isAdmin } = usePage().props;

    const [q, setQ] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        if (!q.trim()) return;

        router.get('/search', { q }, { preserveState: true });
    };

    return (
        <header className="relative pt-3 pb-4 px-4 sm:pt-[15px] sm:pb-[27px] sm:px-[30px] bg-white/90 backdrop-blur-lg">

            {/* ================= MOBILE HEADER ================= */}
            <div className="flex items-center justify-between sm:hidden">

                {/* Menu */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open menu"
                    className="text-neutral-600"
                >
                    {menuOpen ? (
                        <X size={23} />
                    ) : (
                        <Menu size={23} />
                    )}
                </button>

                {/* Logo */}
                <Link href="/">
                    <img
                        className="h-[42px] w-[76px] object-contain"
                        src="https://estele.co/cdn/shop/files/estele-logo-200--80_160x_160x_5902a255-6c63-4705-af1e-836e5585dedb.png?v=1747398696&width=180"
                        alt="Estelle"
                    />
                </Link>

                {/* Actions */}
                <div className="flex items-center gap-3 text-neutral-600">

                    {/* Search */}
                    <button
                        type="button"
                        onClick={() => setSearchOpen(!searchOpen)}
                        aria-label="Search"
                    >
                        <Search size={21} />
                    </button>

                    {/* Cart */}
                    <button
                        type="button"
                        onClick={() => cart.setOpen(true)}
                        aria-label="Open cart"
                    >
                        <ShoppingBag size={21} />
                    </button>

                    {/* Account */}
                    {(auth as any).user ? (
                        <Link
                            href="/logout"
                            method="post"
                            aria-label="Logout"
                        >
                            <SquareArrowRightExit size={21} />
                        </Link>
                    ) : (
                        <Link
                            href="/signup"
                            aria-label="Account"
                        >
                            <UserRound size={21} />
                        </Link>
                    )}
                </div>
            </div>


            {/* ================= MOBILE SEARCH ================= */}
            {searchOpen && (
                <form
                    onSubmit={handleSearch}
                    className="mt-4 sm:hidden"
                >
                    <InputGroup className="w-full h-[40px]">
                        <InputGroupInput
                            autoFocus
                            placeholder="Search..."
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />

                        <InputGroupAddon>
                            <Search size={18} />
                        </InputGroupAddon>
                    </InputGroup>
                </form>
            )}


            {/* ================= MOBILE MENU ================= */}
            {menuOpen && (
                <div className="sm:hidden mt-4 border-t border-neutral-200 pt-3">

                    <nav>
                        <ul className="flex flex-col">

                            <li>
                                <Link
                                    href="/storelocator"
                                    className="flex items-center gap-3 py-3 text-sm text-neutral-600"
                                >
                                    <MapPin size={17} />
                                    <span>Store Locator</span>
                                </Link>
                            </li>

                            {isAdmin as boolean && (
                                <li>
                                    <Link
                                        href="/admin"
                                        className="flex items-center gap-3 py-3 text-sm text-neutral-600"
                                    >
                                        <ShieldUser size={17} />
                                        <span>Admin Panel</span>
                                    </Link>
                                </li>
                            ) as ReactNode}

                            {/* Collections */}
                            <li className="border-t border-neutral-100 mt-1 pt-1">
                                <p className="py-2 text-[10px] tracking-widest uppercase text-neutral-400">
                                    Collections
                                </p>
                            </li>

                            {(collections as Collection[]).map((collection) => (
                                <li key={collection.id}>
                                    <Link
                                        href={`/collections/${collection.id}`}
                                        onClick={() => setMenuOpen(false)}
                                        className="block py-2.5 text-sm text-neutral-600"
                                    >
                                        {collection.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}


            {/* ================= DESKTOP HEADER ================= */}
            <div className="hidden sm:grid grid-cols-3 items-center">

                {/* Left */}
                <div>
                    {isAdmin ? (
                        <Link href="/admin">
                            <p className="flex w-fit text-[16px] gap-[2px] items-center text-neutral-600">
                                <ShieldUser height={24} />
                                Admin Pannel
                            </p>
                        </Link>
                    ) : (
                        <Link href="/storelocator">
                            <p className="flex w-fit text-[16px] gap-[2px] items-center text-neutral-600">
                                <MapPin height={16} />
                                store locator
                            </p>
                        </Link>
                    )}
                </div>

                {/* Logo */}
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <img
                            className="h-[50px] w-[90px]"
                            src="https://estele.co/cdn/shop/files/estele-logo-200--80_160x_160x_5902a255-6c63-4705-af1e-836e5585dedb.png?v=1747398696&width=180"
                            alt="Estelle"
                        />
                    </Link>
                </div>

                {/* Actions */}
                <div className="flex items-center text-neutral-600 gap-3 justify-end">

                    <form onSubmit={handleSearch}>
                        <InputGroup className="max-w-xs h-[40px]">
                            <InputGroupInput
                                placeholder="Search..."
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                            />

                            <InputGroupAddon>
                                <Search />
                            </InputGroupAddon>
                        </InputGroup>
                    </form>

                    <button
                        type="button"
                        onClick={() => cart.setOpen(true)}
                    >
                        <ShoppingBag />
                    </button>

                    {(auth as any).user ? (
                        <Link
                            href="/logout"
                            method="post"
                        >
                            <SquareArrowRightExit />
                        </Link>
                    ) : (
                        <Link href="/signup">
                            <UserRound />
                        </Link>
                    )}
                </div>
            </div>


            {/* ================= DESKTOP COLLECTIONS ================= */}
            <div className="hidden sm:block mt-[24px]">
                <nav>
                    <ul className="flex justify-between">

                        {(collections as Collection[]).slice(0, 8).map((n) => (
                            <li
                                key={n.id}
                                className="hover:bg-gray-100/90 py-2 w-full flex justify-center uppercase text-[8px] md:text-xs text-neutral-600"
                            >
                                <Link href={`/collections/${n.id}`}>
                                    {n.name}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>
            </div>

            <CartDrawer cart={cart} />
        </header>
    );
}

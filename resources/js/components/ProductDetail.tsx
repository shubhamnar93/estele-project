import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useState, useMemo } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface ProductImage {
    src: string;
    alt: string;
}

interface Variant {
    id: string;
    size: string;
    inventory: number;
}

interface TabItem {
    title: string;
    content: React.ReactNode;
}

interface UspItem {
    label: string;
    icon: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Static product data (lifted from the source HTML)                  */
/* ------------------------------------------------------------------ */

const PRODUCT = {
    title: "Dazzle Petal Bangles Size-2.6",
    sku: "AD-058-RGWE26 BANGLE",
    collection: "Sitara Crystal Bloom Collection",
    price: 2650,
    compareAt: 5299,
    discountPct: 50,
    rating: 4.8,
    reviewCount: 124,
};

const IMAGES: ProductImage[] = [
    {
        src: "https://estele.co/cdn/shop/files/11_42cff08f-5a1f-48f6-96ea-8ff3787710b6.jpg?v=1781761433&width=1000",
        alt: "Dazzle Petal Bangles – front view",
    },
    {
        src: "https://estele.co/cdn/shop/files/12_d0d97806-7a7b-4d8c-9fde-80c7b3635bb3.jpg?v=1781761433&width=1000",
        alt: "Dazzle Petal Bangles – side view",
    },
    {
        src: "https://estele.co/cdn/shop/files/13_f1279071-e5d4-429d-bc81-1a25332143af.jpg?v=1781761433&width=1000",
        alt: "Dazzle Petal Bangles – detail",
    },
    {
        src: "https://estele.co/cdn/shop/files/14_1ed845ab-b4d0-4ffd-8f3d-842161ac5088.jpg?v=1781761433&width=1000",
        alt: "Dazzle Petal Bangles – worn",
    },
];

const VARIANTS: Variant[] = [
    { id: "51941846974781", size: "2.6", inventory: 6 },
];

const OFFERS: string[] = [
    "THE ESTELE FREEDOM SALE IS LIVE - FLAT 50% off SITEWIDE",
    "Free Gift on orders above ₹1,499",
    "Additional 5% Off on Prepaid Orders",
];

const TRUST_BADGES = [
    "100% Anti-Tarnish",
    "7-Day Return & Exchange",
    "Free Shipping Available",
];

const USP_ITEMS: UspItem[] = [
    { label: "24k Gold Plated", icon: <DiamondIcon /> },
    { label: "35+ Years Legacy", icon: <LegacyIcon /> },
    { label: "Handcrafted & Skin Friendly", icon: <HandIcon /> },
    { label: "1 Year Warranty", icon: <ShieldIcon /> },
];

const DESCRIPTION_SPECS: { label: string; value: string }[] = [
    { label: "Material", value: "Brass" },
    { label: "Plating", value: "Rose Gold" },
    { label: "Occasion", value: "Festive" },
    { label: "Closure Type", value: "Slip On" },
    { label: "Stone Type", value: "Cubic Zirconia" },
    { label: "Stone Color", value: "White" },
    {
        label: "Dimension",
        value:
            "Circumference: 21.5 Cm; Diameter: 2 Inches; Width: 1 Cm; Height: 1 Cm",
    },
    { label: "Item Weight", value: "32.75 Gms" },
    { label: "Pack Contains", value: "One Pair of Bangle" },
];

const RETURN_POLICY: { label: string; value: string }[] = [
    { label: "Free Shipping", value: "on all orders" },
    { label: "Fast Processing", value: "within 48 hours" },
    { label: "1-Year Warranty", value: "on all Estele Jewellery" },
    {
        label: "7-Day Return/Exchange Window",
        value: "for unused items with original tags",
    },
    { label: "Exchanges Available", value: "₹150 reverse pickup charge" },
];

const MANUFACTURER = {
    name: "Estele Accessories Pvt. Ltd.",
    address:
        "9-47, Keshav Nagar, West Hanuman Nagar, Boduppal, Hyderabad, Telangana 500092",
    origin: "India",
    email: "info@estele.co",
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const formatINR = (n: number) =>
    "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 0 });

/* ------------------------------------------------------------------ */
/*  Inline SVG icons                                                   */
/* ------------------------------------------------------------------ */

function StarIcon({ filled = true }: { filled?: boolean }) {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
                fill={filled ? "#f5a623" : "none"}
                stroke="#f5a623"
                strokeWidth="1.5"
                d="M12 2l2.9 6.3 6.8.6-5.2 4.5 1.6 6.7L12 17l-6.1 3.5 1.6-6.7L2.3 8.9l6.8-.6z"
            />
        </svg>
    );
}

function TruckIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 7h11v8H3z" strokeLinejoin="round" />
            <path d="M14 9h4l3 3v3h-7z" strokeLinejoin="round" />
            <circle cx="7" cy="17" r="1.6" />
            <circle cx="17.5" cy="17" r="1.6" />
        </svg>
    );
}

function MinusIcon() {
    return (
        <svg viewBox="0 0 10 2" className="h-3 w-3" aria-hidden="true">
            <path d="M10 0v2H0V0z" fill="currentColor" />
        </svg>
    );
}

function PlusIcon() {
    return (
        <svg viewBox="0 0 10 10" className="h-3 w-3" aria-hidden="true">
            <path d="M6 4h4v2H6v4H4V6H0V4h4V0h2v4z" fill="currentColor" fillRule="evenodd" />
        </svg>
    );
}

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function DiamondIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#d46d8c" strokeWidth="1.4">
            <path d="M6 3h12l3 5-9 13L3 8z" strokeLinejoin="round" />
            <path d="M3 8h18M9 3l-3 5 6 13M15 3l3 5-6 13" strokeLinejoin="round" />
        </svg>
    );
}

function LegacyIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#d46d8c" strokeWidth="1.4">
            <circle cx="12" cy="8" r="4" />
            <path d="M8 12c-3 1-5 4-5 8h18c0-4-2-7-5-8" strokeLinejoin="round" />
        </svg>
    );
}

function HandIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#d46d8c" strokeWidth="1.4">
            <path d="M7 11V5a1.5 1.5 0 013 0v5m0-1V4a1.5 1.5 0 013 0v6m0-1V6a1.5 1.5 0 013 0v7c0 4-3 7-7 7s-7-3-7-7v-2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ShieldIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#d46d8c" strokeWidth="1.4">
            <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z" strokeLinejoin="round" />
            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function TagIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 mt-0.5" fill="none" stroke="#d46d8c" strokeWidth="1.6">
            <path d="M3 12V4h8l10 10-8 8z" strokeLinejoin="round" />
            <circle cx="7.5" cy="7.5" r="1.3" fill="#d46d8c" stroke="none" />
        </svg>
    );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function StarRating({ rating, count }: { rating: number; count: number }) {
    return (
        <div className="flex items-center gap-1">
            <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} filled={i < Math.round(rating)} />
                ))}
            </div>
            <span className="text-xs text-neutral-500">
                {rating.toFixed(1)} ({count} reviews)
            </span>
        </div>
    );
}

function TrustBadges() {
    return (
        <div className="flex flex-wrap gap-x-6 gap-y-2 py-3">
            {TRUST_BADGES.map((b) => (
                <span key={b} className="flex items-center gap-1.5 text-sm text-neutral-700">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#d46d8c" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                </span>
            ))}
        </div>
    );
}

function PincodeChecker() {
    const [pincode, setPincode] = useState("");
    const [checked, setChecked] = useState(false);

    const isValid = /^\d{6}$/.test(pincode);

    const handleCheck = () => {
        if (isValid) setChecked(true);
    };

    return (
        <div className="border border-neutral-200 rounded-xl p-4 my-4">
            <div className="flex items-center gap-2 mb-3">
                <span className="font-semibold text-sm tracking-wide text-neutral-800">
                    DELIVERY OPTIONS
                </span>
                <TruckIcon />
            </div>
            <div className="flex gap-2">
                <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => {
                        setPincode(e.target.value.replace(/\D/g, ""));
                        setChecked(false);
                    }}
                    placeholder="Enter pincode"
                    className="flex-1 border border-neutral-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#d46d8c] focus:ring-1 focus:ring-[#d46d8c]/30"
                />
                <button
                    type="button"
                    onClick={handleCheck}
                    disabled={!isValid}
                    className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-[#d46d8c] disabled:bg-neutral-300 disabled:cursor-not-allowed transition-colors"
                >
                    Check
                </button>
            </div>
            {checked && (
                <div className="mt-3 space-y-1.5 text-sm">
                    <p className="text-green-600 font-medium">
                        ✓ Delivery available to {pincode}
                    </p>
                    <p className="text-neutral-600">Cash on Delivery available</p>
                    <p className="text-neutral-600">
                        🔁 7-Day Return & Exchange{" "}
                        <a href="#" className="text-[#d46d8c] underline">
                            know more
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
}

function OfferBox() {
    return (
        <div className="border border-dotted border-[#d14f80] rounded-xl p-4 my-4 bg-[#f8f3ec]/40">
            <div className="font-bold text-base text-black mb-1.5">
                Available Offers
            </div>
            <ul className="space-y-1.5">
                {OFFERS.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-black">
                        <TagIcon />
                        <span>{o}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function QuantitySelector({
    qty,
    setQty,
    max,
}: {
    qty: number;
    setQty: (n: number) => void;
    max: number;
}) {
    return (
        <div className="flex items-center border border-neutral-300 rounded-full overflow-hidden">
            <button
                type="button"
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-3 py-2.5 hover:bg-neutral-100 transition-colors disabled:opacity-40"
                disabled={qty <= 1}
                aria-label="Decrease quantity"
            >
                <MinusIcon />
            </button>
            <input
                type="number"
                value={qty}
                min={1}
                max={max}
                onChange={(e) => {
                    const v = parseInt(e.target.value, 10);
                    if (!isNaN(v)) setQty(Math.min(max, Math.max(1, v)));
                }}
                className="w-12 text-center border-x border-neutral-200 py-2.5 text-sm outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
                type="button"
                onClick={() => setQty(Math.min(max, qty + 1))}
                className="px-3 py-2.5 hover:bg-neutral-100 transition-colors disabled:opacity-40"
                disabled={qty >= max}
                aria-label="Increase quantity"
            >
                <PlusIcon />
            </button>
        </div>
    );
}

function Accordion({ items }: { items: TabItem[] }) {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {items.map((item, i) => {
                const open = openIdx === i;
                return (
                    <div key={item.title}>
                        <button
                            type="button"
                            onClick={() => setOpenIdx(open ? null : i)}
                            className="flex w-full items-center justify-between py-4 text-left"
                        >
                            <span className="font-semibold text-neutral-900">{item.title}</span>
                            <ChevronIcon open={open} />
                        </button>
                        {open && (
                            <div className="pb-5 text-sm text-neutral-600 leading-relaxed">
                                {item.content}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function UspBar() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#FFF7F9] rounded-2xl px-5 py-6 mt-8">
            {USP_ITEMS.map((u) => (
                <div key={u.label} className="flex flex-col items-center text-center gap-2">
                    {u.icon}
                    <span className="text-xs sm:text-sm font-medium text-neutral-700">
                        {u.label}
                    </span>
                </div>
            ))}
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Gallery                                                            */
/* ------------------------------------------------------------------ */

function Gallery({ images }: { images: ProductImage[] }) {
    const [active, setActive] = useState(0);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2.5 overflow-x-auto md:overflow-y-auto md:max-h-[560px] md:pr-1">
                {images.map((img, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => setActive(i)}
                        className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors ${active === i
                            ? "border-[#d46d8c]"
                            : "border-neutral-200 hover:border-neutral-300"
                            }`}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-50">
                    <img
                        src={images[active].src}
                        alt={images[active].alt}
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="absolute top-3 left-3 bg-[#d46d8c] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    SAVE {PRODUCT.discountPct}%
                </span>
                {/* Prev / Next */}
                {images.length > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={() =>
                                setActive((a) => (a - 1 + images.length) % images.length)
                            }
                            className="absolute top-1/2 left-2 -translate-y-1/2 w-9 h-9 rounded-full border border-neutral-300 bg-white/90 flex items-center justify-center hover:bg-white shadow-sm"
                            aria-label="Previous image"
                        >
                            <ArrowLeftIcon />
                        </button>
                        <button
                            type="button"
                            onClick={() => setActive((a) => (a + 1) % images.length)}
                            className="absolute top-1/2 right-2 -translate-y-1/2 w-9 h-9 rounded-full border border-neutral-300 bg-white/90 flex items-center justify-center hover:bg-white shadow-sm"
                            aria-label="Next image"
                        >
                            <ArrowRightIcon />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function ProductPage() {
    const [selectedSize, setSelectedSize] = useState(VARIANTS[0].size);
    const [qty, setQty] = useState(1);
    const [added, setAdded] = useState(false);

    const variant = useMemo(
        () => VARIANTS.find((v) => v.size === selectedSize) ?? VARIANTS[0],
        [selectedSize]
    );

    const handleAddToCart = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 2500);
    };

    const tabs: TabItem[] = [
        {
            title: "Description",
            content: (
                <div className="space-y-4">
                    <p>
                        Designed with sparkling CZ stones and a captivating triple leaf
                        motif, these Dazzle Petal Bangles add brilliance to occasion wear.
                        Their rose gold finish enhances the elegant circular pattern while
                        offering a luxurious look. This {PRODUCT.collection} piece is
                        perfect for celebrations, weddings, and festive gatherings.
                    </p>
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                        {DESCRIPTION_SPECS.map((s) => (
                            <div key={s.label} className="flex gap-1">
                                <dt className="font-semibold whitespace-nowrap">{s.label}:</dt>
                                <dd className="text-neutral-600">{s.value}</dd>
                            </div>
                        ))}
                    </dl>
                    <p>
                        <span className="font-semibold">Care instructions: </span>
                        Avoid contact with direct heat, water & organic chemicals i.e.
                        perfumes, deodorants, sprays & other strong chemicals as they
                        may react with the metal / plating. When not in use store jewelry
                        in air-tight boxes / a cloth pouch to retain its shine.
                    </p>
                </div>
            ),
        },
        {
            title: "Return / Exchange Policy",
            content: (
                <div className="space-y-4">
                    <ul className="space-y-1.5">
                        {RETURN_POLICY.map((r) => (
                            <li key={r.label}>
                                <span className="font-semibold">{r.label}</span>{" "}
                                <span className="text-neutral-600">{r.value}</span>
                            </li>
                        ))}
                    </ul>
                    <p>
                        For more details, please review our{" "}
                        <a href="#" className="text-[#d46d8c] underline">
                            return policy
                        </a>
                        .
                    </p>
                </div>
            ),
        },
        {
            title: "Manufacturing Details",
            content: (
                <p className="leading-relaxed">
                    <span className="font-semibold">Manufacturer Details:</span>{" "}
                    {MANUFACTURER.name} {MANUFACTURER.address}.
                    <br />
                    <span className="font-semibold">Country of Origin:</span>{" "}
                    {MANUFACTURER.origin}
                    <br />
                    <span className="font-semibold">Email:</span>{" "}
                    {MANUFACTURER.email}
                </p>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-white text-neutral-900">
            {/* Breadcrumb */}
            <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-neutral-500">
                <nav className="flex items-center gap-1.5">
                    <a href="#" className="hover:text-[#d46d8c]">Home</a>
                    <span>/</span>
                    <a href="#" className="hover:text-[#d46d8c]">Bangles</a>
                    <span>/</span>
                    <span className="text-neutral-800 truncate">{PRODUCT.title}</span>
                </nav>
            </div>

            {/* Main grid */}
            <div className="mx-auto max-w-7xl px-4 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* ---- Left: Gallery ---- */}
                    <div className="lg:sticky lg:top-6 lg:self-start">
                        <Gallery images={IMAGES} />
                    </div>

                    {/* ---- Right: Product info ---- */}
                    <div className="space-y-1">
                        {/* Title + wishlist / share */}
                        <div className="flex items-start justify-between gap-3">
                            <h1 className="text-lg font-semibold leading-snug text-neutral-900">
                                {PRODUCT.title}
                            </h1>
                            <div className="flex items-center gap-2 shrink-0">
                                <button
                                    type="button"
                                    className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center hover:border-[#d46d8c] transition-colors"
                                    aria-label="Add to wishlist"
                                >
                                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#3e3e3e" strokeWidth="1.6">
                                        <path d="M12 21s-7-4.5-9.5-9C1 9 3 5.5 6.5 5.5c2 0 3.5 1.5 5.5 4 2-2.5 3.5-4 5.5-4C21 5.5 23 9 21.5 12c-2.5 4.5-9.5 9-9.5 9z" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center hover:border-[#d46d8c] transition-colors"
                                    aria-label="Share"
                                >
                                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#3e3e3e" strokeWidth="1.6">
                                        <circle cx="6" cy="12" r="2.5" />
                                        <circle cx="18" cy="6" r="2.5" />
                                        <circle cx="18" cy="18" r="2.5" />
                                        <path d="M8 11l8-4M8 13l8 4" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* SKU */}
                        <p className="text-sm text-neutral-500">
                            SKU: <span className="text-neutral-700">{PRODUCT.sku}</span>
                        </p>

                        {/* Price + review */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-neutral-900">
                                    {formatINR(PRODUCT.price)}
                                </span>
                                <span className="text-base text-neutral-400 line-through">
                                    {formatINR(PRODUCT.compareAt)}
                                </span>
                                <span className="text-xs font-semibold text-[#d46d8c] bg-[#f9ebef] px-2 py-1 rounded">
                                    SAVE {PRODUCT.discountPct}%
                                </span>
                            </div>
                        </div>
                        <div className="pt-1">
                            <StarRating rating={PRODUCT.rating} count={PRODUCT.reviewCount} />
                        </div>

                        {/* Trust badges */}
                        <TrustBadges />

                        {/* Pincode checker */}
                        <PincodeChecker />

                        {/* Offers */}
                        <OfferBox />

                        {/* Size selector */}
                        <div className="pt-2">
                            <h4 className="text-sm font-semibold mb-2">
                                SIZE: <span className="text-[#d46d8c]">{selectedSize}</span>
                            </h4>
                            <div className="flex gap-2">
                                {VARIANTS.map((v) => (
                                    <button
                                        key={v.id}
                                        type="button"
                                        onClick={() => setSelectedSize(v.size)}
                                        className={`min-w-12 h-11 px-4 rounded-full border-2 text-sm font-medium transition-colors ${selectedSize === v.size
                                            ? "border-[#d46d8c] bg-[#f9ebef] text-[#d46d8c]"
                                            : "border-neutral-200 text-neutral-700 hover:border-neutral-400"
                                            }`}
                                    >
                                        {v.size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity + Add to cart */}
                        <div className="flex flex-wrap items-center gap-4 pt-5">
                            <QuantitySelector
                                qty={qty}
                                setQty={setQty}
                                max={variant.inventory}
                            />
                            <button
                                type="button"
                                onClick={handleAddToCart}
                                disabled={added}
                                className="flex-1 min-w-40 h-12 rounded-full bg-[#d46d8c] text-white font-semibold text-sm tracking-wide hover:bg-[#c45d7a] transition-colors disabled:opacity-70"
                            >
                                {added ? "✓ Added to cart" : "Add to cart"}
                            </button>
                        </div>

                        {variant.inventory <= 10 && (
                            <p className="pt-2 text-sm text-orange-600">
                                Hurry! Only {variant.inventory} left in stock.
                            </p>
                        )}

                        {/* Accordion tabs */}
                        <div className="pt-8">
                            <Accordion items={tabs} />
                        </div>
                    </div>
                </div>

                {/* USP bar */}
                <UspBar />
            </div>
        </div>
    );
}

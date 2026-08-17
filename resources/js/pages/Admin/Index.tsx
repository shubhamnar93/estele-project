import { Select } from "@/components/Select";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layers, Package, Pencil, Plus, SquareArrowRightExit, Tag, Trash2, X } from "lucide-react";
import { ReactNode } from "react";

export default function Admin() {
    return (
        <div className="bg-[#fef8fa] h-screen">
            <header className="bg-[#ffffff] border-b border-[#9ba2ae3b]">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
                    <div>
                        <p className="text-xs uppercase tracking-[0.4em] text-[#796360]">Estele</p>
                        <h1 className="font-serif text-3xl tracking-tight">Catalogue Admin</h1>
                    </div>
                    <button className="bg-[#fef8fa] hover:bg-[#ffd9d1] hover:text-[#472022] border-1 h-9 px-4 py-2 border-[#e7dbd8] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                        <SquareArrowRightExit />
                        Logout
                    </button>
                </div>
            </header>
            <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
                <section className="grid gap-4 sm:grid-cols-3">
                    <DataCard title="product" icon={<Package />} total={3} />
                    <DataCard title="collections" icon={<Layers />} total={3} />
                    <DataCard title="categories" icon={<Tag />} total={3} />
                </section>
                <Tabs defaultValue="account" className="">
                    <div className="w-full">
                        <TabsList className={"h-9 p-1 bg-[#f8eeea]"}>
                            <TabsTrigger value="products" className={""}>Products</TabsTrigger>
                            <TabsTrigger value="collections">Collections</TabsTrigger>
                            <TabsTrigger value="categories">Categories</TabsTrigger>
                        </TabsList>
                        <div className="mt-8 w-full">
                            <TabsContent value="products">
                                <div className="flex w-full  items-center justify-between gap-3">
                                    <input placeholder="Search by name" className="flex max-w-xs h-9 w-full border-1 border-gray-200 rounded-md bg-transparent px-3 py-1 text-base shadow-sm transition-colors" />
                                    <Button text="Add Products" />
                                </div>
                                <div className="  [&_*]:border-neutral-300 mt-8">
                                    <TableCard />
                                </div>
                            </TabsContent>
                            <TabsContent value="collections"><TableCard /></TabsContent>
                            <TabsContent value="categories"><TableCard /></TabsContent>
                        </div>
                    </div>
                </Tabs>
            </main>
            <Form />
        </div>

    )
}
export const Form = () => {
    return (
        <div className="fixed inset-0 z-50 bg-black/80">
            <div className="fixed overflow-y-auto sm:max-w-lg sm:rounded-lg max-h-[90vh] bg-[#fef8fa] border-[#e7dbd8] left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200">
                <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                    <h2 className="font-semibold tracking-tight font-serif text-2xl">Edit product</h2>
                    <p className="text-[#796360] text-sm">Product details shown on the storefront.</p>
                </div>
                <button className="absolute right-4 top-4 rounded-sm opacity-70 "><X /></button>

                <form className="space-y-4">
                    <InputWithLabel text="Name" placeholder="name..." />
                    <div className="grid gap-4 sm:grid-cols-2 ">
                        <InputWithLabel text="Price" placeholder="999..." />
                        <InputWithLabel text="Stock" placeholder="999..." />
                        <SelectWithLabel text="Category" />
                        <SelectWithLabel text="Collection" />
                    </div>
                    <InputWithLabel text="Image Url" placeholder="https://..." />
                    <InputWithLabel text="Description" placeholder="description..." />

                    <FormButton />
                </form>
            </div>
        </div>
    )
}
export const FormButton = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0  shadow-sm h-9 px-4 py-2 border-neutral-300 border-1 bg-transparent"> Cancel</button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm text-white font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0  shadow-sm h-9 px-4 py-2 border-neutral-300 border-1 bg-[#9c3348]"> Add</button>

        </div>
    )
}
export const InputWithLabel = ({ text, placeholder }: { text: string, placeholder: string }) => {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {text}
            </label>
            <input className="flex h-9 w-full rounded-md border-1 border-neutral-300 bg-transparent px-3 py-1 text-base shadow-sm transition-colors" placeholder={placeholder} />
        </div>
    )
}
export const SelectWithLabel = ({ text, }: { text: string, }) => {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {text}
            </label>
            <Select />
        </div>
    )
}

export const TableCard = () => {
    const nameOf = (list: { id: string; name: string }[], id: string) =>
        list.find((entry) => entry.id === id)?.name ?? "—";
    const seed = {
        categories: [
            { id: "cat-lips", name: "Lips", slug: "lips", description: "Lipsticks, liners and glosses." },
            { id: "cat-eyes", name: "Eyes", slug: "eyes", description: "Kajal, mascara and liners." },
            { id: "cat-face", name: "Face", slug: "face", description: "Foundation, blush and highlighter." },
            { id: "cat-nails", name: "Nails", slug: "nails", description: "Nail lacquers and care." },
        ],
        collections: [
            { id: "col-bestsellers", name: "Bestsellers", slug: "bestsellers", description: "Most-loved everyday essentials.", featured: true },
            { id: "col-newin", name: "New In", slug: "new-in", description: "Fresh drops of the season.", featured: true },
            { id: "col-matte", name: "Matte Story", slug: "matte-story", description: "Long-wear matte finishes.", featured: false },
        ],
        products: [
            {
                id: "prd-1",
                name: "Velvet Matte Lipstick — Rosewood",
                price: 599,
                stock: 128,
                categoryId: "cat-lips",
                collectionId: "col-bestsellers",
                imageUrl: "",
                description: "Weightless matte colour with 10-hour wear.",
            },
            {
                id: "prd-2",
                name: "Intense Kajal — Jet Black",
                price: 299,
                stock: 340,
                categoryId: "cat-eyes",
                collectionId: "col-bestsellers",
                imageUrl: "",
                description: "Smudge-proof, waterproof definition.",
            },
            {
                id: "prd-3",
                name: "Glow Serum Foundation — Beige",
                price: 899,
                stock: 42,
                categoryId: "cat-face",
                collectionId: "col-newin",
                imageUrl: "",
                description: "Skin-loving hydration with medium coverage.",
            },
        ],
    };

    const filteredProducts = seed.products
    return (
        <Card className="border-1 shadow-xl [&_*]:border-neutral-300">
            <CardContent className="p-0">
                <Table className="border-neutral-300">
                    <TableHeader className="">
                        <TableRow>
                            <TableHead>Product</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Collection</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                            <TableHead className="text-right">Stock</TableHead>
                            <TableHead className="w-24" />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredProducts.map((p) => (
                            <TableRow key={p.id}>
                                <TableCell>
                                    <div className="font-medium">{p.name}</div>
                                </TableCell>
                                <TableCell>{nameOf(seed.categories, p.categoryId)}</TableCell>
                                <TableCell>{nameOf(seed.collections, p.collectionId)}</TableCell>
                                <TableCell className="text-right">₹{p.price}</TableCell>
                                <TableCell className="text-right">{p.stock}</TableCell>
                                <TableCell>
                                    <div className="flex justify-end">
                                        <button
                                            className=" hover:bg-neutral-100 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                                        >
                                            <Pencil className="text-neutral-500" />

                                        </button>
                                        <button
                                            className="hover:bg-red-100 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                                        >
                                            <Trash2 className="text-red-500" />

                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {filteredProducts.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="py-10 text-center text-muted-foreground">
                                    No products yet.
                                </TableCell>
                            </TableRow>
                        ) : null}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export const DataCard = ({ title, icon, total }: { title: string, icon: ReactNode, total: number }) => {
    return (
        <div className="rounded-xl border border-[#9ba2ae3b] bg-white text-[#271515] shadow-lg ">
            <div className="flex items-center justify-between p-6">
                <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#796360]">
                        {title}
                    </p>
                    <p className="font-serif text-3xl">{total}</p>
                </div>
                <span className="rounded-full bg-[#ffd9d1] p-3 text-accent-foreground">
                    {icon}
                </span>
            </div>
        </div>
    )
}
export const Button = ({ text }: { text: string }) => {
    return (
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 shandow-md bg-[#9c3348] text-white hover:bg-[#9c3348e6]">
            <Plus />
            {text}
        </button>
    )

}

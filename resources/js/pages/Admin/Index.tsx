import { InputWithLabel } from "@/components/InputWithLabel";
import { Select } from "@/components/Select";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layers, Package, Pencil, Plus, SquareArrowRightExit, Tag, Trash2, X } from "lucide-react";
import { ReactNode, useState } from "react";
import { Product, Category, Collection, dummyCategories, dummyCollections, dummyProducts } from "@/lib/data";

type product = Product;
type category = Category;
type collection = Collection;

export default function Admin() {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [whatTo, setWhatTo] = useState<"products" | "collections" | "categories">("products")
    const [product, setProduct] = useState<product>({ id: "", name: "", price: 0, stock: 0, categoryId: "", collectionId: "", imageUrls: [""], description: "" })
    const [collection, setCollection] = useState<category>({ id: "", name: "", slug: "", imgUrl: "", description: "" })
    const [category, setCategory] = useState<category>({ id: "", name: "", slug: "", imgUrl: "", description: "" })

    const handleOnClick = ({ title, product, category, collection }: { title: string, product?: product, category?: category, collection?: collection }) => {
        if (whatTo == "products" && product) setProduct(product)
        if (whatTo == "categories" && category) setCategory(category)
        if (whatTo == "collections" && collection) setCollection(collection)
        setIsOpen((o) => !o)
        setTitle(title)
    }
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
                    <DataCard title="products" icon={<Package />} total={3} />
                    <DataCard title="collections" icon={<Layers />} total={3} />
                    <DataCard title="categories" icon={<Tag />} total={3} />
                </section>
                <Tabs defaultValue="products" className="">
                    <div className="w-full">
                        <TabsList className={"h-9 p-1 bg-[#f8eeea]"}>
                            <TabsTrigger onClick={() => { setWhatTo("products") }} value="products" className={""}>Products</TabsTrigger>
                            <TabsTrigger onClick={() => { setWhatTo("collections") }} value="collections">Collections</TabsTrigger>
                            <TabsTrigger onClick={() => { setWhatTo("categories") }} value="categories">Categories</TabsTrigger>
                        </TabsList>
                        <div className="mt-8 w-full">
                            <TabsContent value="products">
                                <div className="flex w-full  items-center justify-between gap-3">
                                    <input placeholder="Search by name" className="flex max-w-xs h-9 w-full border-1 border-gray-200 rounded-md bg-transparent px-3 py-1 text-base shadow-sm transition-colors" />
                                    <Button onClick={() => handleOnClick({ title: "Add Product", product: { id: "", name: "", price: 0, stock: 0, categoryId: "", collectionId: "", imageUrls: [""], description: "" } })} text="Add Products" />
                                </div>
                                <div className="  [&_*]:border-neutral-300 mt-8">
                                    <TableCard handleOnClick={({ title, product }: { title: string, product: product }) => handleOnClick({ title, product })} />
                                </div>
                            </TabsContent>
                            <TabsContent value="collections">

                                <div className="flex w-full  items-center justify-end gap-3 mb-8">
                                    <Button onClick={() => handleOnClick({ title: "Add Collection", product: { id: "", name: "", price: 0, stock: 0, categoryId: "", collectionId: "", imageUrls: [""], description: "" } })} text="Add Products" />
                                </div>

                                <TableCard handleOnClick={handleOnClick} />
                            </TabsContent>
                            <TabsContent value="categories">

                                <div className="flex w-full  items-center justify-end gap-3 mb-8">
                                    <Button onClick={() => handleOnClick({ title: "Add Category", product: { id: "", name: "", price: 0, stock: 0, categoryId: "", collectionId: "", imageUrls: [""], description: "" } })} text="Add Products" />
                                </div>
                                <TableCard handleOnClick={handleOnClick} />
                            </TabsContent>
                        </div>
                    </div>
                </Tabs>
            </main>
            {isOpen && whatTo === "products" && <Form title={title} onClose={() => handleOnClick({ title: "" })} >

                <form className="space-y-4">
                    <InputWithLabel text="Name" placeholder="name..." value={product.name} />
                    <div className="grid gap-4 sm:grid-cols-2 ">
                        <InputWithLabel text="Price" placeholder="999..." value={product.price} />
                        <InputWithLabel text="Stock" placeholder="999..." value={product.stock} />
                        <SelectWithLabel text="Category" value={product.categoryId} />
                        <SelectWithLabel text="Collection" value={product.collectionId} />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">Image Urls</label>
                        {product.imageUrls.map((url, idx) => (
                            <div key={idx} className="flex gap-2">
                                <input
                                    type="text"
                                    className="flex h-9 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    value={url}
                                    placeholder="https://..."
                                    onChange={(e) => {
                                        const newUrls = [...product.imageUrls];
                                        newUrls[idx] = e.target.value;
                                        setProduct({ ...product, imageUrls: newUrls });
                                    }}
                                />
                                {product.imageUrls.length > 1 && (
                                    <button type="button" onClick={() => {
                                        const newUrls = product.imageUrls.filter((_, i) => i !== idx);
                                        setProduct({ ...product, imageUrls: newUrls });
                                    }} className="flex h-9 w-9 items-center justify-center rounded-md border border-red-200 bg-red-50 text-red-500 hover:bg-red-100">
                                        <Trash2 size={16} />
                                    </button>
                                )}
                            </div>
                        ))}
                        <button type="button" onClick={() => {
                            setProduct({ ...product, imageUrls: [...product.imageUrls, ""] });
                        }} className="text-sm font-medium text-[#9c3348] hover:underline">
                            + Add Image
                        </button>
                    </div>

                    <InputWithLabel text="Description" placeholder="description..." value={product.description} />

                </form>
            </Form>}
            {isOpen && whatTo === "collections" && <Form title={title} onClose={() => handleOnClick({ title: "" })} >
                <form className="space-y-4">
                    <InputWithLabel text="Name" placeholder="name..." value={collection.name} />
                    <InputWithLabel text="slug" placeholder="slug..." value={collection.slug} />
                    <InputWithLabel text="Image Url" placeholder="https://..." value={collection.imgUrl} />
                    <InputWithLabel text="Description" placeholder="description..." value={collection.description} />
                </form>
            </Form>}
            {isOpen && whatTo === "categories" && <Form title={title} onClose={() => handleOnClick({ title: "" })} >
                <form className="space-y-4">
                    <InputWithLabel text="Name" placeholder="name..." value={category.name} />
                    <InputWithLabel text="slug" placeholder="slug..." value={category.slug} />
                    <InputWithLabel text="Image Url" placeholder="https://..." value={category.imgUrl} />
                    <InputWithLabel text="Description" placeholder="description..." value={category.description} />
                </form>
            </Form>}
        </div>

    )
}
export const SelectWithLabel = ({ text, value }: { text: string, value: string }) => {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {text}
            </label>
            <Select defaultValue={value} />
        </div>
    )
}

export const TableCard = ({ handleOnClick }: { handleOnClick: ({ title, product }: { title: string, product: product }) => void }) => {
    const nameOf = (list: { id: string; name: string }[], id: string) =>
        list.find((entry) => entry.id === id)?.name ?? "—";
    const seed = {
        categories: dummyCategories,
        collections: dummyCollections,
        products: dummyProducts,
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
                                            onClick={() => handleOnClick({
                                                title: "Edit", product: {
                                                    id: p.id,
                                                    categoryId: p.categoryId,
                                                    collectionId: p.collectionId,
                                                    description: p.description,
                                                    imageUrls: p.imageUrls,
                                                    name: p.name,
                                                    price: p.price,
                                                    stock: p.stock,
                                                }
                                            })}
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

export const Button = ({ text, onClick }: { text: string, onClick: () => void }) => {
    return (
        <button onClick={onClick} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 shandow-md bg-[#9c3348] text-white hover:bg-[#9c3348e6]">
            <Plus />
            {text}
        </button>
    )

}

export const FormButton = ({ onClose, title }: { onClose: () => void, title: string }) => {
    return (
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2">
            <button onClick={onClose} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0  shadow-sm h-9 px-4 py-2 border-neutral-300 border-1 bg-transparent"> Cancel</button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm text-white font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0  shadow-sm h-9 px-4 py-2 border-neutral-300 border-1 bg-[#9c3348]">
                {title}
            </button>
        </div>
    )
}

export const Form = ({ onClose, title, children }: { onClose: () => void, title: string, children?: ReactNode }) => {
    return (
        <div className="fixed inset-0 z-50 bg-black/80">
            <div className="fixed overflow-y-auto sm:max-w-lg sm:rounded-lg max-h-[90vh] bg-[#fef8fa] border-[#e7dbd8] left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200">
                <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                    <h2 className="font-semibold tracking-tight font-serif text-2xl">{title}</h2>
                    <p className="text-[#796360] text-sm">Product details shown on the storefront.</p>
                </div>
                <button onClick={onClose} className="cursor-pointer absolute right-4 top-4 rounded-sm opacity-70 ">
                    <X />
                </button>
                {children}

                <FormButton title={title} onClose={onClose} />
            </div>
        </div>
    )
}

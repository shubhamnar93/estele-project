import { InputWithLabel } from "@/components/InputWithLabel";
import { Select } from "@/components/Select";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Category } from "@/types/category";
import { Collection } from "@/types/collection";
import { Product } from "@/types/product";
import { Layers, Package, Pencil, Plus, SquareArrowRightExit, Tag, Trash2, X } from "lucide-react";
import { ReactNode, useState } from "react";
import { router } from "@inertiajs/react";
import { store as storeCollection, update as updateCollection, destroy as destroyCollection } from '@/actions/App/Http/Controllers/CollectionController';
import { store as storeCategory, update as updateCategory, destroy as destroyCategory } from '@/actions/App/Http/Controllers/CategoryController';
import { store as storeProduct, update as updateProduct, destroy as destroyProduct } from '@/actions/App/Http/Controllers/ProductController';
import { Form as IntertiaForm } from "@inertiajs/react";

const nameOf = (list: { id: number; name: string }[], id: number) =>
    list.find((entry) => entry.id === id)?.name ?? "—";
export default function Admin({ products, collections, categories }: { products: Product[], collections: Collection[], categories: Category[] }) {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [whatTo, setWhatTo] = useState<"products" | "collections" | "categories">("products")
    const [product, setProduct] = useState<Product>({ id: 0, name: "", updated_at: "", created_at: "", price: 0, count: 0, category_id: 0, collection_id: 0, images: [""], description: "" })
    const [collection, setCollection] = useState<Collection>({ id: 0, count: 0, updated_at: "", created_at: "", name: "", slug: "", imageurl: "", description: "" })
    const [category, setCategory] = useState<Category>({ id: 0, count: 0, updated_at: "", created_at: "", name: "", slug: "", imageurl: "", description: "" })
    const categoryOption = categories.map((c) => {
        return { text: c.name, value: c.id }
    })
    const collectionOption = collections.map((c) => {
        return { text: c.name, value: c.id }
    })

    const handleOnClick = ({ title, product, category, collection }: { title: string, product?: Product, category?: Category, collection?: Collection }) => {
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
                    <DataCard title="products" icon={<Package />} total={products.length} />
                    <DataCard title="collections" icon={<Layers />} total={collections.length} />
                    <DataCard title="categories" icon={<Tag />} total={categories.length} />
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
                                    <Button onClick={() => handleOnClick({ title: "Add Product", product: { id: 0, name: "", updated_at: "", created_at: "", price: 0, count: 0, category_id: 0, collection_id: 0, images: [""], description: "" } })} text="Add Products" />
                                </div>
                                <div className="  [&_*]:border-neutral-300 mt-8">
                                    <TableCardProducts products={products} collections={collections} categories={categories} handleOnClick={({ title, product }: { title: string, product: Product }) => handleOnClick({ title, product })} />
                                </div>
                            </TabsContent>

                            <TabsContent value="collections">

                                <div className="flex w-full  items-center justify-end gap-3 mb-8">
                                    <Button onClick={() => handleOnClick({ title: "Add Collection", product: { id: 0, name: "", updated_at: "", created_at: "", price: 0, count: 0, category_id: 0, collection_id: 0, images: [""], description: "" } })} text="Add Collection" />
                                </div>
                                <TableCardCollection collections={collections} handleOnClick={handleOnClick} />
                            </TabsContent>

                            <TabsContent value="categories">

                                <div className="flex w-full  items-center justify-end gap-3 mb-8">
                                    <Button onClick={() => handleOnClick({ title: "Add Category", product: { id: 0, name: "", updated_at: "", created_at: "", price: 0, count: 0, category_id: 0, collection_id: 0, images: [""], description: "" } })} text="Add Category" />
                                </div>

                                <TableCardCategory categories={categories} handleOnClick={handleOnClick} />
                            </TabsContent>
                        </div>
                    </div>
                </Tabs>
            </main>
            {isOpen && whatTo === "products" && <Form title={title} onClose={() => handleOnClick({ title: "" })} >

                <IntertiaForm action={title == "Edit" ? updateProduct(product.id) : storeProduct()} className="space-y-4">
                    <InputWithLabel name="name" text="Name" placeholder="name..." value={product.name} />
                    <div className="grid gap-4 sm:grid-cols-2 ">
                        <InputWithLabel name="price" text="Price" placeholder="999..." value={product.price} />
                        <InputWithLabel name="count" text="Stock" placeholder="999..." value={product.count} />
                        <SelectWithLabel name="category_id" options={categoryOption} text="Category" value={product.category_id} />
                        <SelectWithLabel name="collection_id" options={collectionOption} text="Collection" value={product.collection_id} />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none">Image Urls</label>
                        {product.images &&
                            (product.images?.map((url, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <input
                                        type="text"
                                        className="flex h-9 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        value={url}
                                        placeholder="https://..."
                                        onChange={(e) => {
                                            const newUrls = [...product.images ?? ""];
                                            newUrls[idx] = e.target.value;
                                            setProduct({ ...product, images: newUrls });
                                        }}
                                    />
                                    {product.images && product.images?.length > 1 && (
                                        <button type="button" onClick={() => {
                                            const newUrls = product.images?.filter((_, i) => i !== idx);
                                            setProduct({ ...product, images: newUrls });
                                        }} className="flex h-9 w-9 items-center justify-center rounded-md border border-red-200 bg-red-50 text-red-500 hover:bg-red-100">
                                            <Trash2 size={16} />
                                        </button>
                                    )}
                                </div>)
                            ))}
                        <button type="button" onClick={() => {
                            setProduct({ ...product, images: [...product.images || "", ""] });
                        }} className="text-sm font-medium text-[#9c3348] hover:underline">
                            + Add Image
                        </button>
                    </div>

                    <InputWithLabel name="description" text="Description" placeholder="description..." value={product.description} />
                    <FormButton title={title} onClose={() => handleOnClick({ title: "" })} />
                </IntertiaForm>
            </Form>}
            {isOpen && whatTo === "collections" &&
                <Form title={title} onClose={() => handleOnClick({ title: "" })} >
                    <IntertiaForm action={title == "Edit" ? updateCollection(collection.id) : storeCollection()} className="space-y-4">
                        <InputWithLabel name={"name"} text="Name" placeholder="name..." value={category.name} />
                        <InputWithLabel name={"slug"} text="slug" placeholder="slug..." value={category.slug} />
                        <InputWithLabel name={"imageUrl"} text="Image Url" placeholder="https://..." value={category.imageurl} />
                        <InputWithLabel name={"description"} text="Description" placeholder="description..." value={category.description} />
                        <FormButton type="submit" title={title} onClose={() => handleOnClick({ title: "" })} />
                    </IntertiaForm>
                </Form>}
            {isOpen && whatTo === "categories" &&
                <Form title={title} onClose={() => handleOnClick({ title: "" })} >
                    <IntertiaForm action={title == "Edit" ? updateCategory(category.id) : storeCategory()} className="space-y-4">
                        <InputWithLabel name={"name"} text="Name" placeholder="name..." value={category.name} />
                        <InputWithLabel name={"slug"} text="slug" placeholder="slug..." value={category.slug} />
                        <InputWithLabel name={"image url"} text="Image Url" placeholder="https://..." value={category.imageurl} />
                        <InputWithLabel name={"description"} text="Description" placeholder="description..." value={category.description} />
                        <FormButton title={title} onClose={() => handleOnClick({ title: "" })} />
                    </IntertiaForm>
                </Form>}
        </div>

    )
}
export const SelectWithLabel = ({ text, value, options, name }: { name: string, text: string, value: number, options: { text: string, value: number }[] }) => {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {text}
            </label>
            <Select options={options} name={name} defaultValue={value} />
        </div>
    )
}

export const TableCardProducts = ({ handleOnClick, products, categories, collections }: { products: Product[], collections: Collection[], categories: Category[], handleOnClick: ({ title, product }: { title: string, product: Product }) => void }) => {
    const filteredProducts = products
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
                                <TableCell>{nameOf(categories, p.category_id)}</TableCell>
                                <TableCell>{nameOf(collections, p.collection_id)}</TableCell>
                                <TableCell className="text-right">₹{p.price}</TableCell>
                                <TableCell className="text-right">{p.count}</TableCell>
                                <TableCell>
                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => handleOnClick({
                                                title: "Edit", product: {
                                                    id: p.id,
                                                    category_id: p.category_id,
                                                    collection_id: p.collection_id,
                                                    description: p.description,
                                                    images: p.images,
                                                    name: p.name,
                                                    price: p.price,
                                                    count: p.count,
                                                    updated_at: p.updated_at,
                                                    created_at: p.created_at
                                                }
                                            })}
                                            className=" hover:bg-neutral-100 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                                        >
                                            <Pencil className="text-neutral-500" />

                                        </button>
                                        <button
                                            onClick={() => {
                                                router.delete(destroyProduct(p.id).url);
                                            }}
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

export const TableCardCollection = ({ handleOnClick, collections, }: { collections: Collection[], handleOnClick: ({ title, collection }: { title: string, collection: Collection }) => void }) => {
    const filteredProducts = collections
    return (
        <Card className="border-1 shadow-xl [&_*]:border-neutral-300">
            <CardContent className="p-0">
                <Table className="border-neutral-300">
                    <TableHeader className="">
                        <TableRow>
                            <TableHead>Category</TableHead>
                            <TableHead>Slug</TableHead>
                            <TableHead>products</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredProducts.map((p) => (
                            <TableRow key={p.id}>
                                <TableCell>
                                    <div className="font-medium">{p.name}</div>
                                </TableCell>
                                <TableCell className="text-left">/{p.slug}</TableCell>
                                <TableCell className="text-left">{p.count}</TableCell>
                                <TableCell>
                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => handleOnClick({
                                                title: "Edit", collection: {
                                                    name: p.name,
                                                    slug: p.slug,
                                                    count: p.count,
                                                    created_at: p.created_at,
                                                    updated_at: p.updated_at,
                                                    description: p.description,
                                                    id: p.id,
                                                    imageurl: p.imageurl
                                                }
                                            })}
                                            className=" hover:bg-neutral-100 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                                        >
                                            <Pencil className="text-neutral-500" />

                                        </button>
                                        <button

                                            onClick={() => {
                                                router.delete(destroyCollection(p.id).url);
                                            }}
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

export const TableCardCategory = ({ handleOnClick, categories, }: { categories: Category[], handleOnClick: ({ title, category }: { title: string, category: Category }) => void }) => {
    const filteredProducts = categories
    return (
        <Card className="border-1 shadow-xl [&_*]:border-neutral-300">
            <CardContent className="p-0">
                <Table className="border-neutral-300">
                    <TableHeader className="">
                        <TableRow>
                            <TableHead>Category</TableHead>
                            <TableHead>Slug</TableHead>
                            <TableHead>products</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredProducts.map((p) => (
                            <TableRow key={p.id}>
                                <TableCell>
                                    <div className="font-medium">{p.name}</div>
                                </TableCell>
                                <TableCell className="text-left">/{p.slug}</TableCell>
                                <TableCell className="text-left">{p.count}</TableCell>
                                <TableCell>
                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => handleOnClick({
                                                title: "Edit", category: {
                                                    name: p.name,
                                                    slug: p.slug,
                                                    count: p.count,
                                                    created_at: p.created_at,
                                                    updated_at: p.updated_at,
                                                    description: p.description,
                                                    id: p.id,
                                                    imageurl: p.imageurl
                                                }
                                            })}
                                            className=" hover:bg-neutral-100 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                                        >
                                            <Pencil className="text-neutral-500" />

                                        </button>
                                        <button

                                            onClick={() => {
                                                router.delete(destroyCategory(p.id).url);
                                            }}
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

export const FormButton = ({ onClose, title, type }: { onClose: () => void, title: string, type?: "button" | "reset" | "submit" | undefined }) => {
    return (
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-2">
            <button onClick={onClose} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0  shadow-sm h-9 px-4 py-2 border-neutral-300 border-1 bg-transparent"> Cancel</button>
            <button type={type} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm text-white font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0  shadow-sm h-9 px-4 py-2 border-neutral-300 border-1 bg-[#9c3348]">
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

            </div>
        </div>
    )
}

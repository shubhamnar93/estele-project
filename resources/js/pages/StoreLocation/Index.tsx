import Layout from "../Layout";

export default function StoreLocator({ stores }: { stores: { name: string, imageurl: string, address: string, mobile: string }[] }) {
    return (
        <Layout>
            <main className="">
                <div className="flex justify-center mb-8 text-4xl font-semibold">
                    <h1>Locate Store</h1>
                </div>
                <div className="flex justify-center mb-12 px-8">
                    <div className="grid grid-cols-2 max-w-[1200px] gap-4 md:grid-cols-4">
                        {stores.map((store) => (
                            <div
                                className="group rounded-lg"
                            >
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="overflow-hidden">
                                        <img
                                            src={store.imageurl}
                                            alt={store.name}
                                            className="w-full rounded-lg aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <h3 className="text-lg font-medium text-neutral-800">
                                            {store.name}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-neutral-500">
                                            {store.address}
                                        </p>

                                        <p className="mt-3 text-sm text-neutral-600">
                                            Mob : {store.mobile}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    )
}

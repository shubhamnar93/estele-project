import { Product } from "@/types/product"
import Layout from "../Layout"
import ProductPage from "@/components/ProductDetail"

export default function ProductDetailPage({ product }: { product: Product }) {
    return (
        <Layout>
            <ProductPage product={product} />
        </Layout>
    )
}

export type Product = {
    id: number,
    category_id: number,
    collection_id: number,
    name: string,
    price: number,
    count: number,
    description: string,
    images?: string[],
    created_at: string;
    updated_at: string;
}

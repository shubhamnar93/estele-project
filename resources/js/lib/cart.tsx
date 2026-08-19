import { Product } from "@/types/product";
import { useCallback, useEffect, useMemo, useState } from "react";


export type CartLine = Product & { qty: number };

export function useCart() {
    const [lines, setLines] = useState<CartLine[]>(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });
    const [open, setOpen] = useState(false);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(lines));
    }, [lines]);

    const add = useCallback((product: Product) => {
        setLines((prev) => {
            const found = prev.find((l) => l.id === product.id);
            if (found) {
                return prev.map((l) => (l.id === product.id ? { ...l, qty: l.qty + 1 } : l));
            }
            return [...prev, { ...product, qty: 1 }];
        });
        setOpen(true);
    }, []);

    const setQty = useCallback((id: number, qty: number) => {
        setLines((prev) =>
            qty <= 0 ? prev.filter((l) => l.id !== id) : prev.map((l) => (l.id === id ? { ...l, qty } : l)),
        );
    }, []);

    const remove = useCallback((id: number) => setLines((prev) => prev.filter((l) => l.id !== id)), []);

    const count = useMemo(() => lines.reduce((n, l) => n + l.qty, 0), [lines]);
    const subtotal = useMemo(() => lines.reduce((n, l) => n + l.qty * l.price, 0), [lines]);

    return { lines, open, setOpen, add, setQty, remove, count, subtotal };
}

export type Cart = ReturnType<typeof useCart>;

export const formatINR = (value: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

export const FREE_SHIPPING_THRESHOLD = 999;

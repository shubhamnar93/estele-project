import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FREE_SHIPPING_THRESHOLD, formatINR, type Cart } from "@/lib/cart";

export function CartDrawer({ cart }: { cart: Cart }) {
    const { open, setOpen, lines, setQty, remove, subtotal, count } = cart;
    console.log(lines)
    const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="right" className="flex bg-white border-neutral-300 [&_*]:border-neutral-300 w-full flex-col gap-0 p-0 sm:max-w-md">
                <SheetDescription className="sr-only">Items currently in your shopping bag</SheetDescription>
                <header className="flex items-center justify-between border-b px-5 py-4">
                    <SheetTitle className="text-sm font-medium uppercase tracking-[0.18em]">
                        Your bag {count > 0 && <span className="text-muted-foreground">({count})</span>}
                    </SheetTitle>
                </header>


                {lines.length > 0 && (
                    <div className="border-b px-5 py-3">
                        <p className="text-xs text-muted-foreground">
                            {remaining > 0 ? (
                                <>
                                    You are <span className="font-medium text-foreground">{formatINR(remaining)}</span> away from free
                                    shipping
                                </>
                            ) : (
                                <span className="font-medium text-foreground">Congrats! You've unlocked free shipping.</span>
                            )}
                        </p>
                        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-secondary">
                            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
                        </div>
                    </div>
                )}

                {lines.length === 0 ? (
                    <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                        <ShoppingBag className="h-8 w-8 text-muted-foreground" strokeWidth={1.25} />
                        <p className="text-sm text-muted-foreground">Your bag is empty.</p>
                        <Button variant="outline" onClick={() => setOpen(false)}>
                            Continue shopping
                        </Button>
                    </div>
                ) : (
                    <div className="flex-1 divide-y overflow-y-auto px-5">
                        {lines.map((line) => (
                            <div key={line.id} className="flex gap-4 py-5">
                                <img
                                    src={line.images ? line.images[0] : ""}
                                    alt={line.name}
                                    loading="lazy"
                                    width={800}
                                    height={800}
                                    className="h-24 w-20 shrink-0 rounded-md object-cover"
                                />
                                <div className="flex min-w-0 flex-1 flex-col">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="min-w-0">
                                            <p className="truncate text-sm font-medium">{line.name}</p>
                                            <p className="mt-0.5 text-xs text-muted-foreground">{line.description}</p>
                                        </div>
                                        <button
                                            onClick={() => remove(line.id)}
                                            aria-label={`Remove ${line.name}`}
                                            className="text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            <X className="h-3.5 w-3.5" />
                                        </button>
                                    </div>
                                    <div className="mt-auto flex items-center justify-between pt-3">
                                        <div className="flex items-center rounded-full border">
                                            <button
                                                onClick={() => setQty(line.id, line.qty - 1)}
                                                aria-label="Decrease quantity"
                                                className="p-2 text-muted-foreground transition-colors hover:text-foreground"
                                            >
                                                <Minus className="h-3 w-3" />
                                            </button>
                                            <span className="w-6 text-center text-xs tabular-nums">{line.qty}</span>
                                            <button
                                                onClick={() => setQty(line.id, line.qty + 1)}
                                                aria-label="Increase quantity"
                                                className="p-2 text-muted-foreground transition-colors hover:text-foreground"
                                            >
                                                <Plus className="h-3 w-3" />
                                            </button>
                                        </div>
                                        <div className="text-right text-sm">
                                            <span className="font-medium">{formatINR(line.price * line.qty)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {lines.length > 0 && (
                    <footer className="border-t px-5 py-4">
                        <div className="flex items-center justify-between text-sm">
                            <span className="uppercase tracking-[0.14em] text-muted-foreground">Subtotal</span>
                            <span className="font-medium">{formatINR(subtotal)}</span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">Taxes and discounts calculated at checkout.</p>
                        <Button className="mt-4 bg-black text-white h-12 w-full rounded-full text-xs uppercase tracking-[0.18em]">Checkout</Button>
                        <button
                            onClick={() => setOpen(false)}
                            className="mt-3 w-full text-center text-xs underline underline-offset-4 text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Continue shopping
                        </button>
                    </footer>
                )}
            </SheetContent>
        </Sheet>
    );
}

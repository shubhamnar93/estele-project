import { Category } from "@/types/category";
import React, { useState, useRef, useCallback, useEffect, ReactNode } from "react";

/**
 * Dual-handle price range slider (noUi-style) built from scratch.
 *
 * Props:
 *   min      {number}   absolute min value (default 0)
 *   max      {number}   absolute max value (default 299950 — paise)
 *   step     {number}   step size (default 1)
 *   initial  {[number,number]}  initial [low, high]
 *   format   {fn}       value -> display string (default ₹ with thousands separators)
 *   onChange {fn}       (low, high) => void
 */
function PriceRangeSlider({
    min = 0,
    max = 299950,
    step = 1,
    initial = [0, 299950],
    format = (v: any) =>
        "₹" + Math.round(v / 100).toLocaleString("en-IN"),
    onChange,
}: { min: number, max: number, step?: number, initial: number[], format?: (v: any) => ReactNode, onChange: (next: any, high: any) => void }) {
    const trackRef = useRef(null);
    const [low, setLow] = useState(initial[0]);
    const [high, setHigh] = useState(initial[1]);
    const dragging = useRef(null); // 'low' | 'high' | null

    const clamp = (v: any) => Math.min(max, Math.max(min, v));
    const pct = (v: any) => ((v - min) / (max - min)) * 100;

    const valueFromClientX = useCallback((clientX: number) => {
        const el = trackRef.current;
        if (!el) return min;
        const rect = el.getBoundingClientRect();
        const ratio = (clientX - rect.left) / rect.width;
        const raw = min + ratio * (max - min);
        const stepped = Math.round(raw / step) * step;
        return clamp(stepped);
    }, [min, max, step]);

    const onPointerDown = (which: any) => (e: any) => {
        e.preventDefault();
        dragging.current = which;
        e.target.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = useCallback((e: any) => {
        if (!dragging.current) return;
        const v = valueFromClientX(e.clientX);
        if (dragging.current === "low") {
            setLow((prev) => {
                const next = Math.min(v, high - step);
                if (next !== prev && onChange) onChange(next, high);
                return next;
            });
        } else if (dragging.current === "high") {
            setHigh((prev) => {
                const next = Math.max(v, low + step);
                if (next !== prev && onChange) onChange(low, next);
                return next;
            });
        }
    }, [valueFromClientX, low, high, step, onChange]);

    const onPointerUp = useCallback((e: any) => {
        if (dragging.current) {
            dragging.current = null;
            e.target.releasePointerCapture?.(e.pointerId);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp);
        return () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
        };
    }, [onPointerMove, onPointerUp]);

    const lowPct = pct(low);
    const highPct = pct(high);

    return (
        <div className="t4s-price_slider_wrapper select-none">
            <div
                ref={trackRef}
                className="t4s-price_slider relative h-2 w-full rounded-full bg-neutral-200"
            >
                {/* selected range */}
                <div
                    className="absolute top-0 h-2 rounded-full bg-neutral-800"
                    style={{ left: `${lowPct}%`, width: `${highPct - lowPct}%` }}
                />
                {/* lower handle */}
                <div
                    className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-grab touch-none active:cursor-grabbing"
                    style={{ left: `${lowPct}%` }}
                    onPointerDown={onPointerDown("low")}
                >
                    <div className="h-4 w-4 rounded-full border border-neutral-300 bg-white shadow" />
                </div>
                {/* upper handle */}
                <div
                    className="absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-grab touch-none active:cursor-grabbing"
                    style={{ left: `${highPct}%` }}
                    onPointerDown={onPointerDown("high")}
                >
                    <div className="h-4 w-4 rounded-full border border-neutral-300 bg-white shadow" />
                </div>
            </div>

            <div className="mt-3 text-sm text-neutral-700">
                Price:{" "}
                <span className="t4s-from font-medium">{format(low)}</span>
                {" — "}
                <span className="t4s-to font-medium">{format(high)}</span>
            </div>
        </div>
    );
}

/**
 * Single facet value row (checkbox + label + count).
 * `checked` reflects whether this filter is currently active.
 */
function FacetValue({ label, checked, onToggle }: { label: string, checked: boolean, onToggle: () => void }) {
    return (
        <li>
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full items-center gap-2 py-1 text-left text-sm text-neutral-700 hover:text-neutral-900"
            >
                <span className="t4s-checkbox-wrapper relative inline-flex h-3.5 w-3.5 items-center justify-center overflow-hidden rounded-[3px] border border-neutral-400 bg-white">
                    {checked && (
                        <svg
                            viewBox="0 0 24 24"
                            width="14"
                            height="14"
                            className="absolute inset-0 m-auto"
                            aria-hidden="true"
                        >
                            <path
                                fill="currentColor"
                                d="M9 20l-7-7 3-3 4 4L19 4l3 3z"
                            />
                        </svg>
                    )}
                </span>
                <span>{label}</span>
            </button>
        </li>
    );
}

/**
 * Full sidebar: category checkboxes + price slider.
 *
 * Props:
 *   categories  {Array<{label,count}>}
 *   priceMin    {number}  absolute min in paise
 *   priceMax    {number}  absolute max in paise
 *   onApply     {fn}      (selectedCats, [low, high]) => void
 */
export default function FilterSidebar({
    categories,
    priceMin = 0,
    priceMax = 299950,
    selected,
    setSelected,
    onApply,
}: {
    categories: Category[]
    priceMin?: number,
    priceMax?: number,
    selected: Set<number>,
    setSelected: (newSet: (a: Set<number>) => Set<number>) => void,
    onApply?: (selected: any, price: number[]) => void
}) {

    const [price, setPrice] = useState([priceMin, priceMax]);

    const toggle = (label: number) => {
        setSelected((prev: Set<number>) => {
            const next = new Set(prev);
            if (next.has(label)) next.delete(label);
            else next.add(label);
            return next;
        });
    };

    return (
        <div
            className="w-full mt-8 border-1 border-gray-300 p-4 shadow-lg rounded-md"
        >
            <form
                id="FacetFiltersForm"
                data-sidebar-links=""
                className="t4s-facets__form grid grid-cols-2 gap-6"
                onSubmit={(e) => {
                    e.preventDefault();
                    onApply?.([...selected], price);
                }}
            >
                {/* CATEGORY */}
                <div id="blockid_1" className="t4s-facet is--blockidcategory">
                    <h5 className="t4s-facet-title mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-900">
                        Category
                    </h5>
                    <ul className="t4s-filter__values is--style-checkbox flex flex-col gap-0.5">
                        {categories.map((c) => {

                            return (
                                <FacetValue key={c.id}
                                    label={c.name}
                                    checked={selected.has(c.id)}
                                    onToggle={() => toggle(c.id)}
                                />
                            )
                        }
                        )}
                    </ul>
                </div>

                {/* PRICE */}
                <div id="blockid_3" className="t4s-facet is--blockidprice">
                    <h5 className="t4s-facet-title mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-900">
                        Price
                    </h5>
                    <PriceRangeSlider
                        min={priceMin}
                        max={priceMax}
                        initial={[priceMin, priceMax]}
                        onChange={(low: number, high: number) => setPrice([low, high])}
                    />
                </div>

                <button
                    type="submit"
                    className=" col-span-2 t4s-price_slider_btn mt-2 w-full rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
                >
                    Filter
                </button>
            </form>
        </div>
    );
}

import { useState } from "react";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import FilterSidebar from "./FilterSidebar";
import { Category } from "@/types/category";


export default function CollectionHeader({
    categories,
    selected,
    setSelected,
    sortOptions,
    selectedSort,
    setSelectedSort,
    priceMin = 0,
    priceMax = 2999950,
    price,
    setPrice,
}: {
    categories: Category[],
    sortOptions: { label: string, value: string }[],
    selectedSort: string,
    setSelectedSort: (a: string) => void,
    selected: Set<number>,
    setSelected: (newSet: (a: Set<number>) => Set<number>) => void,
    priceMin: number,
    priceMax: number,

    price: number[],
    setPrice: (a: [number, number]) => void,

}) {
    const [sortOpen, setSortOpen] = useState(false);
    const [showFilter, setShowFilter] = useState(false)

    const selectedLabel =
        sortOptions.find((option) => option.value === selectedSort)?.label ??
        "Featured";

    return (
        <>
            <div className="flex items-center justify-between">
                {/* Filter */}
                <div>
                    <button
                        type="button"
                        className="flex items-center gap-2 text-sm font-medium"
                        aria-label="Show filters"
                        onClick={() => setShowFilter((f) => !f)}
                    >
                        <SlidersHorizontal size={16} strokeWidth={1.8} />
                        <span>Filter</span>
                    </button>
                </div>

                {/* Sort */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setSortOpen((prev) => !prev)}
                        className="flex items-center gap-2 text-sm font-medium"
                        aria-expanded={sortOpen}
                    >
                        {/* Desktop */}
                        <span className="hidden md:block">{selectedLabel}</span>

                        {/* Mobile */}
                        <span className="md:hidden">Sort</span>

                        <ChevronDown
                            size={18}
                            className={`transition-transform ${sortOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {sortOpen && (
                        <>
                            {/* Optional mobile backdrop */}
                            <div
                                className="fixed inset-0 z-40 md:hidden"
                                onClick={() => setSortOpen(false)}
                            />

                            <div className="absolute right-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
                                {/* Header */}
                                <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 md:hidden">
                                    <span className="text-sm font-medium">Sort by:</span>

                                    <button
                                        type="button"
                                        onClick={() => setSortOpen(false)}
                                        aria-label="Close"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>

                                {/* Options */}
                                <div className="py-1">
                                    {sortOptions.map((option) => {
                                        const isSelected = selectedSort === option.value;

                                        return (
                                            <button
                                                key={option.value}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedSort(option.value);
                                                    setSortOpen(false);
                                                }}
                                                className={`flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors ${isSelected
                                                    ? "font-medium text-black"
                                                    : "text-gray-600 hover:bg-gray-50 hover:text-black"
                                                    }`}
                                            >
                                                {option.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {showFilter &&
                <FilterSidebar price={price} setPrice={(a) => setPrice(a)} priceMax={priceMax} priceMin={priceMin} categories={categories} selected={selected} setSelected={(a) => setSelected(a)} />
            }
            {/* <CategoryFilter */}
            {/* /> */}
        </>
    );
}

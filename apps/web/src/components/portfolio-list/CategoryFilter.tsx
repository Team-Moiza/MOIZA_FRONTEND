"use client";

import React, { useRef, useState, useEffect } from "react";

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({
    categories,
    selectedCategory,
    onCategoryChange,
}: CategoryFilterProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [showGradient, setShowGradient] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        setShowGradient(el.scrollWidth > el.clientWidth);
    }, [categories]);

    const handleScroll = () => {
        const el = containerRef.current;
        if (!el) return;
        const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
        setShowGradient(!atEnd);
    };

    return (
        <div className="relative overflow-hidden">
            <div
                ref={containerRef}
                className="overflow-x-auto pb-5 flex gap-2 scrollbar-hide"
                onScroll={handleScroll}
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`px-4 py-2 rounded-full whitespace-nowrap ${
                            selectedCategory === category
                                ? "bg-primary-500 text-white"
                                : "bg-white text-gray-600 border border-gray-200"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {showGradient && (
                <div
                    className="
            pointer-events-none
            absolute top-0 right-0 h-full w-20
            bg-gradient-to-l from-white to-transparent
            "
                />
            )}
        </div>
    );
};

export default CategoryFilter;

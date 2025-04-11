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
        <div className="relative overflow-hidden sticky top-[80px] z-10 bg-white pt-4 pb-3">
            <div
                ref={containerRef}
                className="overflow-x-auto pb-2 flex gap-2 scrollbar-hide px-4 sm:px-12 lg:px-0"
                onScroll={handleScroll}
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-150 ${
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
                <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent" />
            )}
            <div className="absolute bottom-0 left-0 w-full h-6  bg-gradient-to-l from-white/0 to-ba" />

        </div>
    );
};

export default CategoryFilter;

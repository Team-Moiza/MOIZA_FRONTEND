import React from "react";
import { Job } from "../../enum/enums";

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
    categories,
    selectedCategory,
    onCategoryChange,
}) => {
    return (
        <div className="overflow-x-auto pb-5 flex gap-2 scrollbar-hide">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                        selectedCategory === category
                            ? "bg-primary-500 text-white"
                            : "bg-white text-gray-600 border-[1px] border-gray-200"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter; 
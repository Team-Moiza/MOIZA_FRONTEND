"use client";
import React, { useState } from "react";
import Filter from "../../components/Filter";

const PortfolioList = () => {
    const categories = [
        "전체",
        "프론트엔드 개발자",
        "백엔드 개발자",
        "UXUI디자이너",
        "기획자",
    ];
    const [selectedCategory, setSelectedCategory] = useState("전체");
    return (
        <div className="h-screen w-screen pt-[120px] px-[200px]">
            <div className="flex gap-2 mb-[30px]">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full ${
                            selectedCategory === category
                                ? "bg-primary-500 text-white"
                                : "bg-white text-gray-600 border-[1px] border-gray-200"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <Filter />
        </div>
    );
};

export default PortfolioList;

import React from "react";
import Pagination from "react-js-pagination";

type CustomPaginationProps = {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
};

const CustomPagination = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}: CustomPaginationProps) => {
    return (
        <div className="mt-6 flex justify-center text-btn">
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={totalItems}
                pageRangeDisplayed={5}
                onChange={onPageChange}
                itemClass="flex items-center justify-center w-8 h-8 border border-gray-100 rounded-[8px] cursor-pointer text-black"
                activeClass="bg-primary-500 text-white border-none"
                linkClass="flex items-center justify-center w-full h-full"
                disabledClass="text-gray-300 cursor-not-allowed"
                innerClass="flex gap-2"
            />
        </div>
    );
};

export default CustomPagination;
"use client";

import React, { useState, useEffect } from "react";
import { instance } from "../apis/instance";
import ProfileList from "../components/portfolio-list/ProfileList";
import CustomPagination from "../components/portfolio-list/Pagination";
import Filter from "../components/portfolio-list/Filter";
import { Footer } from "../components/layouts/Footer";
import { School, Job } from "../enum/enums";
import { FilterApply, Profile } from "../types/portfolio";

const PortfolioList = () => {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [filteredProfiles, setFilteredProfiles] = useState<Profile[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [sortOption, setSortOption] = useState("인기순");
    const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
    const [selectedSchools, setSelectedSchools] = useState<
        (keyof typeof School)[]
    >([]);
    const [companyStatus, setCompanyStatus] = useState("전체");

    const categories = [
        "전체",
        Job.FRONTEND_DEVELOPER,
        Job.BACKEND_DEVELOPER,
        Job.UI_UX_DESIGNER,
        Job.ANDROID_DEVELOPER,
        Job.DEVOPS_DEVELOPER,
        Job.FULLSTACK_DEVELOPER,
        Job.GAME_DEVELOPER,
        Job.HW_EMBEDDED,
        Job.IOS_DEVELOPER,
        Job.SECURITY_SPECIALIST,
        Job.PLANNER,
        Job.OTHER,
    ];

    const isLoggedOut = !localStorage.getItem("accessToken");

    useEffect(() => {
        const getProfiles = async () => {
            try {
                const response = await instance.get("portfolios");
                const data = response.data.content || [];
                setProfiles(data);
                setFilteredProfiles(data);
            } catch (error) {
                setProfiles([]);
                setFilteredProfiles([]);
            }
        };

        getProfiles();
    }, []);

    const handleFilterApply = ({
        sort,
        stacks,
        schools,
        company,
    }: FilterApply) => {
        setSortOption(sort);
        setSelectedStacks(stacks);
        setSelectedSchools(schools as (keyof typeof School)[]);
        setCompanyStatus(company);
    };

    useEffect(() => {
        const filtered = profiles.filter((profile) => {
            const categoryMatch =
                selectedCategory === "전체" ||
                Job[profile.job] === selectedCategory ||
                (selectedCategory === Job.OTHER &&
                    !Object.values(Job).includes(Job[profile.job]));

            const schoolMatch =
                selectedSchools.length === 0 ||
                selectedSchools.includes(profile.school as keyof typeof School);

            const stackMatch =
                selectedStacks.length === 0 ||
                profile.codes?.some((code) =>
                    selectedStacks.includes(code.keyword)
                );

            const companyMatch =
                companyStatus === "전체" ||
                (companyStatus === "재직중" && profile.company !== null) ||
                (companyStatus === "미재직" && profile.company === null);

            return categoryMatch && schoolMatch && stackMatch && companyMatch;
        });

        const sorted = [...filtered].sort((a, b) => {
            if (sortOption === "인기순") {
                return Number(b.likeCnt) - Number(a.likeCnt);
            } else if (sortOption === "최신순") {
                return -1;
            } else {
                return 1;
            }
        });

        setFilteredProfiles(sorted);
    }, [
        selectedCategory,
        selectedStacks,
        selectedSchools,
        companyStatus,
        sortOption,
        profiles,
    ]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProfiles = filteredProfiles.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const handlePageChange = (page: number) => {
        if (isLoggedOut) {
            alert("로그인이 필요한 서비스입니다.");
            window.location.replace("/login");
        } else {
            setCurrentPage(page);
        }
    };

    return (
        <>
            <div className="w-screen pt-[120px] px-[200px]">
                <div className="overflow-x-auto pb-5 flex gap-2 scrollbar-hide">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setCurrentPage(1);
                            }}
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
                <div className="flex gap-5 w-[100%] justify-between">
                    <div className="flex flex-col gap-5 w-[92%]">
                        <ProfileList
                            paginatedProfiles={paginatedProfiles}
                            isLoggedOut={isLoggedOut}
                        />
                        <CustomPagination
                            totalItems={filteredProfiles.length}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                    <Filter onFilterApply={handleFilterApply} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PortfolioList;

"use client";

import React, { useState, useEffect } from "react";
import { instance } from "../apis/instance";
import ProfileListContainer from "../components/portfolio-list/ProfileListContainer";
import CategoryFilter from "../components/portfolio-list/CategoryFilter";
import ProfileFilter from "../components/portfolio-list/ProfileFilter";
import { Footer } from "../components/layouts/Footer";
import { School, Job, SchoolKeyByValue } from "../enum/enums";
import { FilterApply, Profile } from "../types/portfolio";

const Main = () => {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [filteredProfiles, setFilteredProfiles] = useState<Profile[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [sortOption, setSortOption] = useState("인기순");
    const [selectedStacks, setSelectedStacks] = useState<
        { id: number; keyword: string }[]
    >([]);
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

    useEffect(() => {
        const getProfiles = async () => {
            const query = new URLSearchParams({
                page: (currentPage - 1).toString(),
                size: itemsPerPage.toString(),
            }).toString();
            await fetchProfiles(query);
        };
        getProfiles();
    }, [currentPage]);

    const fetchProfiles = async (query: string) => {
        try {
            const response = await instance.get(`portfolios?${query}`);
            const data = response.data.content || [];
            setProfiles(data);
            setFilteredProfiles(data);
        } catch (error) {
            console.error(error);
            setProfiles([]);
            setFilteredProfiles([]);
        }
    };

    // Main.tsx
    const applyFilterFromMain = ({
        sort,
        stacks,
        schools,
        company,
    }: FilterApply) => {
        const stackIds = stacks.map((stack) => stack.id);
        const schoolKeys = schools.map(
            (school) => SchoolKeyByValue[school as School] // 역방향 매핑 사용
        );
        const query = new URLSearchParams({
            page: (currentPage - 1).toString(),
            size: itemsPerPage.toString(),
            ...(stackIds.length > 0 && { code: stackIds.join(",") }),
            ...(schools.length > 0 && { school: schoolKeys.join(",") }), // BSSM,DSM 전달
            isEmployed: company === "재직중" ? "true" : "false",
            dateSort: sort || "DESC",
        }).toString();

        fetchProfiles(query);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProfiles = filteredProfiles.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const handlePageChange = (page: number) => {
        const isLoggedOut = !localStorage.getItem("accessToken");
        if (isLoggedOut) {
            alert("로그인이 필요한 서비스입니다.");
            window.location.replace("/login");
        } else {
            setCurrentPage(page);
        }
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    return (
        <>
            <div className="w-screen pt-[120px] px-[200px]">
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />
                <div className="flex gap-5 w-[100%] justify-between">
                    <ProfileListContainer
                        paginatedProfiles={paginatedProfiles}
                        totalItems={filteredProfiles.length}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                    <ProfileFilter applyFilter={applyFilterFromMain} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Main;

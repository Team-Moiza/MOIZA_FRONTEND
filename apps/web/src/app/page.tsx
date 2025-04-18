"use client";

import React, { useState, useEffect } from "react";
import { instance } from "../apis/instance";
import cookies from "js-cookie";
import ProfileListContainer from "../components/portfolio-list/ProfileListContainer";
import CategoryFilter from "../components/portfolio-list/CategoryFilter";
import ProfileFilter from "../components/portfolio-list/ProfileFilter";
import { Footer } from "../components/layouts/Footer";
import { School, Job, SchoolKeyByValue, jobMap } from "../enum/enums";
import { FilterApply, Profile } from "../types/portfolio";

const Main = () => {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [filteredProfiles, setFilteredProfiles] = useState<Profile[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const itemsPerPage = 8;

    const categories = [
        "전체",
        Job.FRONTEND_DEVELOPER,
        Job.BACKEND_DEVELOPER,
        Job.UI_UX_DESIGNER,
        Job.IOS_DEVELOPER,
        Job.APP_DEVELOPER,
        Job.ANDROID_DEVELOPER,
        Job.SECURITY_SPECIALIST,
        Job.DATA_ENGINEER,
        Job.FULLSTACK_DEVELOPER,
        Job.PLANNER,
        Job.DEVOPS_DEVELOPER,
        Job.GAME_DEVELOPER,
        Job.HW_EMBEDDED,
        Job.OTHER,
    ];

    useEffect(() => {
        const query = new URLSearchParams({
            page: (currentPage - 1).toString(),
            size: itemsPerPage.toString(),
        });
    
        if (selectedCategory !== "전체") {
            const jobKey = Object.entries(jobMap).find(
                ([_, value]) => value === selectedCategory
            )?.[0];
    
            if (jobKey) query.append("job", jobKey);
        }
    
        fetchProfiles(query.toString());
    }, [currentPage, selectedCategory]);
    

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const fetchProfiles = async (query: string) => {
        const response = await instance.get(`portfolios?${query}`);
        const data = response.data.content || [];
        setProfiles(data);
        setFilteredProfiles(data);
    };
    

    const applyFilterFromMain = ({
        sort,
        stacks,
        schools,
        company,
    }: FilterApply) => {
        const stackIds = stacks.map((stack) => stack.id);
        const schoolKeys = schools.map(
            (school) => SchoolKeyByValue[school as School]
        );
        const employmentStatus =
            company === "미재직"
                ? "false"
                : company === "재직중"
                  ? "true"
                  : null;

        const query = new URLSearchParams({
            page: currentPage.toString(),
            size: itemsPerPage.toString(),
            ...(stackIds.length > 0 && { code: stackIds.join(",") }),
            ...(employmentStatus !== null && { isEmployed: employmentStatus }),
        });

        schoolKeys.forEach((school) => {
            query.append("school", school);
        });

        if (sort) {
            const [sortKey, sortValue] = sort.split(":");
            if (sortKey && sortValue) {
                query.set(sortKey, sortValue);
            }
        }

        fetchProfiles(query.toString());
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProfiles = filteredProfiles.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const handlePageChange = (page: number) => {
        const isLoggedOut = !cookies.get("accessToken");
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
            <div className="w-screen pt-[120px] px-4 sm:px-12 bg-white lg:px-[200px]">
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />

                <div className="flex lg:gap-5 w-full flex-col lg:flex-row">
                    <ProfileListContainer
                        paginatedProfiles={paginatedProfiles}
                        totalItems={filteredProfiles.length}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                    {!isMobile && (
                        <div className="sticky top-[180px] self-start">
                            <ProfileFilter applyFilter={applyFilterFromMain} />
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Main;

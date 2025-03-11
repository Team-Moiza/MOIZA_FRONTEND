"use client";

import React, { useState, useEffect } from "react";
import { instance } from "../apis/instance";
import ProfileBox from "../components/portfolio-list/ProfileBox";
import CustomPagination from "../components/portfolio-list/Pagination";
import Filter from "../components/portfolio-list/Filter";
import { Footer } from "../components/layouts/Footer";
import { School, Job } from "../enum/enums";

interface ProfileType {
    id: number;
    name: string;
    school: keyof typeof School;
    job: keyof typeof Job;
    introduce: string;
    profile: string;
    likeCnt: string;
    codes?: { keyword: string }[];
}

const PortfolioList = () => {
    const [profiles, setProfiles] = useState<ProfileType[]>([]);
    const [filteredProfiles, setFilteredProfiles] = useState<ProfileType[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>("전체");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const categories = [
        "전체",
        Job.FRONTEND_DEVELOPER,
        Job.BACKEND_DEVELOPER,
        Job.ANDROID_DEVELOPER,
        Job.DEVOPS_DEVELOPER,
        Job.FULLSTACK_DEVELOPER,
        Job.GAME_DEVELOPER,
        Job.HW_EMBEDDED,
        Job.IOS_DEVELOPER,
        Job.SECURITY_SPECIALIST,
        Job.UI_UX_DESIGNER,
        Job.PLANNER,
        Job.OTHER,
    ];

    useEffect(() => {
        const getProfiles = async () => {
            try {
                const response = await instance.get("portfolios");
                const data = response.data.content || [];
                setProfiles(data);
                setFilteredProfiles(data);
                console.log(data);
            } catch (error) {
                setProfiles([]);
                setFilteredProfiles([]);
            } finally {
                setLoading(false);
            }
        };

        getProfiles();
    }, []);

    useEffect(() => {
        const filtered = profiles.filter(
            (profile) =>
                selectedCategory === "전체" ||
                Job[profile.job] === selectedCategory ||
                (selectedCategory === Job.OTHER &&
                    !Object.values(Job).includes(Job[profile.job]))
        );
        setFilteredProfiles(filtered);
    }, [selectedCategory, profiles]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProfiles = filteredProfiles.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    if (loading) return <div>로딩중...</div>;

    return (
        <>
            <div className="w-screen pt-[120px] px-[200px]">
                <div className="overflow-x-auto pb-4 flex gap-2 scrollbar-hide">
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
                        {paginatedProfiles.length > 0 ? (
                            paginatedProfiles.map((profile) => (
                                <ProfileBox
                                    id={profile.id.toString()}
                                    name={profile.name}
                                    job={Job[profile.job]}
                                    school={School[profile.school]}
                                    introduce={profile.introduce}
                                    likes={profile.likeCnt}
                                    company={""}
                                    codes={profile.codes || []}
                                />
                            ))
                        ) : (
                            <div className="w-full py-20 text-center text-gray-500">
                                아직 등록된 포트폴리오가 없습니다.
                            </div>
                        )}
                        <CustomPagination
                            totalItems={filteredProfiles.length}
                            itemsPerPage={itemsPerPage}
                            currentPage={currentPage}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                    <Filter />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PortfolioList;

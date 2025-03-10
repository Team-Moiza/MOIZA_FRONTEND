"use client";

import React, { useState, useEffect } from "react";
import { instance } from "../apis/instance";
import ProfileBox from "../components/portfolio-list/ProfileBox";
import CustomPagination from "../components/portfolio-list/Pagination";
import Filter from "../components/portfolio-list/Filter";
import { Footer } from "../components/layouts/Footer";

interface ProfileType {
    id: number;
    name: string;
    school: string;
    major: string;
    introduce: string;
    profile: string;
    likeCnt: string;
}

const PortfolioList = () => {
    const [profiles, setProfiles] = useState<ProfileType[]>([]);
    const [filteredProfiles, setFilteredProfiles] = useState<ProfileType[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const categories = [
        "전체",
        "프론트엔드 개발자",
        "백엔드 개발자",
        "UX/UI 디자이너",
        "기획자",
        "기타",
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
                console.error("에러 발생 :", error);
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
                profile.major === selectedCategory ||
                (selectedCategory === "기타" &&
                    !categories.includes(profile.major))
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
                <div className="flex gap-2 mb-[30px]">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setCurrentPage(1);
                            }}
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
                <div className="flex gap-5 w-[100%] justify-between">
                    <div className="flex flex-col gap-5 w-[92%]">
                        {paginatedProfiles.length > 0 ? (
                            paginatedProfiles.map((profile) => (
                                <ProfileBox
                                    id={profile.id.toString()}
                                    name={profile.name}
                                    job={profile.major}
                                    school={profile.school}
                                    introduce={profile.introduce}
                                    tags={[]}
                                    likes={profile.likeCnt}
                                    company={""}
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

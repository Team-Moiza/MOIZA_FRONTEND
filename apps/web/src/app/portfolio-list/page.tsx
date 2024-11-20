"use client";
import React, { useState } from "react";
import Filter from "../../components/portfolio-list/Filter";
import ProfileBox from "../../components/portfolio-list/ProfileBox";
import { NoProfileBox } from "@moija/ui";

const PortfolioList = () => {
    const categories = [
        "전체",
        "프론트엔드 개발자",
        "백엔드 개발자",
        "UX/UI 디자이너",
        "기획자",
    ];
    const [selectedCategory, setSelectedCategory] = useState("전체");

    const dummyData = [
        {
            name: "강민지",
            job: "프론트엔드 개발자",
            school: "부산소프트웨어마이스터고등학교 3기 출신",
            introduce:
                "안녕하세요! 코드의 효율을 중요시하는 주니어 프론트엔드 개발자 강민지입니다.",
            tags: ["Next.js", "React.js", "TypeScript", "styled-components"],
            likes: 26,
            company: "당근마켓 프론트엔드",
        },
        {
            name: "이승현",
            job: "백엔드 개발자",
            school: "서울소프트웨어마이스터고등학교 2기 출신",
            introduce:
                "안녕하세요! 코드의 효율을 중요시하는 주니어 프론트엔드 개발자 강민지입니다라고할줄알았지 백엔드 개발자입니다",
            tags: ["Node.js", "Express", "MongoDB", "Docker"],
            likes: 18,
            company: "카카오",
        },
        {
            name: "박지호",
            job: "기획자",
            school: "대구소프트웨어고등학교 1기 출신",
            introduce:
                "안녕하세요! 코드의 효율을 중요시하는 주니어 프론트엔드 개발자 강민지입니다.",
            tags: ["Python", "Pandas", "BigQuery", "Apache Spark"],
            likes: 12,
        },
        {
            name: "정수민",
            job: "UX/UI 디자이너",
            school: "한국디자인고등학교 2기 출신",
            tags: ["Figma", "Adobe XD", "Prototyping", "User Research"],
            introduce:
                "안녕하세요! 코드의 효율을 중요시하는 주니어 프론트엔드 개발자 강민지입니다.",
            likes: 20,
            company: "네이버",
        },
    ];

    const filteredProfiles = dummyData.filter(
        (profile) =>
            selectedCategory === "전체" || profile.job === selectedCategory
    );

    return (
        <div className="h-screen w-screen pt-[120px] mb-[200px] px-[200px]">
            <div className="flex gap-2 mb-[30px] ">
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
            <div className="flex gap-5 w-[100%] justify-between">
                <div className="flex flex-col gap-5 w-[92%]">
                    <NoProfileBox>
                            <div className="text-h5 text-white">
                                지금 바로 나의 포트폴리오를 작성하고,<br/>
                                다른 사람의 포트폴리오도 구경해보세요!
                            </div>
                            <button className="flex px-[26px] py-2 text-p2 bg-white text-primary-500 rounded-[10px]">
                                작성하기
                            </button>
                    </NoProfileBox>
                    {filteredProfiles.map((profile, index) => (
                        <ProfileBox
                            key={index}
                            name={profile.name}
                            job={profile.job}
                            school={profile.school}
                            introduce={profile.introduce}
                            tags={profile.tags}
                            likes={profile.likes}
                            company={profile.company}
                        />
                    ))}
                </div>
                <Filter />
            </div>
        </div>
    );
};

export default PortfolioList;

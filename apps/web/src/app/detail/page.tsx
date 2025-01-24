import { Footer } from "@moija/ui";
import React from "react";

const Detail = () => {
    return (
        <>
            <div className="w-screen pt-[80px] px-[200px]">
              <div className=" border-x border-gray-200">

                <div className="flex items-center gap-4 mb-8">
                    <img
                        src="/profile.jpg"
                        alt="프로필 이미지"
                        className="w-24 h-24 rounded-full"
                        />
                    <div>
                        <h1 className="text-2xl font-bold">김수아</h1>
                        <p className="text-gray-600">
                            대구소프트웨어마이스터고등학교
                        </p>
                        <p className="text-sm text-gray-500">
                            프론트엔드 개발자
                        </p>
                    </div>
                </div>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">자기소개</h2>
                    <p className="text-gray-700 leading-relaxed">
                        시스템을 개선하여 좋음을 높이는 데 관심이 있습니다. 최신
                        업무를 위해 사용하는 모든 웹이나 데이터는 JSON화하여
                        업데이트가 되며 사용하신 라이브러리를 개선하였습니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">기술 스택</h2>
                    <div className="flex flex-wrap gap-3">
                        {[
                          "TypeScript",
                          "HTML/CSS",
                          "JavaScript",
                          "Redux",
                          "MySQL",
                          "AWS",
                          "Express",
                          "Node.js",
                        ].map((skill) => (
                          <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                          >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">프로젝트</h2>
                    <div className="space-y-6">
                        <div className="border-b pb-4">
                            <h3 className="font-bold mb-2">
                                2024 네모사 프로젝트
                            </h3>
                            <p className="text-gray-600 text-sm">2024.04</p>
                        </div>
                        <div className="border-b pb-4">
                            <h3 className="font-bold mb-2">
                                컴슈 리뉴얼 메인 싸이트
                            </h3>
                            <p className="text-gray-600 text-sm">2024.03</p>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">수상 내역</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold">
                                App Modernization FKS Jam 1위
                            </h3>
                            <p className="text-gray-600 text-sm">2023.07</p>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">자격증</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold">정보처리기사</p>
                            <p className="text-gray-600 text-sm">2022.04</p>
                        </div>
                        <div>
                            <p className="font-bold">컴퓨터활용능력</p>
                            <p className="text-gray-600 text-sm">2021.10</p>
                        </div>
                    </div>
                </section>
            </div>
                        </div>
            <Footer />
        </>
    );
};

export default Detail;

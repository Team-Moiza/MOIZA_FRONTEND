"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import cookies from "js-cookie";
import NavBar from "../../../components/detail/NavBar";
import Section from "../../../components/detail/Section";
import Profile from "../../../components/detail/Profile";
import { Heart, LinkIcon, Stack } from "@moija/ui";
import { detailPortFolio } from "../../../apis";
import { FormData } from "../../../types/FormData";
import { likeApi } from "../../../apis/likeApi";
import NoPermission from "./Forbidden";
import { AxiosError } from "axios";

const Detail = () => {
    const { id } = useParams();

    const { data, error, isError } = useQuery({
        queryKey: ["detail", id],
        queryFn: async () => await detailPortFolio(id as string),
        retry: false,
    });

    const rData = data?.data as FormData;

    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    useEffect(() => {
        if (!id || !cookies.get("accessToken")) return;

        const fetchLikeStatus = async () => {
            const status = await likeApi.getLikeStatus(id as string);
            setLiked(status.isLiked);
            setLikesCount(status.likeCount ?? 0);
        };

        fetchLikeStatus();
    }, [id]);

    const handleLikeClick = async () => {
        if (!cookies.get("accessToken")) {
            alert("로그인이 필요한 서비스입니다.");
            window.location.href = "/login";
            return;
        }

        const newLikeState = !liked;
        setLiked(newLikeState);
        setLikesCount((prev) => (newLikeState ? prev + 1 : prev - 1));

        try {
            if (newLikeState) {
                await likeApi.addLike(id as string);
            } else {
                await likeApi.removeLike(id as string);
            }
        } catch (error) {
            console.error("좋아요 처리 에러:", error);
        }
    };

    return (
        <div className="relative">
            <div id="education" className="w-screen pt-[80px] px-[200px]">
                <button
                    onClick={handleLikeClick}
                    className="fixed bottom-10 right-60 translate-y-[-50%] size-[54px] flex items-center justify-center rounded-full shadow-[0px_2px_8px_0px_rgba(0,0,0,0.16)]"
                >
                    <Heart
                        size={24}
                        fill={liked ? "#e96221" : "none"}
                        stroke={liked ? "none" : "#5a5a5a"}
                    />
                </button>
                <div className="border-x border-gray-200">
                    <NavBar />
                    <div className="px-[68px] pt-[68px] pb-[200px]">
                        <Profile data={rData} />
                        <div className="flex flex-col gap-[64px]">
                            <Section id="introduction" title="자기소개">
                                <Stack gap={12}>
                                    <p className="text-gray-700 text-p3 *:leading-relaxed whitespace-pre-line">
                                        {rData?.introduction.introduce}
                                    </p>
                                    {rData?.introduction?.url && (
                                        <Link
                                            href={rData?.introduction.url}
                                            className="text-primary-500 text-p3"
                                        >
                                            {rData?.introduction.url}
                                        </Link>
                                    )}
                                </Stack>
                            </Section>

                            <Section id="skills" title="기술 스택">
                                <div className="flex flex-wrap gap-3">
                                    {rData?.codes?.length
                                        ? rData?.codes.map(
                                              ({ id, keyword }) => (
                                                  <span
                                                      key={id}
                                                      className="px-4 py-2 bg-white rounded-full text-black text-p5 border border-gray-200"
                                                  >
                                                      {keyword}
                                                  </span>
                                              )
                                          )
                                        : "기술스택 없음"}
                                </div>
                            </Section>

                            <Section id="projects" title="프로젝트">
                                {rData?.projects.map((project, index) => (
                                    <div key={index}>
                                        {index >= 1 && (
                                            <div className="border-b border-gray-100 my-8" />
                                        )}
                                        <div className="gap-3 flex flex-col">
                                            <div>
                                                <div className="text-h5 mb-1">
                                                    {project.title}
                                                </div>
                                                <div className="text-p5 text-gray-500">
                                                    {project.startDate.slice(
                                                        0,
                                                        7
                                                    )}{" "}
                                                    ~{" "}
                                                    {!project.status
                                                        ? "진행중"
                                                        : project.endDate.slice(
                                                              0,
                                                              7
                                                          )}
                                                </div>
                                            </div>
                                            <div className="text-p3 text-black *:leading-relaxed whitespace-pre-line">
                                                {project.description}
                                            </div>
                                            {project.link && (
                                                <Link
                                                    href={project.link}
                                                    className="text-primary-500 text-p3"
                                                >
                                                    {project.link}
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </Section>

                            <Section id="awards" title="수상 내역">
                                {rData?.awards.map((award, index) => (
                                    <div key={index}>
                                        {index >= 1 && (
                                            <div className="border-b border-gray-100 my-8" />
                                        )}
                                        <div className="text-h5 text-black">
                                            {award.name}
                                        </div>
                                        <div className="text-p5 text-gray-500 mb-4">
                                            {award.date.slice(0, 7)}
                                        </div>
                                        <div className="text-black text-p3 *:leading-relaxed whitespace-pre-line">
                                            {award.description}
                                        </div>
                                    </div>
                                ))}
                            </Section>

                            <Section id="certificates" title="자격증">
                                {rData?.qualifications.map((cert, index) => (
                                    <div
                                        key={index}
                                        className={
                                            index <
                                            rData?.qualifications.length - 1
                                                ? "pb-3 border-b-[1px]"
                                                : ""
                                        }
                                    >
                                        {index >= 2 && (
                                            <div className="border-b border-gray-100 my-8" />
                                        )}
                                        <div className="text-h5 text-black">
                                            {cert.name}
                                        <div className="text-p5 text-gray-500">
                                            {cert.date}
                                        </div>
                                        </div>
                                    </div>
                                ))}
                            </Section>

                            <Section id="links" title="링크">
                                <div className="flex flex-col gap-2">
                                    {rData?.links.map(({ url }, i) => (
                                        <div
                                            key={i}
                                            className="w-full px-5 py-3 rounded-lg border border-gray-200 cursor-pointer"
                                        >
                                            {url && (
                                                <span
                                                    className="text-black text-p5 flex items-center gap-3 underline"
                                                    onClick={() =>
                                                        window.open(url)
                                                    }
                                                >
                                                    <LinkIcon size={18} />
                                                    {url}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </Section>
                        </div>
                    </div>
                </div>
            </div>
            {isError && (error as AxiosError).response?.status === 404 && (
                <NoPermission />
            )}
        </div>
    );
};

export default Detail;

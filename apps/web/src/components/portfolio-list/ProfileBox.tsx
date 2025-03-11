import React, { useState, useEffect } from "react";
import { Heart } from "@moija/ui";
import { likeApi } from "../../app/api/likeApi";

type ProfileBoxProps = {
    id: string;
    name: string;
    job: string;
    school: string;
    introduce: string;
    codes?: { keyword: string }[];
    likes: string;
    company: string;
};

const ProfileBox = ({
    id,
    name,
    job,
    school,
    introduce,
    codes,
    likes,
    company,
}: ProfileBoxProps) => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    useEffect(() => {
        const checkLikeStatus = async () => {
            try {
                const status = await likeApi.getLikeStatus(id);
                setLiked(status.isLiked);
                setLikesCount(Number(likes));
            } catch (error) {
                setLiked(false);
                setLikesCount(Number(likes));
            }
        };

        if (localStorage.getItem("accessToken")) {
            checkLikeStatus();
        } else {
            setLiked(false);
            setLikesCount(Number(likes));
        }
    }, [id, likes]);

    const handleLikeClick = async () => {
        if (!localStorage.getItem("accessToken")) {
            alert("로그인이 필요한 서비스입니다.");
            window.location.href = "/login";
            return;
        }

        try {
            const newLikeState = !liked;
            if (newLikeState) {
                await likeApi.addLike(id);
            } else {
                await likeApi.removeLike(id);
            }
            setLiked(newLikeState);
            setLikesCount((prev) => (newLikeState ? prev + 1 : prev - 1));
        } catch (error) {
            console.error("좋아요 토글 실패:", error);
        }
    };

    return (
        <div className="min-w-[600px] w-[100%] h-45 px-[50px] py-[34px] bg-white rounded-[20px] border border-gray-200 justify-between items-center inline-flex">
            <div className="flex items-center gap-[30px]">
                <div className="w-16 h-16 rounded-xl bg-gray-300 "></div>
                <div className="flex-col w-[37vw]">
                    {company ? (
                        <div className="text-caption1 text-gray-500">
                            {company} / {school}
                        </div>
                    ) : (
                        <div className="text-caption1 text-gray-500">
                            {school}
                        </div>
                    )}
                    <div className="text-p2 text-black">
                        {job} · {name}
                    </div>
                    <div className="text-p4 text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis break-all">
                        {introduce}
                    </div>
                    <div className="flex mt-2 gap-2">
                        {codes?.map((code, index) => (
                            <div
                                key={index}
                                className="px-[9px] py-1 bg-gray-100 rounded-[8px] text-caption2 text-gray-500"
                            >
                                {code.keyword}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex gap-[5px] w-10 items-center justify-center text-gray-500">
                <Heart
                    onClick={handleLikeClick}
                    fill={liked ? "#e96221" : "none"}
                    stroke={liked ? "none" : "#5a5a5a"}
                />
                <div className="text-cation2 text-gray-500">
                    {likesCount ?? Number(likes)}
                </div>
            </div>
        </div>
    );
};

export default ProfileBox;

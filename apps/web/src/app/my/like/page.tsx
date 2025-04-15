"use client";

import { useState, useEffect } from "react";
import { likeApi } from "../../../apis/likeApi";
import ProfileBox from "../../../components/portfolio-list/ProfileBox";
import { Stack } from "@moija/ui";
import { Profile } from "../../../types/portfolio";

const LikedList = () => {
    const [likedProfiles, setLikedProfiles] = useState<Profile[]>([]);

    useEffect(() => {
        const fetchLikedProfiles = async () => {
            const likedPortfolios = await likeApi.getLikedPortfolios();
            setLikedProfiles(likedPortfolios);
        };

        fetchLikedProfiles();
    }, []);

    return (
        <div className="w-full h-fit pt-[24px] pb-28">
            <Stack gap={20}>
                <span className="text-p2">좋아요 목록</span>
                {likedProfiles.length > 0 ? (
                    <div className="w-full flex flex-wrap gap-3">
                        {likedProfiles.map((profile) => (
                            <ProfileBox key={profile.id} {...profile} />
                        ))}
                    </div>
                ) : (
                    <div className="text-gray-500 text-center py-10">
                        좋아요한 이력서가 없습니다.
                    </div>
                )}
            </Stack>
        </div>
    );
};

export default LikedList;
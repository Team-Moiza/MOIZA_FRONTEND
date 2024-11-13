import React from "react";
import { Heart } from "@moija/ui";

type ProfileBoxProps = {
    name: string;
    job: string;
    school: string;
    introduce: string;
    tags: string[];
    likes: number;
    company?: string | null;
};

const ProfileBox = ({
    name,
    job,
    school,
    introduce,
    tags,
    likes,
    company,
}: ProfileBoxProps) => {
    return (
        <div className="w-[100%] h-45 px-[50px] py-[34px] bg-white rounded-[20px] border border-gray-200 justify-between items-center inline-flex">
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
                        {tags.map((tag, index) => (
                            <div
                                key={index}
                                className="px-[9px] py-1 bg-gray-100 rounded-[8px] text-cation2 text-gray-500"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center text-gray-500">
                <div className="mr-1">
                    <Heart />
                </div>
                <div className="text-caption1 text-gray-500">{likes}</div>
            </div>
        </div>
    );
};

export default ProfileBox;

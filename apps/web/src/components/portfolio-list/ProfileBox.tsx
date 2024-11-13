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
    tags,
    likes,
    company,
}: ProfileBoxProps) => {
    return (
        <div className="px-[50px] py-[34px] bg-white rounded-[20px] border border-gray-200 justify-between items-center inline-flex">
            <div className="flex items-center gap-[30px]">
                <div className="w-16 h-16 rounded-xl bg-gray-300 "></div>
                <div className="flex-col ">
                {company && (
                    <div className="text-sm text-gray-500">{company}</div>
                )}
                <div className="text-p2 text-black">
                    {job} · {name}
                </div>
                <div className="text-caption1 text-gray-500">{school}</div>
                <div className="flex mt-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 mr-2 bg-gray-100 rounded text-sm text-gray-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
                </div>
            <div className="flex items-center text-gray-500">
                <span className="mr-1">
                    <Heart />
                </span>
                <span>{likes}</span>
            </div>
        </div>
    );
};

export default ProfileBox;

import React, { useState, useEffect } from "react";
import ProfileBox from "./ProfileBox";
import LogoutMessage from "./LogoutMessage";
import { ProfileListProps } from "../../types/portfolio";
import { user } from "../../apis/user";
import { NoProfileBox } from "@moija/ui";

const ProfileList = ({ paginatedProfiles }: ProfileListProps) => {
    const [userStatus, setUserStatus] = useState<
        | "NOT_LOGGED_IN"
        | "LOGGED_IN"
        | "PORTFOLIO_COMPLETED"
        | "PORTFOLIO_PUBLISHED"
    >("NOT_LOGGED_IN");

    useEffect(() => {
        const fetchUserStatus = async () => {
            const response = await user();
            setUserStatus(response.data.userStatus);
        };

        fetchUserStatus();
    }, []);

    return (
        <>
            <NoProfileBox>
                <div className="text-h5 text-white">
                    지금 바로 나의 포트폴리오를 작성하고,
                    <br />
                    다른 사람의 포트폴리오도 구경해보세요!
                </div>
                <button className="flex px-[26px] py-2 text-p2 bg-white text-primary-500 rounded-[10px]">
                    작성하기
                </button>
            </NoProfileBox>
            {paginatedProfiles.length > 0 ? (
                paginatedProfiles.map((profile) => (
                    <ProfileBox key={profile.id} {...profile} />
                ))
            ) : userStatus === "PORTFOLIO_PUBLISHED" ? (
                <div className="w-full py-20 text-center text-gray-500">
                    아직 등록된 포트폴리오가 없습니다.
                </div>
            ) : null}
            {userStatus !== "PORTFOLIO_PUBLISHED" && (
                <LogoutMessage userStatus={userStatus} />
            )}
        </>
    );
};

export default ProfileList;

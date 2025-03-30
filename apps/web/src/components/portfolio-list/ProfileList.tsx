import React, { useState, useEffect } from "react";
import ProfileBox from "./ProfileBox";
import LogoutMessage from "./LogoutMessage";
import { ProfileListProps } from "../../types/portfolio";
import { user } from "../../apis/user";
import NoWriteBanner from "./NoWriteBanner";
import cookies from "js-cookie";

const ProfileList = ({ paginatedProfiles }: ProfileListProps) => {
    const [userStatus, setUserStatus] = useState<
        | "NOT_LOGGED_IN"
        | "LOGGED_IN"
        | "PORTFOLIO_COMPLETED"
        | "PORTFOLIO_PUBLISHED"
    >("NOT_LOGGED_IN");

    useEffect(() => {
        const fetchUserStatus = async () => {
            const token = cookies.get("accessToken");
            if (!token) return;
            const response = await user();
            setUserStatus(response.data.userStatus);
        };

        fetchUserStatus();
    }, []);

    return (
        <>
            {userStatus !== "PORTFOLIO_PUBLISHED" && <NoWriteBanner />}

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

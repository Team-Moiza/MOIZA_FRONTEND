import React, { useState, useEffect } from "react";
import ProfileBox from "./ProfileBox";
import LogoutMessage from "./LogoutMessage";
import { ProfileListProps } from "../../types/portfolio";
import { School, Job } from "../../enum/enums";
import { instance } from "../../apis/instance";

const ProfileList = ({ paginatedProfiles }: ProfileListProps) => {
    const [userStatus, setUserStatus] = useState<
        | "NOT_LOGGED_IN"
        | "LOGGED_IN"
        | "PORTFOLIO_COMPLETED"
        | "PORTFOLIO_PUBLISHED"
    >("NOT_LOGGED_IN");

    useEffect(() => {
        const fetchUserStatus = async () => {
            const response = await instance.get("/users");
            setUserStatus(response.data.userStatus);
        };

        fetchUserStatus();
    }, []);

    return (
        <>
            {paginatedProfiles.length > 0 ? (
                paginatedProfiles.map((profile) => {
                    const schoolName =
                        School[
                            profile.school as unknown as keyof typeof School
                        ];
                    const jobName =
                        Job[profile.job as unknown as keyof typeof Job];

                    return (
                        <ProfileBox
                            key={profile.id}
                            id={profile.id.toString()}
                            name={profile.name}
                            job={jobName}
                            profileImg={profile.profileImg}
                            school={schoolName}
                            introduce={profile.introduce}
                            likeCnt={profile.likeCnt}
                            company={profile.company || ""}
                            codes={profile.codes || []}
                        />
                    );
                })
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

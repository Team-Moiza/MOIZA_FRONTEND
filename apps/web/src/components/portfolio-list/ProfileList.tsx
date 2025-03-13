import React from "react";
import ProfileBox from "./ProfileBox";
import LogoutMessage from "./LogoutMessage";
import { ProfileListProps } from "../../types/portfolio";
import { School, Job } from "../../enum/enums";

const ProfileList = ({ paginatedProfiles, isLoggedOut }: ProfileListProps) => (
    <>
        {paginatedProfiles.length > 0 ? (
            paginatedProfiles.map((profile) => {
                const schoolName =
                    School[profile.school as unknown as keyof typeof School];
                const jobName = Job[profile.job as unknown as keyof typeof Job];

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
        ) : (
            <div className="w-full py-20 text-center text-gray-500">
                아직 등록된 포트폴리오가 없습니다.
            </div>
        )}

        {isLoggedOut && <LogoutMessage />}
    </>
);

export default ProfileList;

import React from "react";
import ProfileBox from "./ProfileBox";
import LogoutMessage from "./LogoutMessage";
import { ProfileListProps } from "../../types/portfolio";
import { School, Job } from "../../enum/enums"

const ProfileList = ({ paginatedProfiles, isLoggedOut }: ProfileListProps) => (
    <>
                        {paginatedProfiles.length > 0 ? (
                            paginatedProfiles.map((profile) => (
                                <ProfileBox
                                    id={profile.id.toString()}
                                    name={profile.name}
                                    job={Job[profile.job]}
                                    school={School[profile.school]}
                                    introduce={profile.introduce}
                                    likes={profile.likeCnt}
                                    company={profile.company || ""}
                                    codes={profile.codes || []}
                                />
                            ))
                        ) : (
                            <div className="w-full py-20 text-center text-gray-500">
                                아직 등록된 포트폴리오가 없습니다.
                            </div>
                        )}

        {isLoggedOut && <LogoutMessage />}
    </>
);

export default ProfileList;

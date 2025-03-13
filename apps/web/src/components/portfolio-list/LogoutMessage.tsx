import { Button } from "@moija/ui";
import React from "react";
import ProfileBox from "./ProfileBox";
import dummyProfiles from "../../data/profileList";

const LogoutMessage = () => {
    return (
        <div className="relative -z-10 h-full min-w-[600px]">
            <div className="flex flex-col gap-5">
            {dummyProfiles.map((profile) => (
                <ProfileBox
                key={profile.id}
                id={profile.id.toString()}
                name={profile.name}
                job={profile.job}
                profileImg={profile.profileImg}
                school={profile.school}
                introduce={profile.introduce}
                codes={profile.codes}
                likeCnt={profile.likeCnt}
                company={profile.company || ""}
                />
            ))}
            </div>
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0.88) 16%, rgba(255, 255, 255, 0.96) 49%, #FFF 100%)",
                    backdropFilter: "blur(2px)",
                    zIndex: 1,
                }}
            ></div>
            <div className="w-full top-[120px] absolute flex flex-col items-center justify-center gap-[30px] z-10">
                <div className="text-black text-p2">
                    로그인하시면 더 많은 이력서를 확인할 수 있습니다!
                </div>
                <Button width={244}>로그인 하기</Button>
            </div>
        </div>
    );
};

export default LogoutMessage;

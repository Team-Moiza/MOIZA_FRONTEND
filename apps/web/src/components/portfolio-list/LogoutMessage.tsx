import { Button } from "@moija/ui";
import React from "react";
import ProfileBox from "./ProfileBox";
import dummyProfiles from "../../data/profileList";
import { useRouter } from "next/navigation";
interface LogoutMessageProps {
    id?: string;
    userStatus:
        | "NOT_LOGGED_IN"
        | "LOGGED_IN"
        | "PORTFOLIO_COMPLETED"
        | "PORTFOLIO_PUBLISHED";
}

const LogoutMessage = ({ userStatus, id }: LogoutMessageProps) => {
    const router = useRouter();

    const getMessage = () => {
        switch (userStatus) {
            case "NOT_LOGGED_IN":
                return "로그인하시면 더 많은 이력서를 확인할 수 있습니다!";
            case "LOGGED_IN":
                return "이력서를 작성하시면 더 많은 이력서를 열람할 수 있습니다!";
            case "PORTFOLIO_COMPLETED":
                return "이력서를 공개하시면 모든 이력서를 열람할 수 있습니다!";
            case "PORTFOLIO_PUBLISHED":
                return "이력서가 공개되었습니다.";
            default:
                return "";
        }
    };

    const getButtonText = () => {
        switch (userStatus) {
            case "NOT_LOGGED_IN":
                return "로그인하러 가기";
            case "LOGGED_IN":
                return "이력서 작성하기";
            case "PORTFOLIO_COMPLETED":
                return "이력서 공개하기";
            case "PORTFOLIO_PUBLISHED":
                return "이력서가 공개되었습니다.";
            default:
                return "";
        }
    };

    const handleButtonClick = () => {
        switch (userStatus) {
            case "NOT_LOGGED_IN":
                router.push("/login");
                break;
            case "LOGGED_IN":
                router.push(`/write/${id}`);
                break;
            case "PORTFOLIO_COMPLETED":
                router.push("/my");
                break;
            default:
                break;
        }
    };

    return (
        <div className="relative z-0 h-full min-w-[600px] pb-5">
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
                    backdropFilter: "blur(1px)",
                    zIndex: 1,
                }}
            ></div>
            <div className="w-full top-[120px] absolute flex flex-col items-center justify-center gap-[30px] z-10">
                <div className="text-black text-p2">{getMessage()}</div>
                <Button width={244} onClick={handleButtonClick}>
                    {getButtonText()}
                </Button>
            </div>
        </div>
    );
};

export default LogoutMessage;

import { Stack, Add } from "@moija/ui";
import { Resume } from "./Resume";
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addPortfolio, myPortFolio } from "../../apis";
import { toast } from "react-toastify";
import { user } from "../../apis/user";
import { FormType } from "./edit/page";
import {
    School as school,
    Job as job,
    Major as major,
    EducationStatus as educationstat,
} from "../../enum/enums";

import { Dispatch, SetStateAction } from "react";
import { Info } from "./Info";

interface ProfilePageProps {
    setType: Dispatch<
        SetStateAction<`removeResume_${string}` | "removeAccount" | null>
    >;
}

export const ProfilePage = ({ setType }: ProfilePageProps) => {
    const { data: userData } = useQuery<FormType>({
        queryKey: ["user"],
        queryFn: async () => (await user()).data,
    });

    const { data, refetch } = useQuery({
        queryKey: ["my", "portfolio"],
        queryFn: myPortFolio,
    });

    const { mutate } = useMutation({
        mutationFn: addPortfolio,
        onSuccess: () => {
            toast.success("이력서를 성공적으로 생성하였습니다!");
            refetch();
        },
    });

    return (
        <div className="w-full mt-10 flex flex-col h-fit gap-[25px]">
            <div className="w-full h-fit px-[36px] py-[24px] border-[1px] rounded-xl border-gray-200">
                <Stack gap={20}>
                    <span className="text-p2">내 프로필</span>
                    <div className="w-full flex gap-3 flex-wrap">
                        {data?.data?.map((i: any) => (
                            <Resume
                                key={i.id}
                                title={i.title}
                                date={i.updatedAt
                                    .split("T")[0]
                                    .replace("-", ".")}
                                id={i.id}
                                checked={i.isPublished}
                                setType={setType}
                            />
                        ))}

                        <button
                            className="w-[246.5px] h-[127.2px] p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center gap-2"
                            type="button"
                            onClick={() => mutate()}
                        >
                            <Add />
                            <span className="text-caption1 text-gray-500">
                                새 이력서를 작성해보세요!
                            </span>
                        </button>
                    </div>
                </Stack>
            </div>

            <div className="w-full h-fit px-[36px] py-[24px] border-[1px] rounded-xl border-gray-200 mb-[100px]">
                <Stack gap={20}>
                    <div className="flex justify-between items-center">
                        <span className="text-p2">기본 정보</span>
                        <Link href="/my/edit" className="text-p4 text-gray-400">
                            수정
                        </Link>
                    </div>
                    <Info name="이름" value={userData?.nickname} />
                    <Info name="이메일" value={userData?.email} />
                    <Info
                        name="학교"
                        value={school[userData?.school as keyof typeof school]}
                    >
                        <span className="text-gray-400 text-p5">
                            {major[userData?.major as keyof typeof major]}
                        </span>
                    </Info>
                    <Info
                        name="재학 상태"
                        value={
                            userData?.enrollmentStartDate
                                ? `${userData?.enrollmentStartDate} ~ ${userData?.enrollmentStartDate}`
                                : "값을 입력하세요"
                        }
                    >
                        <span className="text-gray-400 text-p5">
                            {
                                educationstat[
                                    userData?.educationStatus as keyof typeof educationstat
                                ]
                            }
                        </span>
                    </Info>

                    <Info
                        name="개발 직무"
                        value={job[userData?.job as keyof typeof job]}
                    />
                    <Info name="회사" value={userData?.company} />
                </Stack>
            </div>
        </div>
    );
};

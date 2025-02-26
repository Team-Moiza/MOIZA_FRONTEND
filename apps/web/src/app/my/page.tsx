"use client";

import { Add, Center, Stack } from "@moija/ui";
import { Resume } from "./Resume";
import Link from "next/link";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addPortfolio, deletePortFolio, myPortFolio } from "../../apis";
import { toast } from "react-toastify";
import { useState } from "react";
import { user } from "../../apis/user";
import { educationstat, FormType, job, major, school } from "./edit/page";
import { Info } from "./Info";

export default function Page() {
  const { data: userData } = useQuery<FormType>({ queryKey: ["user"], queryFn: async () => (await user()).data });
  const { data, refetch } = useQuery({ queryKey: ["my", "portfolio"], queryFn: myPortFolio });
  const [type, setType] = useState<null | `removeResume_${string}` | "removeAccount">(null);

  const { mutate } = useMutation({
    mutationFn: addPortfolio,
    onSuccess: () => {
      toast.success("이력서를 성공적으로 생성하였습니다!");
      refetch();
    },
  });

  const { mutate: remove } = useMutation({
    mutationFn: deletePortFolio,
    onSuccess: () => {
      toast.success("이력서를 성공적으로 제거하였습니다!");
      refetch();
    },
  });

  return (
    <>
      {type && (
        <div className="absolute z-10 top-0 w-full h-screen bg-[#000000DD] flex justify-center items-center">
          <div className="w-[478px] h-[330px] py-[52px] items-center justify-center bg-white rounded-2xl flex-col flex z-20 gap-[60px]">
            <div className="flex flex-col gap-4 items-center">
              <span className="text-h4">{type === "removeAccount" ? "정말 탈퇴하시겠어요?" : "이력서를 삭제하시겠습니까?"}</span>
              <span className="text-p3 text-gray-500">{type === "removeAccount" ? "탈퇴 시 계정 정보 및 이용 기록이 삭제됩니다" : "이력서의 내용이 모두 삭제됩니다"}</span>
            </div>
            <div className="flex gap-3 items-center">
              <button className="text-gray-500 bg-gray-100 rounded-lg w-[128px] h-[44px] py-2 text-p2" onClick={() => setType(null)}>
                닫기
              </button>
              <button
                className="text-red-400 bg-red-100 rounded-lg w-[128px] h-[44px] py-2 text-p2"
                onClick={() => {
                  if (type !== "removeAccount") {
                    remove(type.split("_")[1] as string);
                  }
                  setType(null);
                }}
              >
                {type === "removeAccount" ? "회원탈퇴" : "삭제"}
              </button>
            </div>
          </div>
        </div>
      )}
      <Center>
        <div className="pt-[80px] w-[1040px] h-screen flex gap-[10px] mb-[250px]">
          <nav className="w-[216px] py-[110px] px-[24px] h-full ">
            <Stack gap={20}>
              <span className="text-p2 text-black">프로필</span>
              <span className="text-p2 text-black">좋아요 목록</span>
              <div className="w-full h-[1px] bg-gray-200" />
              <span className="text-p2 text-gray-400">로그아웃</span>
              <span className="text-p2 text-sub-red" onClick={() => setType("removeAccount")}>
                회원탈퇴
              </span>
            </Stack>
          </nav>
          <div className="w-full mt-10 flex flex-col h-fit gap-[25px]">
            <div className="w-full h-fit px-[36px] py-[24px] border-[1px] rounded-xl border-gray-200">
              <Stack gap={20}>
                <span className="text-p2">내 프로필</span>
                <div className="w-full flex gap-3 flex-wrap">
                  {data?.data.map((i: any) => <Resume key={i.id} title={i.title} date={i.updatedAt.split("T")[0].replace("-", ".")} id={i.id} checked={i.isPublished} setType={setType} />)}

                  <button className="w-[246.5px] h-[127.2px] p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center gap-2" type="button" onClick={() => mutate()}>
                    <Add />
                    <span className="text-caption2">새 이력서를 작성해보세요!</span>
                  </button>
                </div>
              </Stack>
            </div>
            <div className="w-full h-fit px-[36px] py-[24px] border-[1px] rounded-xl border-gray-200">
              <Stack gap={20}>
                <div className="flex justify-between items-center">
                  <span className="text-p2">기본 정보</span>
                  <Link href="/my/edit" className="text-p4 text-gray-400">
                    수정
                  </Link>
                </div>
                <Info name="이름" value={userData?.nickname} />
                <Info name="이메일" value={userData?.email} />
                <Info name="학교" value={school[userData?.school as keyof typeof school]}>
                  <span className="text-gray-400 text-p5">{major[userData?.major as keyof typeof major]}</span>
                </Info>
                <Info name="재학 상태" value={`${userData?.enrollmentStartDate} ~ ${userData?.enrollmentStartDate}`}>
                  <span className="text-gray-400 text-p5">{educationstat[userData?.educationStatus as keyof typeof educationstat]}</span>
                </Info>
                <Info name="개발 직무" value={job[userData?.job as keyof typeof job]} />
                <Info name="이메일" value={userData?.company} />
              </Stack>
            </div>
          </div>
        </div>
      </Center>
    </>
  );
}

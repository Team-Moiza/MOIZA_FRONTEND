"use client";

import { Add, Center, Stack } from "@moija/ui";
import { Resume } from "./Resume";
import { useBoolean, useOutsideClickRef } from "@moija/hooks";
import { Info } from "./Info";
import { Modal } from "./Modal";

const data = {
  email: "test@test.test",
  school: {
    name: "대덕소프트웨어마이스터고등학교",
    attending: true,
    grade: "소프트웨어개발과",
  },
  company: undefined,
};

export default function Page() {
  const { boolean: modalVisible, toggle: toggleModal, setFalse: closeModal } = useBoolean(false);

  return (
    <>
      {modalVisible && (
        <div className="absolute z-50 w-full h-screen bg-[#00000090]">
          <Center>
            <Modal closeModal={closeModal} />
          </Center>
        </div>
      )}
      <Center>
        <div className="pt-[80px] w-[1040px] h-screen flex gap-[30ox]">
          <nav className="w-[216px] py-[110px] px-[24px] h-full ">
            <Stack gap={20}>
                <div className="text-p4 text-black">프로필</div>
                <div className="text-p4 text-black">좋아요 목록</div>
              <div className="w-full h-[1px] bg-gray-200" />
              <span className="text-p4 text-gray-400">로그아웃</span>
              <span className="text-p4 text-sub-red">회원탈퇴</span>
            </Stack>
          </nav>
          <div className="w-full mt-10 flex flex-col gap-[25px]">
            <div className="w-full h-fit px-[36px] py-[24px] border-[1px] rounded-xl border-gray-200">
              <Stack gap={20}>
                <span className="text-p2">내 프로필</span>
                <div className="w-full flex gap-5 flex-wrap">
                  <Resume title="이력서1_20241213" date="2024.12.13" id="122" />
                  <button className="w-[246.5px] h-[127.2px] p-4 bg-gray-100 rounded-lg flex flex-col items-center justify-center gap-2" type="button">
                    <Add />
                    <span className="text-caption2">새 이력서를 작성해보세요!</span>
                  </button>
                </div>
              </Stack>
            </div>
            <div className="w-full h-fit px-[36px] py-[24px] border-[1px] rounded-xl border-gray-200">
              <Stack gap={20}>
                <div className="flex items-center gap-6">
                  <span className="text-p2">기본 정보</span>
                  <button className="h-[36px] px-6 border-[1px] rounded-lg border-gray-200 bg-white text-btn1" onClick={toggleModal}>
                    수정
                  </button>
                </div>
                <Info name="이메일" value={data.email} />
                <Info name="학교" value={data.school.name} required>
                  <div className="flex items-center gap-[6px]">
                    <span className="text-gray-500 text-p5">{data.school.grade}</span>
                    <span className="text-gray-500 text-p5">{data.school.attending ? "재학중" : "졸업"}</span>
                  </div>
                </Info>
                <Info name="회사" value={data.company ? data.company : "회사를 설정해주세요"} />
              </Stack>
            </div>
          </div>
        </div>
      </Center>
    </>
  );
}

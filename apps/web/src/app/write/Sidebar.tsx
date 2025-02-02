import { Stack, Spacing, Text, Flex, Profile } from "@moija/ui";

const asterisk = " after:ml-1 after:content-['*'] after:text-[#FF3B30] after:font-bold after:text-[16px]";
const textStyle = "text-caption1 text-black";

export const Sidebar = () => {
  return (
    <div className="bg-white rounded-[8px] sticky top-[116px] z-sidebar w-[184px] h-fit px-[12px] pt-[28px] pb-[8px]">
      <Stack gap={10}>
        <Stack gap={8}>
          <Spacing>
            <Text className="text-btn text-black">프로필 완성도</Text>
            <Text className="text-btn text-black">0%</Text>
          </Spacing>
          <div className="w-full h-[7px] rounded-[10px] bg-gray-200"></div>
        </Stack>
        <div className="border-y-[1px] border-gray-100 h-[40px] flex items-center px-[8px]">
          <Flex gap={8} align="center">
            <Profile size={14} color="#787878" />
            <Text className={textStyle + asterisk}>기본 정보</Text>
          </Flex>
        </div>
        <div className="p-2">
          <Stack gap={16}>
            <Text className={textStyle}>자기소개</Text>
            <Text className={textStyle}>기술 스택</Text>
            <Text className={textStyle}>프로젝트</Text>
            <Text className={textStyle}>수상내역</Text>
            <Text className={textStyle}>자격증</Text>
            <Text className={textStyle}>링크</Text>
          </Stack>
        </div>
      </Stack>
    </div>
  );
};

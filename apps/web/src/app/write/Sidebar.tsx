import { Stack, Spacing, Text, Flex, Profile, Asterisk } from '@moija/ui';

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
            <Flex gap={4} align="center">
              <Text className="text-caption1 text-black">기본 정보</Text>
              <Asterisk size={10} color={'#FF3B30'} />
            </Flex>
          </Flex>
        </div>
        <Stack>
          <div className="h-[35px] flex items-center px-[8px]">
            <Flex gap={4} align="center">
              <Text className="text-caption1 text-black">학력</Text>
              <Asterisk size={10} color={'#FF3B30'} />
            </Flex>
          </div>
          <div className="h-[35px] flex items-center px-[8px]">
            <Flex gap={4} align="center">
              <Text className="text-caption1 text-black">자기소개</Text>
            </Flex>
          </div>
          <div className="h-[35px] flex items-center px-[8px]">
            <Flex gap={4} align="center">
              <Text className="text-caption1 text-black">기술 스택</Text>
            </Flex>
          </div>
          <div className="h-[35px] flex items-center px-[8px]">
            <Flex gap={4} align="center">
              <Text className="text-caption1 text-black">프로젝트</Text>
            </Flex>
          </div>
          <div className="h-[35px] flex items-center px-[8px]">
            <Flex gap={4} align="center">
              <Text className="text-caption1 text-black">수상내역</Text>
            </Flex>
          </div>
          <div className="h-[35px] flex items-center px-[8px]">
            <Flex gap={4} align="center">
              <Text className="text-caption1 text-black">자격증</Text>
            </Flex>
          </div>
          <div className="h-[35px] flex items-center px-[8px]">
            <Flex gap={4} align="center">
              <Text className="text-caption1 text-black">링크</Text>
            </Flex>
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

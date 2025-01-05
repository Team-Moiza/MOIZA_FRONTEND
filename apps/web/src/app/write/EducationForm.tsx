import { Dropdown, Input, InputTemplate, Label, Select, Text } from "@moija/ui";

export const EducationForm = () => {
  return (
    <div className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className="text-h2 text-black after:content-['_*'] after:text-sub-red after:text-[20px]">
        학력
      </Text>
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex gap-[18px]">
          <InputTemplate>
            <Label>종류</Label>
            <Dropdown
              isOpen={false}
              items={["중학교", "고등학교", "대학교"]}
              onSelect={() => {
                alert();
              }}
            >
              <Select
                width={247}
                placeholder="직무를 선택해주세요"
                isOpen={false}
                onClick={() => {}}
              />
            </Dropdown>
          </InputTemplate>
          <InputTemplate>
            <Label>소속/기관</Label>
            <Input width={247} placeholder="재학중인 학교" />
          </InputTemplate>
          <InputTemplate>
            <Label>전공명</Label>
            <Input width={247} placeholder="전공" />
          </InputTemplate>
        </div>
        <div className="w-full flex gap-[18px]">
          <InputTemplate>
            <Label>재학 상태</Label>
            <Dropdown
              isOpen={false}
              items={["졸업", "재학중"]}
              onSelect={() => {
                alert();
              }}
            >
              <Select
                width={247}
                placeholder="직무를 선택해주세요"
                isOpen={false}
                onClick={() => {}}
              />
            </Dropdown>
          </InputTemplate>
          <InputTemplate>
            <Label>재직 기간</Label>
            <Input width={512} placeholder="YYYY.MM - YYYY.MM" />
          </InputTemplate>
        </div>
      </div>
    </div>
  );
};

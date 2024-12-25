import { Input, InputTemplate, Label, Search, Text, Textarea } from "@moija/ui";

export const SkillsetForm = () => {
  return (
    <div className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className="text-h2 text-black">기술 스택</Text>
      <InputTemplate>
        <Input
          icon={<Search size={20} color="#787878" />}
          width={776}
          placeholder="기술 스택을 등록하세요"
        />
      </InputTemplate>
    </div>
  );
};

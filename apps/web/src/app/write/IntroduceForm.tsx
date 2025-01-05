import { Input, InputTemplate, Label, Text, Textarea } from "@moija/ui";

export const IntroduceForm = () => {
  return (
    <div className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className="text-h2 text-black">자기소개</Text>
      <div className="w-full flex flex-col gap-8">
        <InputTemplate>
          <Label>한줄 소개</Label>
          <Textarea
            width={776}
            height={176}
            maxLength={1200}
            isBig
            placeholder="나를 소개하는 글을 써주세요"
          />
          <Text className="text-caption1 text-gray-400">1200자 이내</Text>
        </InputTemplate>
        <InputTemplate>
          <Label>자기소개서 URL</Label>
          <Input width={776} placeholder="http://, https://" />
        </InputTemplate>
      </div>
    </div>
  );
};

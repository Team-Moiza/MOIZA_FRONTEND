import { Input, InputTemplate, Label, Text, Textarea } from "@moija/ui";
import { useFormContext } from "react-hook-form";
import { FormData } from "./page";

export const IntroduceForm = () => {
  const formMethod = useFormContext<FormData>();

  return (
    <div className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className="text-h2 text-black">자기소개</Text>
      <div className="w-full flex flex-col gap-8">
        <InputTemplate>
          <Label>자기 소개</Label>
          <Textarea
            width={776}
            height={176}
            maxLength={1200}
            isBig
            placeholder="나를 소개하는 글을 써주세요"
            defaultValue={formMethod.getValues("introduction.introduce")}
            {...formMethod.register("introduction.introduce")}
          />
        </InputTemplate>
        <InputTemplate>
          <Label>자기소개서 URL</Label>
          <Input
            width={776}
            placeholder="http://, https://"
            title="'https://url.com' 과 같은 형식이어야 합니다."
            pattern="https?:\/\/[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
            defaultValue={formMethod.getValues("introduction.url")}
            {...formMethod.register("introduction.url")}
          />
        </InputTemplate>
      </div>
    </div>
  );
};

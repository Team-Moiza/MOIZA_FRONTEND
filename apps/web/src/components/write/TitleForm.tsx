import { Input, InputTemplate, Label, Text } from "@moija/ui";
import { useFormContext } from "react-hook-form";
import { FormData } from "../../types/FormData";

export const TitleForm = () => {
  const formMethod = useFormContext<FormData>();
  const asterisk =
  " after:ml-1 after:content-['*'] after:text-[#FF3B30] after:font-bold after:text-[16px]";

  return (
    <div id="title" className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className={`text-h2 text-black ${asterisk}`}>제목</Text>
      <div className="w-full flex flex-col gap-8">
        <InputTemplate>
          <Label>제목</Label>
          <Input width={776} placeholder="이력서 제목을 입력하세요" {...formMethod.register("title")} />
        </InputTemplate>
      </div>
    </div>
  );
};

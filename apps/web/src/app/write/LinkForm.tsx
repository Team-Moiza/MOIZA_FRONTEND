import { Input, InputTemplate, Label, LinkIcon, Plus, Search, Text, Textarea } from "@moija/ui";

export const LinkForm = () => {
  return (
    <div className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className="text-h2 text-black">기술 스택</Text>
      <InputTemplate>
        <div className="flex gap-4 items-center w-[776px] rounded-[8px] px-[20px] py-[11px] border-[1px] border-gray-200 h-fit">
          <LinkIcon size={18} />
          <div className="flex flex-col">
            <input className="text-[16px] placeholder:text-gray-400" placeholder="링크 제목" />
            <input
              className="text-[16px] placeholder:text-gray-400"
              placeholder="http://, https://"
            />
          </div>
        </div>
      </InputTemplate>
      <button className="flex items-center gap-2 cursor-pointer">
        <div className="rounded-full bg-primary-500 flex items-center justify-center w-[26px] h-[26px]">
          <Plus color="#FFFFFF" size={16} />
        </div>
        <span className="text-p5 text-black">링크 추가</span>
      </button>
    </div>
  );
};

import { InputTemplate, LinkIcon, Plus, Text } from "@moija/ui";
import { FormData } from "./page";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Close } from "@moija/ui/src/assets/Close";

export const LinkForm = () => {
  const { control, register } = useFormContext<FormData>();
  const { fields, append, remove } = useFieldArray({ control, name: "links" });

  return (
    <div className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className="text-h2 text-black">링크</Text>
      {fields.map((fields, index) => (
        <InputTemplate key={fields.id}>
          <div className="flex justify-between items-center w-[776px] gap-2 rounded-[8px] px-[20px] py-[11px] border-[1px] border-gray-200 h-fit">
            <div className="flex gap-4 items-center w-full">
              <LinkIcon size={18} />
              <div className="flex flex-col w-full">
                <input className="text-[16px] placeholder:text-gray-400 w-full outline-none" placeholder="http://, https://" title="'https://url.com' 과 같은 형식이어야 합니다." pattern="https?:\/\/[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}" defaultValue={fields.url} {...register(`links.${index}.url`)} />
              </div>
            </div>
            <button onClick={() => remove(index)} type="button">
              <Close />
            </button>
          </div>
        </InputTemplate>
      ))}

      <button className="flex items-center gap-2 cursor-pointer" onClick={() => append({ url: "" })} type="button">
        <div className="rounded-full bg-primary-500 flex items-center justify-center w-[26px] h-[26px]">
          <Plus color="#FFFFFF" size={16} />
        </div>
        <span className="text-p5 text-black">링크 추가</span>
      </button>
    </div>
  );
};

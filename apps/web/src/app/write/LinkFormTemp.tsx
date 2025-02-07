import { InputTemplate, LinkIcon } from "@moija/ui";
import { Close } from "@moija/ui/src/assets/Close";
import { FieldArrayWithId, useFieldArray, useFormContext } from "react-hook-form";
import { FormData } from "./page";

interface IProp {
  field: FieldArrayWithId<FormData, "links", "id">;
  index: number;
}

export const LinkFormTemp = ({ field, index }: IProp) => {
  const { register, control } = useFormContext<FormData>();
  const { remove } = useFieldArray({ control, name: "links" });
  return (
    <InputTemplate key={field.id}>
      <div className="flex justify-between items-center w-[776px] gap-2 rounded-[8px] px-[20px] py-[11px] border-[1px] border-gray-200 h-fit">
        <div className="flex gap-4 items-center w-full">
          <LinkIcon size={18} />
          <div className="flex flex-col w-full">
            <input className="text-[16px] placeholder:text-gray-400 w-full outline-none" placeholder="링크 제목" {...register(`links.${index}.title`)} defaultValue={field.title} />
            <input className="text-[16px] placeholder:text-gray-400 w-full outline-none" placeholder="http://, https://" title="'https://url.com' 과 같은 형식이어야 합니다." pattern="https?:\/\/[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}" defaultValue={field.url} {...register(`links.${index}.url`)} />
          </div>
        </div>
        <button onClick={() => remove(index)} type="button">
          <Close />
        </button>
      </div>
    </InputTemplate>
  );
};

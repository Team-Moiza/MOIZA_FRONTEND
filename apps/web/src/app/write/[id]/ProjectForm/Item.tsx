import { ArrowDown, Delete, Input, InputTemplate, Label, List, Plus, Search, Select, Textarea } from "@moija/ui";
import { FieldArrayWithId, UseFieldArrayReturn, useFormContext } from "react-hook-form";
import { FormData } from "../page";

interface IProp {
  field: FieldArrayWithId<FormData, "projects", "id">;
  method: UseFieldArrayReturn<FormData, "projects", "id">;
  index: number;
}

export const Item = ({ field, method, index }: IProp) => {
  const { register } = useFormContext<FormData>();
  const { fields, swap, remove } = method;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-between w-full">
        <input className="text-h4 text-black placeholder:text-gray-400 w-full outline-none" placeholder="프로젝트명" defaultValue={field.title} {...register(`projects.${index}.title`, { required: `${index}번 프로젝트 제목` })} />
        <div className="border-[1px] w-fit flex rounded-[4px]">
          <button className="w-[32px] h-[32px] flex items-center justify-center border-r-[1px]" type="button" onClick={() => index < fields.length - 1 && swap(index, index + 1)}>
            <ArrowDown size={24} color={index < fields.length - 1 ? "#787878" : "#BFBFBF"} />
          </button>
          <button className="w-[32px] h-[32px] flex items-center justify-center rotate-180 border-l-[1px]" type="button" onClick={() => index > 0 && swap(index, index - 1)}>
            <ArrowDown size={24} color={index > 0 ? "#787878" : "#BFBFBF"} />
          </button>
          <button className="w-[32px] h-[32px] flex items-center justify-center" type="button" onClick={() => remove(index)}>
            <Delete size={18} color="#787878" />
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-between">
          <InputTemplate>
            <Label accent>진행 여부</Label>

            <input type="checkbox" defaultChecked={field.status} {...register(`projects.${index}.status`)} />
          </InputTemplate>
          <InputTemplate>
            <Label accent>시작일</Label>
            <Input
              type="date"
              width={330}
              placeholder="YYYY.MM - YYYY.MM"
              pattern="\d{4}\.(0[1-9]|1[0-2]) ~ ?(\d{4}\.(0[1-9]|1[0-2]))?"
              title="'YYYY.MM ~ ' 또는 'YYYY.MM ~ YYYY.MM' 과 같은 형식이어야 합니다."
              {...register(`projects.${index}.startDate`, { required: `${index}번 프로젝트 시작일` })}
            />
          </InputTemplate>
          <InputTemplate>
            <Label accent>종료일</Label>
            <Input type="date" width={330} placeholder="YYYY.MM - YYYY.MM" pattern="\d{4}\.(0[1-9]|1[0-2]) ~ ?(\d{4}\.(0[1-9]|1[0-2]))?" title="'YYYY.MM ~ ' 또는 'YYYY.MM ~ YYYY.MM' 과 같은 형식이어야 합니다." {...register(`projects.${index}.endDate`, { required: `${index}번 프로젝트 종료일` })} />
          </InputTemplate>
        </div>
        <InputTemplate>
          <Label>프로젝트 설명</Label>
          <Textarea width={776} height={176} maxLength={1200} placeholder="자세한 설명을 작성해주세요" {...register(`projects.${index}.description`)} />
        </InputTemplate>
        <InputTemplate>
          <Label>추가 링크</Label>
          <Input width={776} placeholder="http://, https://" title="'https://url.com' 과 같은 형식이어야 합니다." pattern="https?:\/\/[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}" {...register(`projects.${index}.link`)} />
        </InputTemplate>
      </div>
    </div>
  );
};

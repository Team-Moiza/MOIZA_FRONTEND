import { ArrowDown, Delete, Input, InputTemplate, Label, List, Plus, Search, Select, Textarea } from "@moija/ui";
import { Controller, FieldArrayWithId, UseFieldArrayReturn, useFormContext } from "react-hook-form";
import { FormData } from "../../../types/FormData";

interface IProp {
  field: FieldArrayWithId<FormData, "projects", "id">;
  method: UseFieldArrayReturn<FormData, "projects", "id">;
  index: number;
}

export const Item = ({ field, method, index }: IProp) => {
  const { register, watch, control } = useFormContext<FormData>();
  const { fields, swap, remove } = method;

  return (
    <div className="w-full flex flex-col gap-4 py-2">
      <div className="flex justify-between items-center w-full">
        <InputTemplate full>
          <Label accent>프로젝트명</Label>
          <div className="w-full flex items-center justify-between">
            <Input width={670} placeholder="프로젝트명을 입력하세요" defaultValue={field.title} {...register(`projects.${index}.title`, { required: `${index}번 프로젝트 제목` })} />
            <div className="border-[1px] w-fit flex rounded-[4px] h-fit">
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
        </InputTemplate>
      </div>

      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-between">
          <InputTemplate>
            <Label accent>완료 여부</Label>
            <input type="checkbox" defaultChecked={field.status} {...register(`projects.${index}.status`)} />
          </InputTemplate>
          <InputTemplate>
            <Label accent>시작일</Label>
            <Controller
              name={`projects.${index}.startDate`}
              control={control}
              render={({ field }) => (
                <Input
                  type="month"
                  width={!watch(`projects.${index}.status`) ? 685 : 330}
                  placeholder="YYYY.MM"
                  {...field}
                  value={`${field.value.split("-").slice(0, 2).join("-")}`}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </InputTemplate>
          {watch(`projects.${index}.status`) && (
            <InputTemplate>
              <Label accent>종료일</Label>
              <Controller
                name={`projects.${index}.endDate`}
                control={control}
                render={({ field }) => (
                  <Input type="month" width={330} placeholder="YYYY.MM" {...field} value={`${field.value.split("-").slice(0, 2).join("-")}`} onChange={(e) => field.onChange(e.target.value)} />
                )}
              />
            </InputTemplate>
          )}
        </div>
        <InputTemplate>
          <Label>프로젝트 설명</Label>
          <Textarea width={776} height={176} maxLength={1200} placeholder="자세한 설명을 작성해주세요" {...register(`projects.${index}.description`)} />
        </InputTemplate>
        <InputTemplate>
          <Label>추가 링크</Label>
          <Input
            width={776}
            placeholder="http://, https://"
            title="'https://url.com' 과 같은 형식이어야 합니다."
            pattern="https?:\/\/[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
            {...register(`projects.${index}.link`)}
          />
        </InputTemplate>
      </div>
    </div>
  );
};

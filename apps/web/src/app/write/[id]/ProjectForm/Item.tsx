import { ArrowDown, Delete, Dropdown, Input, InputTemplate, Label, List, Plus, Search, Select, Textarea } from "@moija/ui";
import { FieldArrayWithId, useFieldArray, UseFieldArrayReturn, useFormContext } from "react-hook-form";
import { FormData } from "../page";
// import { useBoolean, useOutsideClickRef } from "@moija/hooks";

interface IProp {
  field: FieldArrayWithId<FormData, "projects", "id">;
  method: UseFieldArrayReturn<FormData, "projects", "id">;
  index: number;
}

export const Item = ({ field, method, index }: IProp) => {
  const { control, register } = useFormContext<FormData>();
  const { fields, swap, remove, update } = method;
  // const { boolean: isOpen, toggle, setFalse: setClose } = useBoolean(false);
  // const { fields: sections, swap: secSwap, remove: secRemove, append: secAppend } = useFieldArray({ control, name: `projects.${index}.sections` });
  // const selectRef = useOutsideClickRef<HTMLDivElement>(setClose);

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
        {/* <InputTemplate>
          <Label>기술 스택</Label>
          <Input
            icon={<Search size={20} color="#787878" />}
            width={776}
            placeholder="기술 스택을 등록하세요"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.currentTarget.value) {
                e.preventDefault();
                update(index, { ...field, skillset: [...field.skillset, e.currentTarget.value] });
                e.currentTarget.value = "";
              }
            }}
          />
          <List list={field.skillset} remove={(item) => update(index, { ...field, skillset: field.skillset.filter((_, j) => j !== item) })} />
        </InputTemplate> */}
        <div className="w-full flex justify-between">
          <InputTemplate>
            <Label accent>진행 여부</Label>

            <input type="checkbox" defaultChecked={field.status} {...register(`projects.${index}.status`)} />
            {/* <div ref={selectRef}>
              
              <Dropdown
                isOpen={isOpen}
                items={["진행중", "서비스중", "서비스 종료"]}
                selectedItem={field.processing}
                onSelect={(item) => {
                  update(index, { ...field, processing: item as "진행중" | "서비스중" | "서비스 종료" });
                }}
              >
                <Select width={247} placeholder="선택" isOpen={isOpen} value={field.processing} onClick={toggle} />
              </Dropdown>
            </div> */}
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
        {/* {sections.map((item, secIndex) => (
          <InputTemplate key={item.id}>
            <div className="w-full flex items-center gap-2">
              <input placeholder="섹션 제목" className="w-full outline-none" defaultValue={item.title} {...register(`projects.${index}.sections.${secIndex}.title`)} />
              <div className="flex gap-2 items-center">
                <button type="button" onClick={() => secIndex < sections.length - 1 && secSwap(secIndex, secIndex + 1)}>
                  <ArrowDown size={24} color={secIndex < sections.length - 1 ? "#787878" : "#BFBFBF"} />
                </button>
                <button type="button" className="rotate-180" onClick={() => secIndex > 0 && secSwap(secIndex, secIndex - 1)}>
                  <ArrowDown size={24} color={secIndex > 0 ? "#787878" : "#BFBFBF"} />
                </button>
                <button type="button" onClick={() => secRemove(secIndex)}>
                  <Delete />
                </button>
              </div>
            </div>

            <Input width={776} placeholder="섹션 내용" defaultValue={item.content} {...register(`projects.${index}.sections.${secIndex}.content`)} />
          </InputTemplate>
        ))}
        <button className="flex items-center justify-center w-full rounded-[8px] gap-2 bg-gray-100 text-gray-500 h-[48px]" type="button" onClick={() => secAppend({ title: "", content: "" })}>
          <Plus size={18} color="#787878" />
          섹션 추가
        </button> */}
      </div>
    </div>
  );
};

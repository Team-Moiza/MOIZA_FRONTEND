import { ArrowDown, Delete, Input, InputTemplate, Label, Plus, Text, Textarea } from "@moija/ui";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FormData } from "./page";

export const AchievementForm = () => {
  const { control, register } = useFormContext<FormData>();
  const { fields, append, remove, swap } = useFieldArray({ control, name: "awards" });

  return (
    <div className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className="text-h2 text-black">수상</Text>
      {fields.map((field, index) => (
        <div className="w-full flex flex-col gap-4" key={field.id}>
          <div className="flex justify-between w-full">
            <input className="text-h4 text-black placeholder:text-gray-400 w-full outline-none" placeholder="수상명" defaultValue={field.name} {...register(`awards.${index}.name`, { required: `${index}번 수상 제목` })} />
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
            <InputTemplate>
              <Label accent>대회명</Label>
              <Input width={776} defaultValue={field.competitionName} placeholder="대회명을 입력하세요" {...register(`awards.${index}.competitionName`, { required: `${index}번 수상 대회명` })} />
            </InputTemplate>
            <div className="w-full flex justify-between">
              <InputTemplate>
                <Label accent>종류</Label>
                <Input width={247} defaultValue={field.type} placeholder="수상 종류를 입력하세요" {...register(`awards.${index}.type`, { required: `${index}번 수상 종류` })} />
              </InputTemplate>
              <InputTemplate>
                <Label accent>진행 기간</Label>
                <Input width={512} defaultValue={field.date} placeholder="YYYY-MM-DD" {...register(`awards.${index}.date`, { required: `${index}번 수상일` })} />
              </InputTemplate>
            </div>
            <InputTemplate>
              <Label>설명</Label>
              <Textarea width={776} defaultValue={field.description} height={176} maxLength={1200} placeholder="자세한 설명을 작성해주세요" {...register(`awards.${index}.description`)} />
            </InputTemplate>
          </div>
        </div>
      ))}

      <button className="flex items-center gap-2 cursor-pointer" type="button" onClick={() => append({ date: "", name: "", type: "", competitionName: "", description: "" })}>
        <div className="rounded-full bg-primary-500 flex items-center justify-center w-[26px] h-[26px]">
          <Plus color="#FFFFFF" size={16} />
        </div>
        <span className="text-p5 text-black">수상 내역 추가</span>
      </button>
    </div>
  );
};

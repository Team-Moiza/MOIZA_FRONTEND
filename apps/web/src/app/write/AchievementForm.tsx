import { ArrowDown, Delete, Input, InputTemplate, Label, Plus, Text, Textarea } from "@moija/ui";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { FormData } from "./page";

interface IProp {
  control: Control<FormData, any>;
  register: UseFormRegister<FormData>;
}

export const AchievementForm = ({ control, register }: IProp) => {
  const { fields, append, remove, swap } = useFieldArray({ control, name: "achievements" });

  return (
    <div className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className="text-h2 text-black">수상</Text>
      {fields.map((field, index) => (
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between w-full">
            <input
              className="text-h4 text-black placeholder:text-gray-400 w-full outline-none"
              placeholder="수상명"
              defaultValue={field.name}
              {...register(`achievements.${index}.name`, { required: `${index}번 수상 제목` })}
            />
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
              <Input width={776} defaultValue={field.contestName} placeholder="대회명을 입력하세요" {...register(`achievements.${index}.contestName`, { required: `${index}번 수상 대회명` })} />
            </InputTemplate>
            <div className="w-full flex justify-between">
              <InputTemplate>
                <Label accent>종류</Label>
                <Input width={247} defaultValue={field.type} placeholder="수상 종류를 입력하세요" {...register(`achievements.${index}.type`, { required: `${index}번 수상 종류` })} />
              </InputTemplate>
              <InputTemplate>
                <Label accent>진행 기간</Label>
                <Input
                  width={512}
                  defaultValue={field.date}
                  placeholder="YYYY.MM ~"
                  pattern="\d{4}\.(0[1-9]|1[0-2]) ~ ?(\d{4}\.(0[1-9]|1[0-2]))?"
                  title="'YYYY.MM ~ ' 또는 'YYYY.MM ~ YYYY.MM' 과 같은 형식이어야 합니다."
                  {...register(`achievements.${index}.date`, { required: `${index}번 수상 진행 기간` })}
                />
              </InputTemplate>
            </div>
            <InputTemplate>
              <Label>설명</Label>
              <Textarea width={776} defaultValue={field.introduce} height={176} maxLength={1200} placeholder="자세한 설명을 작성해주세요" {...register(`achievements.${index}.introduce`)} />
            </InputTemplate>
          </div>
        </div>
      ))}

      <button className="flex items-center gap-2 cursor-pointer" type="button" onClick={() => append({ date: "", introduce: "", name: "", type: "", contestName: "" })}>
        <div className="rounded-full bg-primary-500 flex items-center justify-center w-[26px] h-[26px]">
          <Plus color="#FFFFFF" size={16} />
        </div>
        <span className="text-p5 text-black">수상 내역 추가</span>
      </button>
    </div>
  );
};

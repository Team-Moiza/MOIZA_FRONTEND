import { ArrowDown, Delete, Input, InputTemplate, Label, Plus, Text } from "@moija/ui";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FormData } from "../../types/FormData";

export const QualificationForm = () => {
  const { control, register } = useFormContext<FormData>();
  const { fields, append, remove, swap } = useFieldArray({ control, name: "qualifications" });

  return (
    <div className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className="text-h2 text-black">자격증</Text>

      {fields.map((field, index) => (
        <div className="w-full flex flex-col gap-4" key={field.id}>
          <InputTemplate full>
            <Label accent>대회명</Label>
            <div className="flex justify-between w-full items-center">
              <Input width={670} placeholder="대회명을 입력하세요" defaultValue={field.name} {...register(`qualifications.${index}.name`, { required: `${index}번 대회 이름` })} />
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
          </InputTemplate>

          <div className="w-full flex flex-col gap-8">
            <div className="w-full flex justify-between">
              <InputTemplate>
                <Label>점수/급</Label>
                <Input width={247} placeholder="점수 또는 급을 입력하세요" defaultValue={field.score} {...register(`qualifications.${index}.score`)} />
              </InputTemplate>
              <InputTemplate>
                <Label accent>취득 날짜</Label>
                <Input
                  width={512}
                  type="date"
                  placeholder="YYYY-MM-DD"
                  defaultValue={field.date}
                  {...register(`qualifications.${index}.date`, {
                    required: `${index}번 자격증 취득 날짜`,
                  })}
                />
              </InputTemplate>
            </div>
          </div>
        </div>
      ))}

      <button className="flex items-center gap-2 cursor-pointer" type="button" onClick={() => append({ date: "", score: "", name: "" })}>
        <div className="rounded-full bg-primary-500 flex items-center justify-center w-[26px] h-[26px]">
          <Plus color="#FFFFFF" size={16} />
        </div>
        <span className="text-p5 text-black">수상 내역 추가</span>
      </button>
    </div>
  );
};

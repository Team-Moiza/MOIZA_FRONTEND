import { ArrowDown, Delete, Input, InputTemplate, Label, Plus, Text } from "@moija/ui";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { FormData } from "./page";

interface IProp {
  control: Control<FormData, any>;
  register: UseFormRegister<FormData>;
}

export const QualificationForm = ({ control, register }: IProp) => {
  const { fields, append, remove, swap } = useFieldArray({ control, name: "certifications" });

  return (
    <div className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className="text-h2 text-black">자격증</Text>

      {fields.map((field, index) => (
        <div className="w-full flex flex-col gap-4" key={field.id}>
          <div className="flex justify-between w-full">
            <input
              className="text-h4 text-black placeholder:text-gray-400 w-full outline-none"
              placeholder="자격증명"
              defaultValue={field.name}
              {...register(`certifications.${index}.name`, { required: `${index}번 자격증 이름` })}
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
              <Label accent>발급사</Label>
              <Input width={776} placeholder="대회명을 입력하세요" defaultValue={field.issuer} {...register(`certifications.${index}.issuer`, { required: `${index}번 자격증 발급사` })} />
            </InputTemplate>
            <div className="w-full flex justify-between">
              <InputTemplate>
                <Label accent>점수/급</Label>
                <Input width={247} placeholder="점수 또는 급을 입력하세요" defaultValue={field.level} {...register(`certifications.${index}.level`, { required: `${index}번 자격증 점수/급` })} />
              </InputTemplate>
              <InputTemplate>
                <Label accent>취득 날짜</Label>
                <Input
                  width={512}
                  placeholder="YYYY.MM.DD"
                  pattern="\d{4}\.(0[1-9]|1[0-2])\.(0[1-9]|[1-2][0-9]|3[0-1])"
                  title="'YYYY.MM.DD' 와 같은 형식이어야 합니다."
                  defaultValue={field.date}
                  {...register(`certifications.${index}.name`, { required: `${index}번 자격증 이름` })}
                />
              </InputTemplate>
            </div>
          </div>
        </div>
      ))}

      <button className="flex items-center gap-2 cursor-pointer" type="button" onClick={() => append({ date: "", level: "", name: "", issuer: "" })}>
        <div className="rounded-full bg-primary-500 flex items-center justify-center w-[26px] h-[26px]">
          <Plus color="#FFFFFF" size={16} />
        </div>
        <span className="text-p5 text-black">수상 내역 추가</span>
      </button>
    </div>
  );
};

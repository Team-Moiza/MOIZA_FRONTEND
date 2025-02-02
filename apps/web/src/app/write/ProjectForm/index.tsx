import { Plus, Text } from "@moija/ui";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { FormData } from "../page";
import { Item } from "./Item";

interface IProp {
  control: Control<FormData, any>;
  register: UseFormRegister<FormData>;
}

export const ProjectForm = ({ control, register }: IProp) => {
  const fieldArray = useFieldArray({ control, name: "projects" });

  return (
    <div className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className="text-h2 text-black">프로젝트</Text>
      {fieldArray.fields.map((field, index) => (
        <Item field={field} index={index} key={field.id} fieldArray={fieldArray} register={register} control={control} />
      ))}

      <button
        className="flex items-center gap-2 cursor-pointer"
        type="button"
        onClick={() => fieldArray.append({ date: "", introduce: "", processing: "진행중", skillset: [], title: "", url: "", sections: [] })}
      >
        <div className="rounded-full bg-primary-500 flex items-center justify-center w-[26px] h-[26px]">
          <Plus color="#FFFFFF" size={16} />
        </div>
        <span className="text-p5 text-black">프로젝트 추가</span>
      </button>
    </div>
  );
};

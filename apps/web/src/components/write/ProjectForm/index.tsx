import { Plus, Text } from "@moija/ui";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FormData } from "../../../types/FormData";
import { Item } from "./Item";

export const ProjectForm = () => {
  const { control } = useFormContext<FormData>();
  const fieldMethods = useFieldArray({ control, name: "projects" });
  const asterisk =
  " after:ml-1 after:content-['*'] after:text-[#FF3B30] after:font-bold after:text-[16px]";

  return (
    <div id="projects" className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className={`text-h2 text-black ${asterisk}`}>프로젝트</Text>
      {fieldMethods.fields.map((field, index) => (
        <Item field={field} method={fieldMethods} index={index} key={field.id} />
      ))}

      <button className="flex items-center gap-2 cursor-pointer" type="button" onClick={() => fieldMethods.append({ title: "", status: false, startDate: "", endDate: "", description: "", link: "" })}>
        <div className="rounded-full bg-primary-500 flex items-center justify-center w-[26px] h-[26px]">
          <Plus color="#FFFFFF" size={16} />
        </div>
        <span className="text-p5 text-black">프로젝트 추가</span>
      </button>
    </div>
  );
};

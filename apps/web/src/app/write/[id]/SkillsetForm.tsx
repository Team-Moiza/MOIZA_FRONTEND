import { Input, InputTemplate, Search, Stack, Text } from "@moija/ui";
import { FormData } from "./page";
import { useFieldArray, useFormContext } from "react-hook-form";
import { List } from "@moija/ui";

export const SkillsetForm = () => {
  const { control } = useFormContext<FormData>();
  const { fields, append, remove } = useFieldArray({ control, name: "skillsets" });

  return (
    <div className="w-[832px] px-[28px] pt-[24px] pb-[32px] bg-white rounded-[12px]">
      <Stack gap={20}>
        <Text className="text-h2 text-black">기술 스택</Text>
        <InputTemplate>
          <Input
            icon={<Search size={20} color="#787878" />}
            width={776}
            placeholder="기술 스택을 등록하세요"
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.currentTarget.value) {
                e.preventDefault();
                append({ id: fields.length, name: e.currentTarget.value });
                e.currentTarget.value = "";
              }
            }}
          />
        </InputTemplate>
        <List list={fields.map((i) => i.name)} remove={(item) => remove(item)} />
      </Stack>
    </div>
  );
};

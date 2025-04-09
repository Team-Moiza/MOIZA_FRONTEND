import { Input, InputTemplate, Search, Stack, Text } from "@moija/ui";
import { FormData } from "../../types/FormData";
import { useFieldArray, useFormContext } from "react-hook-form";
import { List } from "@moija/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { addSkillset, findSkillset } from "../../apis";

let time: undefined | NodeJS.Timeout = undefined;
export const SkillsetForm = () => {
  const { control } = useFormContext<FormData>();
  const { fields, append, remove } = useFieldArray({ control, name: "codes" });
  const [input, setInput] = useState("");
  const [value, setValue] = useState("");
  const { mutate } = useMutation({
    mutationFn: async () => await addSkillset(value),
    onSuccess: (data) => {
      append({ id: data?.data.id, keyword: data?.data.keyword });
      setValue("");
      setInput("");
    },
  });
  const { data } = useQuery({ queryKey: ["skillsets", "code", input], queryFn: async () => await findSkillset(input), enabled: input !== "" });

  return (
    <div className="w-[832px] px-[28px] pt-[24px] pb-[32px] bg-white rounded-[12px]">
      <div></div>
      <Stack gap={20}>
        <Text className="text-h2 text-black">기술 스택</Text>
        <div className="relative w-full h-fit">
          <InputTemplate>
            <Input
              icon={<Search size={20} color="#787878" />}
              width={776}
              value={value}
              placeholder="기술 스택을 등록하세요"
              onChange={(e) => {
                clearTimeout(time);
                setValue(e.target.value);
                time = setTimeout(() => setInput(e.target.value), 500);
              }}
              onKeyDown={async (e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (e.currentTarget.value && !e.nativeEvent.isComposing) {
                    mutate();
                  }
                }
              }}
            />
          </InputTemplate>
          {input !== "" && (
            <div className="mt-3 w-full h-[300px] absolute z-20 bg-white rounded-lg p-[16px] border-gray-200 border-[1px] overflow-auto">
              {data?.data?.length ? (
                data.data.map(({ id, keyword }: any) => (
                  <button
                    className="flex px-4 py-2 items-center w-full h-[50px] rounded-lg hover:bg-gray-100"
                    onClick={() => {
                      setValue("");
                      setInput("");
                      append({ id, keyword });
                    }}
                  >
                    {keyword}
                  </button>
                ))
              ) : (
                <span>검색 결과가 없습니다..</span>
              )}
            </div>
          )}
        </div>

        <List list={fields.map((i) => i.keyword)} remove={(item) => remove(item)} />
      </Stack>
    </div>
  );
};

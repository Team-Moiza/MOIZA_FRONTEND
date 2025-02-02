import { Center, Dropdown, Edit, Flex, Image as ImageIcon, Input, InputTemplate, Label, Search, Select, Spacing, Stack, Text, Textarea } from "@moija/ui";
import { useBoolean, useOutsideClickRef } from "@moija/hooks";
import { UseFormReturn } from "react-hook-form";
import { FormData } from "./page";
import { useState } from "react";
import Image from "next/image";

interface IProp {
  formMethod: UseFormReturn<FormData, any, undefined>;
}

export const BasicInfoForm = ({ formMethod }: IProp) => {
  const { boolean: isOpen, toggle, setFalse: setClose } = useBoolean(false);
  const { boolean: canEditName, toggle: editToggle, setFalse: closeEditName } = useBoolean(false);
  const selectRef = useOutsideClickRef<HTMLDivElement>(setClose);
  const editRef = useOutsideClickRef<HTMLDivElement>(closeEditName);
  const [image, setImage] = useState<File | undefined>(undefined);
  formMethod.register("job", { required: "개발 직무" });

  return (
    <Center horizontal vertical={false}>
      <div className="w-[1040px]">
        <Spacing>
          <Stack gap={12}>
            <div className="w-[184px] h-[184px] overflow-hidden rounded-[8px] bg-gray-200">
              {image ? (
                <Image src={URL.createObjectURL(image)} className="object-cover w-[184px] h-[184px]" width={184} height={184} alt="profile" />
              ) : (
                <Center>
                  <ImageIcon size={38} color="#787878" />
                </Center>
              )}
            </div>

            <Stack gap={8}>
              <label htmlFor="image" className="relative">
                <input id="image" className="invisible absolute" onChange={({ target }) => setImage(target.files ? target.files[0] : undefined)} type="file" />
                <div className="w-[184px] h-[44px] rounded-[8px] bg-gray-100 text-p5 text-gray-400 flex justify-center items-center cursor-pointer">이미지 업로드</div>
              </label>
              {image && (
                <button type="button" className="text-sm text-red-400" onClick={() => setImage(undefined)}>
                  이미지 제거
                </button>
              )}

              <Text className="text-caption1 text-gray-400">- 업로드 이미지 최대 크기 10MB</Text>
            </Stack>
          </Stack>
          <div className="w-[824px]">
            <Stack gap={28}>
              <Flex align="center" gap={12}>
                {canEditName ? (
                  <div ref={editRef}>
                    <input className="outline-none w-fit text-h1 text-black" placeholder={formMethod.getValues("title")} {...formMethod.register("title", { required: "제목" })} />
                  </div>
                ) : (
                  <Text className={`text-h1 text-black`}>{formMethod.getValues("title")}</Text>
                )}

                <button type="button" onClick={editToggle}>
                  <Edit color={canEditName ? "#000000" : "#BFBFBF"} />
                </button>
              </Flex>

              <Stack gap={20}>
                <Flex gap={12}>
                  <InputTemplate>
                    <Label accent>이메일</Label>
                    <Input
                      type="email"
                      width={824}
                      isBig
                      placeholder="이메일을 입력해주세요"
                      defaultValue={formMethod.getValues("email")}
                      {...formMethod.register("email", {
                        required: "이메일",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "유효한 이메일 주소를 입력해주세요.",
                        },
                      })}
                    />
                  </InputTemplate>
                </Flex>
                <InputTemplate>
                  <Label>한줄 소개</Label>
                  <Textarea
                    width={824}
                    height={176}
                    maxLength={100}
                    isBig
                    placeholder="나를 소개하는 글을 써주세요"
                    defaultValue={formMethod.getValues("shortIntroduce")}
                    {...formMethod.register("shortIntroduce")}
                  />
                </InputTemplate>
                <InputTemplate>
                  <Label accent>개발 직무</Label>
                  <div ref={selectRef}>
                    <Dropdown
                      isOpen={isOpen}
                      selectedItem={formMethod.getValues("job")}
                      items={["a", "b", "c"]}
                      onSelect={(item) => {
                        formMethod.setValue("job", item);
                        toggle();
                      }}
                    >
                      <Select width={824} placeholder="직무를 선택해주세요" isOpen={isOpen} isBig value={formMethod.getValues("job")} onClick={toggle} />
                    </Dropdown>
                  </div>
                </InputTemplate>
                <InputTemplate>
                  <Label>회사</Label>
                  <Input
                    icon={<Search size={20} color="#787878" />}
                    width={824}
                    placeholder="현재 재직 중인 회사"
                    isBig
                    defaultValue={formMethod.getValues("company")}
                    {...formMethod.register("company")}
                  />
                </InputTemplate>
              </Stack>
            </Stack>
          </div>
        </Spacing>
      </div>
    </Center>
  );
};

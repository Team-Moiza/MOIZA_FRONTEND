"use client";

import {
  Button,
  Center,
  Dropdown,
  Flex,
  Image as ImageIcon,
  Input,
  InputTemplate,
  Label,
  Search,
  Select,
  Spacing,
  Stack,
  Text,
  Textarea,
} from "@moija/ui";
import { useOutsideClickRef } from "@moija/hooks";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Image from "next/image";
import { updateUser, user } from "../../../apis/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import {
  School,
  Major,
  Job,
  EducationStatus,
} from "../../../enum/enums";

export interface FormType {
  nickname: string;
  school: keyof typeof School;
  major: keyof typeof Major;
  email?: string;
  educationStatus: keyof typeof EducationStatus;
  enrollmentStartDate: string;
  enrollmentEndDate: string;
  job: keyof typeof Job;
  company: string;
  introduce: string;
  profile?: string;
}

const findKeyByValue = (value: string, target: object) => {
  return (Object.entries(target).find((i) => i[1] === value) || ["", ""])[0];
};

export default function Page() {
  const [open, setOpen] = useState<null | string>(null);
  const selectRef = useOutsideClickRef<HTMLDivElement>(() => setOpen(null));
  const { control, register, reset, getValues, handleSubmit } = useForm<FormType>();
  const [image, setImage] = useState<File | undefined>(undefined);
  const { replace } = useRouter();

  const { data, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => (await user()).data,
  });
  
  const { mutate } = useMutation({
    mutationFn: updateUser,
    onSuccess: async () => {
      await refetch();
      replace("/my");
    },
  });

  useEffect(() => {
    if (data) reset(data);
  }, [data]);

  const onSubmit = (value: FormType) => {
    delete value.email;
    delete value.profile;
    mutate(value);
  };

  const onFail = () => {
    alert("입력되지 않은 항목이 있습니다.");
  };

  return (
    <form
      className="w-full h-[1100px] pt-[100px] mb-[100px]"
      onSubmit={handleSubmit(onSubmit, onFail)}
    >
      <Center horizontal vertical={false}>
        <div className="w-[1040px]">
          <Spacing>
            <Stack gap={12}>
              <div className="w-[184px] h-[184px] overflow-hidden rounded-[8px] bg-gray-200">
                {data?.profile ? (
                  <Image
                    src={data?.profile}
                    className="object-cover w-[184px] h-[184px]"
                    width={184}
                    height={184}
                    alt="profile"
                  />
                ) : (
                  <Center>
                    <ImageIcon size={38} color="#787878" />
                  </Center>
                )}
              </div>

              <Stack gap={8}>
                <label
                  className="relative"
                  onClick={(e) => {
                    e.preventDefault();
                    toast.error("사용할 수 없습니다");
                  }}
                >
                  <input
                    id="image"
                    className="invisible absolute"
                    onChange={({ target }) => setImage(target.files ? target.files[0] : undefined)}
                    type="file"
                  />
                  <button
                    disabled
                    className="w-[184px] h-[44px] rounded-[8px] bg-gray-100 text-p5 text-gray-400 flex justify-center items-center cursor-not-allowed"
                  >
                    이미지 업로드
                  </button>
                </label>
                {image && (
                  <button
                    type="button"
                    className="text-sm text-red-400"
                    onClick={() => setImage(undefined)}
                  >
                    이미지 제거
                  </button>
                )}
                <Text className="text-caption1 text-gray-400">- 업로드 이미지 최대 크기 10MB</Text>
              </Stack>
            </Stack>

            <div className="w-[824px]">
              <Stack gap={28}>
                <Stack gap={20}>
                  <InputTemplate>
                    <Label accent>이름</Label>
                    <Input
                      width={824}
                      isBig
                      placeholder="이름을 입력해주세요"
                      defaultValue={getValues("nickname")}
                      {...register("nickname", { required: "이름을 입력해주세요" })}
                    />
                  </InputTemplate>

                  <InputTemplate>
                    <Label accent>이메일</Label>
                    <Input
                      type="email"
                      width={824}
                      isBig
                      placeholder="이메일을 입력해주세요"
                      value={getValues("email")}
                      disabled
                    />
                  </InputTemplate>

                  <Flex gap={20}>
                    <InputTemplate>
                      <Label>학교명</Label>
                      <div ref={selectRef}>
                        <Controller
                          control={control}
                          name="school"
                          render={({ field: { value, onChange } }) => (
                            <Dropdown
                              isOpen={open === "school"}
                              items={Object.values(school)}
                              onSelect={(item) => onChange(findKeyByValue(item, school))}
                            >
                              <Select
                                width={557}
                                isBig
                                placeholder="학교를 선택해주세요"
                                value={school[value]}
                                isOpen={open === "school"}
                                onClick={() => setOpen((prev) => (prev ? null : "school"))}
                              />
                            </Dropdown>
                          )}
                        />
                      </div>
                    </InputTemplate>

                    <InputTemplate>
                      <Label>전공명</Label>
                      <div ref={selectRef}>
                        <Controller
                          control={control}
                          name="major"
                          render={({ field: { value, onChange } }) => (
                            <Dropdown
                              isOpen={open === "major"}
                              items={Object.values(major)}
                              onSelect={(item) => onChange(findKeyByValue(item, major))}
                            >
                              <Select
                                width={247}
                                isBig
                                placeholder="전공을 선택해주세요"
                                value={major[value]}
                                isOpen={open === "major"}
                                onClick={() => setOpen((prev) => (prev ? null : "major"))}
                              />
                            </Dropdown>
                          )}
                        />
                      </div>
                    </InputTemplate>
                  </Flex>

                  <Flex gap={20}>
                    <InputTemplate>
                      <Label>재학 상태</Label>
                      <div ref={selectRef}>
                        <Controller
                          control={control}
                          name="educationStatus"
                          render={({ field: { value, onChange } }) => (
                            <Dropdown
                              isOpen={open === "stat"}
                              items={Object.values(educationstat)}
                              onSelect={(item) => onChange(findKeyByValue(item, educationstat))}
                            >
                              <Select
                                width={261}
                                isBig
                                placeholder="재학 상태"
                                value={educationstat[value]}
                                isOpen={open === "stat"}
                                onClick={() => setOpen((prev) => (prev ? null : "stat"))}
                              />
                            </Dropdown>
                          )}
                        />
                      </div>
                    </InputTemplate>

                    <InputTemplate>
                      <Label accent>재학 시작일</Label>
                      <Input
                        width={261}
                        isBig
                        placeholder="재학 시작일"
                        type="date"
                        defaultValue={getValues("enrollmentStartDate")}
                        {...register("enrollmentStartDate", {
                          required: "재학 시작일을 입력하세요",
                        })}
                      />
                    </InputTemplate>

                    <InputTemplate>
                      <Label accent>재학 종료일</Label>
                      <Input
                        type="date"
                        width={261}
                        isBig
                        placeholder="재학 종료일"
                        defaultValue={getValues("enrollmentEndDate")}
                        {...register("enrollmentEndDate", {
                          required: "재학 종료일을 입력하세요",
                        })}
                      />
                    </InputTemplate>
                  </Flex>

                  <InputTemplate>
                    <Label>개발 직무</Label>
                    <div ref={selectRef}>
                      <Controller
                        control={control}
                        name="job"
                        render={({ field: { value, onChange } }) => (
                          <Dropdown
                            isOpen={open === "job"}
                            items={Object.values(job)}
                            onSelect={(item) => {
                              setOpen((prev) => (prev ? null : "job"));
                              onChange(findKeyByValue(item, job));
                            }}
                          >
                            <Select
                              width={824}
                              isBig
                              placeholder="개발 직무"
                              value={job[value]}
                              isOpen={open === "job"}
                              onClick={() => setOpen((prev) => (prev ? null : "job"))}
                            />
                          </Dropdown>
                        )}
                      />
                    </div>
                  </InputTemplate>

                  <InputTemplate>
                    <Label>회사</Label>
                    <Input
                      width={824}
                      placeholder="현재 재직 중인 회사"
                      isBig
                      defaultValue={getValues("company")}
                      {...register("company")}
                    />
                  </InputTemplate>

                  <InputTemplate>
                    <Label>한줄 소개</Label>
                    <Textarea
                      width={824}
                      height={176}
                      maxLength={100}
                      isBig
                      placeholder="나를 소개하는 글을 써주세요"
                      defaultValue={getValues("introduce")}
                      {...register("introduce")}
                    />
                  </InputTemplate>
                </Stack>

                <div className="w-full flex justify-end">
                  <Button submit type="white">
                    수정
                  </Button>
                </div>
              </Stack>
            </div>
          </Spacing>
        </div>
      </Center>
    </form>
  );
}

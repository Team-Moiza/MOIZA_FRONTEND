"use client";

import { Button, Center, Dropdown, Flex, Image as ImageIcon, Input, InputTemplate, Label, Select, Spacing, Stack, Text, Textarea } from "@moija/ui";
import { useOutsideClickRef } from "@moija/hooks";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Image from "next/image";
import { updateUser, user } from "../../../apis/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { School, Major, Job, EducationStatus } from "../../../enum/enums";
import { instance } from "../../../apis";
import { toast, Bounce } from "react-toastify";

export interface FormType {
  nickname: string;
  school: keyof typeof School;
  major: keyof typeof Major;
  email?: string;
  educationStatus: keyof typeof EducationStatus;
  enrollmentStartDate: string;
  enrollmentEndDate: string;
  job: keyof typeof Job;
  company: string | null;
  introduce: string;
  profile?: string;
}

const findKeyByValue = (value: string, target: object) => {
  return (Object.entries(target).find((i) => i[1] === value) || ["", ""])[0];
};

export default function Page() {
  const [open, setOpen] = useState<null | string>(null);
  const selectRef = useOutsideClickRef<HTMLDivElement>(() => setOpen(null));
  const { control, register, reset, getValues, handleSubmit, setValue } = useForm<FormType>();
  const { replace } = useRouter();

  const { data, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => (await user()).data,
  });

  const { mutate } = useMutation({
    mutationFn: updateUser,
    onSuccess: async () => {
      toast.success("유저 정보를 수정하였습니다.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      await refetch();
    },
  });

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data?.email]);

  useEffect(() => {
    if (data?.profile) {
      setValue("profile", data.profile);
    }
  }, [data?.profile]);

  const onSubmit = (value: FormType) => {
    if (!value.introduce) {
      alert("입력되지 않은 항목이 있습니다.");
      return;
    }
    if (value.company === "") {
      value.company = null;
    }
    delete value.email;
    delete value.profile;
    mutate(value);
  };

  const onFail = () => {
    alert("입력되지 않은 항목이 있습니다.");
  };

  return (
    <form className="w-full h-[1100px] pt-[100px] mb-[100px]" onSubmit={handleSubmit(onSubmit, onFail)}>
      <Center horizontal vertical={false}>
        <div className="w-[1040px]">
          <Spacing>
            <Stack gap={12}>
              <div className="w-[184px] h-[184px] overflow-hidden rounded-[8px] bg-gray-200">
                {data?.profile ? (
                  <Image
                    src={data.profile}
                    className="object-cover w-[184px] h-[184px]"
                    width={184}
                    height={184}
                    alt="profile"
                    unoptimized
                  />
                ) : (
                  <Center>
                    <ImageIcon size={38} color="#787878" />
                  </Center>
                )}
              </div>

              <Stack gap={8}>
                <label className="relative">
                  <input
                    id="image"
                    className="sr-only"
                    type="file"
                    accept="image/*"
                    onChange={({ target }) => {
                      if (target?.files?.[0]) {
                        const formdata = new FormData();
                        formdata.append("file", target.files[0]);
                        instance.patch("/users/picture", formdata).then(() => {
                          refetch(); // 이후 useEffect에서 setValue로 profile만 갱신
                        });
                      }
                    }}
                  />
                  <div className="w-[184px] h-[44px] rounded-[8px] bg-primary-500 text-p5 text-white flex justify-center items-center cursor-pointer">
                    이미지 업로드
                  </div>
                </label>
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
                            <Dropdown isOpen={open === "school"} items={Object.values(School)} onSelect={(item) => onChange(findKeyByValue(item, School))}>
                              <Select
                                width={557}
                                isBig
                                placeholder="학교를 선택해주세요"
                                value={School[value]}
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
                            <Dropdown isOpen={open === "major"} items={Object.values(Major)} onSelect={(item) => onChange(findKeyByValue(item, Major))}>
                              <Select width={247} isBig placeholder="전공을 선택해주세요" value={Major[value]} isOpen={open === "major"} onClick={() => setOpen((prev) => (prev ? null : "major"))} />
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
                            <Dropdown isOpen={open === "stat"} items={Object.values(EducationStatus)} onSelect={(item) => onChange(findKeyByValue(item, EducationStatus))}>
                              <Select width={261} isBig placeholder="재학 상태" value={EducationStatus[value]} isOpen={open === "stat"} onClick={() => setOpen((prev) => (prev ? null : "stat"))} />
                            </Dropdown>
                          )}
                        />
                      </div>
                    </InputTemplate>

                    <InputTemplate>
                      <Label accent>재학 시작 연도</Label>
                      <Input
                        width={261}
                        isBig
                        type="number"
                        min={1900}
                        max={2100}
                        placeholder="예: 2023"
                        {...register("enrollmentStartDate", {
                          required: "재학 시작 연도를 입력하세요",
                          onChange: (e) => {
                            const startYear = parseInt(e.target.value, 10);
                            if (!isNaN(startYear)) {
                              setValue("enrollmentEndDate", (startYear + 3).toString());
                            }
                          },
                        })}
                      />
                    </InputTemplate>

                    <InputTemplate>
                      <Label accent>재학 종료 연도</Label>
                      <Input
                        type="number"
                        width={261}
                        isBig
                        placeholder="예: 2026"
                        {...register("enrollmentEndDate", {
                          required: "재학 종료 연도를 입력하세요",
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
                            items={Object.values(Job)}
                            onSelect={(item) => {
                              setOpen((prev) => (prev ? null : "job"));
                              onChange(findKeyByValue(item, Job));
                            }}
                          >
                            <Select width={824} isBig placeholder="개발 직무" value={Job[value]} isOpen={open === "job"} onClick={() => setOpen((prev) => (prev ? null : "job"))} />
                          </Dropdown>
                        )}
                      />
                    </div>
                  </InputTemplate>

                  <InputTemplate>
                    <Label>회사</Label>
                    <Input width={824} placeholder="현재 재직 중인 회사 (없다면 생략 가능)" isBig defaultValue={getValues("company")} {...register("company")} />
                  </InputTemplate>

                  <InputTemplate>
                    <Label accent>한줄 소개</Label>
                    <Textarea width={824} height={176} maxLength={100} isBig placeholder="나를 소개하는 글을 써주세요" defaultValue={getValues("introduce")} {...register("introduce")} />
                  </InputTemplate>
                </Stack>

                <div className="w-full flex justify-end">
                  <Button submit>저장</Button>
                </div>
              </Stack>
            </div>
          </Spacing>
        </div>
      </Center>
    </form>
  );
}

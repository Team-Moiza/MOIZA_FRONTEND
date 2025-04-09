"use client";

import { Button, Center, Flex, Stack } from "@moija/ui";
import { IntroduceForm } from "../../components/write/IntroduceForm";
import { FormProvider, useForm } from "react-hook-form";
import { Sidebar } from "../../components/write/Sidebar";
import { SkillsetForm } from "../../components/write/SkillsetForm";
import { ProjectForm } from "../../components/write/ProjectForm";
import { LinkForm } from "../../components/write/LinkForm";
import { AchievementForm } from "../../components/write/AchievementForm";
import { QualificationForm } from "../../components/write/QualificationForm";
import { default as Profile } from "../my/edit/page";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { addPortfolio, publishPortFolio } from "../../apis";
import { TitleForm } from "../../components/write/TitleForm";
import { FormData } from "../../types/FormData";
import { toast, Bounce } from "react-toastify";

export default function WritePortFolio() {
  const formMethod = useForm<FormData>();
  const navigate = useRouter();
  const client = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async () => {
      const data = formMethod.getValues();
      data.projects = data.projects!!.map((i) => ({
        ...i,
        startDate: i.startDate.length === 10 ? i.startDate : `${i.startDate}-01`,
        endDate: i.endDate ? (i.endDate.length === 10 ? i.endDate : `${i.endDate}-01`) : "",
      }));
      const response = await addPortfolio(data);
      const newId = response.data;
      console.log(newId);
      (await publishPortFolio(newId as string)) as any
    },
    onSuccess: async () => {
      toast.success('이력서 생성 및 게시에 성공하였습니다.', {
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
      await client.invalidateQueries(["my", "portfolio"] as any);
      navigate.replace("/my");
    },
    onError: (error: any) => {
      if (error?.response?.status === 409) {
        toast.error("유저 프로필을 먼저 수정해 주세요.", {
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
      } if (error?.response?.status === 400) {
        toast.error("이력서의 필수 값을 채워 주세요.", {
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
      }
    },
  });
  const { mutate: create } = useMutation({
    mutationFn: async () => {
      const data = formMethod.getValues();
      data.projects = data.projects.map((i) => ({
        ...i,
        startDate: i.startDate.length === 10 ? i.startDate : `${i.startDate}-01`,
        endDate: i.endDate ? (i.endDate.length === 10 ? i.endDate : `${i.endDate}-01`) : "",
      }));
      const response = await addPortfolio(data);
      return response.data;
    },
    onSuccess: (id: string) => {
      toast.success('이력서 생성에 성공하였습니다.', {
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
      client.invalidateQueries(["portfolio", "write", id] as any);
      navigate.replace("/my");
    },
    onError: (error: any) => {
      if (error?.response?.status === 409) {
        toast.error("유저 프로필을 먼저 수정해 주세요.", {
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
      }
    },
  });

  const onSubmit = formMethod.handleSubmit(
    (data) => {
      console.log("Form Submitted Data:", data);
    },
    (errors) => console.log(errors)
  );

  return (
    <FormProvider {...formMethod}>
      <div className="w-screen pt-[80px]">
        <Profile />
        <form onSubmit={onSubmit}>
          <div className="w-full bg-gray-100 pt-[80px] pb-[200px]">
            <Center vertical={true}>
              <Flex gap={24}>
                <Stack gap={28}>
                  <TitleForm />
                  <IntroduceForm />
                  <SkillsetForm />
                  <ProjectForm />
                  <AchievementForm />
                  <QualificationForm />
                  <LinkForm />
                  <div className="w-full flex justify-end gap-5 mt-20">
                    <Button type="white" onClick={() => create()}>
                      생성
                    </Button>
                    <Button onClick={mutate}>생성 및 게시</Button>
                  </div>
                </Stack>
                <Sidebar />
              </Flex>
            </Center>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

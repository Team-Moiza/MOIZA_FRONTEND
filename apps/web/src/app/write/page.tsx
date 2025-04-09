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
import { useEffect } from "react";
import { TitleForm } from "../../components/write/TitleForm";
import { FormData } from "../../types/FormData";

export default function WritePortFolio() {
  const formMethod = useForm<FormData>();
  const navigate = useRouter();
  const client = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async () => {
      const data = formMethod.getValues();
      data.projects = data.projects.map((i) => ({
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
      await client.invalidateQueries(["my", "portfolio"] as any);
      navigate.replace("/my");
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
      return (await addPortfolio(data)) as any;
    },
    onSuccess: () => {
      client.invalidateQueries(["portfolio", "write"] as any);
      navigate.replace("/my");
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
                      저장
                    </Button>
                    <Button onClick={mutate}>저장 및 게시</Button>
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

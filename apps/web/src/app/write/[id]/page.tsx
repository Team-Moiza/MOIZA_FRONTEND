"use client";

import { Button, Center, Flex, Stack } from "@moija/ui";
import { IntroduceForm } from "./IntroduceForm";
import { FormProvider, useForm } from "react-hook-form";
import { Sidebar } from "./Sidebar";
import { SkillsetForm } from "./SkillsetForm";
import { ProjectForm } from "./ProjectForm";
import { LinkForm } from "./LinkForm";
import { AchievementForm } from "./AchievementForm";
import { QualificationForm } from "./QualificationForm";
import { default as Profile } from "../../my/edit/page";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { detailPortFolio, editPortFolio, publishPortFolio } from "../../../apis";
import { useEffect } from "react";
import { TitleForm } from "./TitleForm";

export type FormData = {
  job: null | string;
  school: null | string;
  profile: string;
  company: null | string;
  educationStatus: null | string;
  enrollmentEndDate: null | string;
  enrollmentStartDate: null | string;
  id: number;
  name: string;
  major: string;
  title: string;
  introduce: string;
  introduction: { introduce: string; url: string };
  codes: Array<{
    keyword: string;
    id: number;
  }>;
  projects: Array<{
    title: string;
    status: boolean;
    startDate: string;
    endDate: string;
    description: string;
    link: string;
  }>;
  awards: Array<{
    name: string;
    type: string;
    date: string;
    description: string;
    competitionName: string;
  }>;
  qualifications: Array<{
    name: string;
    score: string;
    date: string;
  }>;
  links: Array<{
    url: string;
  }>;
};

export default function WritePortFolio() {
  const formMethod = useForm<FormData>({ defaultValues: { title: "" } });
  const navigate = useRouter();
  const { id } = useParams();
  const client = useQueryClient();
  const { data } = useQuery({
    queryKey: ["portfolio", "write", id],
    queryFn: () => detailPortFolio(id as string),
  });
  const { mutate } = useMutation({
    mutationFn: async () => (await publishPortFolio(id as string)) as any,
    onSuccess: async () => {
      await client.invalidateQueries(["my", "portfolio"] as any);
      navigate.replace("/my");
    },
  });
  const { mutate: edit } = useMutation({
    mutationFn: async () => {
      const data = formMethod.getValues();
      data.projects = data.projects.map((i) => ({
        ...i,
        startDate: i.startDate.length === 10 ? i.startDate : `${i.startDate}-01`,
        endDate: i.endDate ? (i.endDate.length === 10 ? i.endDate : `${i.endDate}-01`) : "",
      }));
      return (await editPortFolio(id as string, data)) as any;
    },
    onSuccess: () => {
      client.invalidateQueries(["portfolio", "write", id] as any);
      navigate.replace("/my");
    },
  });

  useEffect(() => {
    formMethod.reset(data?.data);
  }, [data?.data]);

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
                    <Button type="white" onClick={() => edit()}>
                      저장
                    </Button>
                    <Button onClick={mutate}>게시</Button>
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

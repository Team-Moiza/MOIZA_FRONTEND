"use client";

import { Button, Center, Flex, Stack } from "@moija/ui";
import { BasicInfoForm } from "./BasicInfoForm";
import { IntroduceForm } from "./IntroduceForm";
import { FormProvider, useForm } from "react-hook-form";
import { Sidebar } from "./Sidebar";
import { SkillsetForm } from "./SkillsetForm";
import { ProjectForm } from "./ProjectForm";
import { LinkForm } from "./LinkForm";
import { AchievementForm } from "./AchievementForm";
import { QualificationForm } from "./QualificationForm";

export type FormData = {
  title: string;
  email: string;
  shortIntroduce: string;
  job: string;
  company: string;
  introduce: { introduce: string; url?: string };
  skillsets: Array<{
    name: string;
    id: number;
  }>;
  projects: Array<{
    title: string;
    skillset: string[];
    processing?: "진행중" | "서비스중" | "서비스 종료";
    date: string;
    introduce: string;
    url?: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  }>;
  achievements: Array<{
    name: string;
    contestName: string;
    type: string;
    date: string;
    introduce: string;
  }>;
  certifications: Array<{
    name: string;
    level: string;
    date: string;
    issuer: string;
  }>;
  links: Array<{
    title: string;
    url: string;
  }>;
};

export default function WritePortFolio() {
  const formMethod = useForm<FormData>({ defaultValues: { title: "김수아" } });

  const onSubmit = formMethod.handleSubmit(
    (data) => {
      console.log("Form Submitted Data:", data);
    },
    (errors) => {
      console.log(errors);
    }
  );

  console.log(formMethod.watch());

  return (
    <FormProvider {...formMethod}>
      <form className="w-screen pt-[80px]" onSubmit={onSubmit}>
        <div className="w-full h-screen pt-[90px]">
          <BasicInfoForm />
        </div>
        <div className="w-full bg-gray-100 pt-[80px] pb-[200px]">
          <Center vertical={true}>
            <Flex gap={24}>
              <Stack gap={28}>
                <IntroduceForm />
                <SkillsetForm />
                <ProjectForm />
                <AchievementForm />
                <QualificationForm />
                <LinkForm />
                <div className="w-full flex justify-end gap-5 mt-20">
                  <Button type="white">저장</Button>
                  <Button>게시</Button>
                </div>
              </Stack>
              <Sidebar />
            </Flex>
          </Center>
        </div>
      </form>
    </FormProvider>
  );
}

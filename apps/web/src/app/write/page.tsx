"use client";

import { Button, Center, Flex, Stack } from "@moija/ui";
import { BasicInfoForm } from "./BasicInfoForm";
import { EducationForm } from "./EducationForm";
import { IntroduceForm } from "./IntroduceForm";
import { FormProvider, useForm } from "react-hook-form";
import { Sidebar } from "./Sidebar";
import { SkillsetForm } from "./SkillsetForm";
import { ProjectForm } from "./ProjectForm";
import { LinkForm } from "./LinkForm";
import { AchievementForm } from "./AchievementForm";
import { QualificationForm } from "./QualificationForm";

type BasicInfoFormData = {
  email: string;
};

export default function WritePortFolio() {
  const formMethods = useForm<BasicInfoFormData>();

  const onSubmit = formMethods.handleSubmit(
    (data) => {
      console.log("Form Submitted Data:", data);
    },
    (errors) => {
      console.log("Form Errors:", errors);
    }
  );

  return (
    <FormProvider {...formMethods}>
      <form className="w-screen h-fit pt-[80px]" onSubmit={onSubmit}>
        <div className="w-full h-screen pt-[90px]">
          <div className="hidden" />
          <BasicInfoForm />
        </div>
        <div className="w-full h-[3500px] bg-gray-100 pt-[80px] pb-[200px]">
          <Center vertical={false}>
            <Flex gap={24}>
              <Stack gap={28}>
                <EducationForm />
                <IntroduceForm />
                <SkillsetForm />
                <ProjectForm />
                <AchievementForm />
                <QualificationForm />
                <LinkForm />
              </Stack>
              <Sidebar />
            </Flex>
            <div className="w-[1040px] flex justify-end gap-5 mt-20">
              <Button type="white">저장</Button>
              <Button>게시</Button>
            </div>
          </Center>
        </div>
      </form>
    </FormProvider>
  );
}

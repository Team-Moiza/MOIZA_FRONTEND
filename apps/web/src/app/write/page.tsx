'use client';

import { Center, Flex, Stack } from '@moija/ui';
import { BasicInfoForm } from './BasicInfoForm';
import { EducationForm } from './EducationForm';
import { IntroduceForm } from './IntroduceForm';
import { FormProvider, useForm } from 'react-hook-form';
import { Sidebar } from './Sidebar';

type BasicInfoFormData = {
  email: string;
};

export default function WritePortFolio() {
  const formMethods = useForm<BasicInfoFormData>();

  const onSubmit = formMethods.handleSubmit(
    (data) => {
      console.log('Form Submitted Data:', data);
    },
    (errors) => {
      console.log('Form Errors:', errors);
    }
  );

  return (
    <FormProvider {...formMethods}>
      <form className="w-screen h-fit pt-[80px]" onSubmit={onSubmit}>
        <div className="w-full h-screen pt-[90px]">
          <div className="hidden text-p1 text-p2 text-p3 text-p4 text-p5" />
          <BasicInfoForm />
        </div>
        <div className="w-full h-[3000px] bg-gray-100 pt-[80px] pb-[200px]">
          <Center vertical={false}>
            <Flex gap={24}>
              <Stack gap={28}>
                <EducationForm />
                <IntroduceForm />
              </Stack>
              <Sidebar />
            </Flex>
          </Center>
        </div>
      </form>
    </FormProvider>
  );
}

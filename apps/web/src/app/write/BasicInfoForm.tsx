import {
  Center,
  Dropdown,
  Flex,
  Image,
  Input,
  InputTemplate,
  Label,
  Search,
  Select,
  Spacing,
  Stack,
  Text,
  Textarea,
} from '@moija/ui';
import { useBoolean, useOutsideClickRef } from '@moija/hooks';
import { useFormContext } from 'react-hook-form';

type BasicInfoFormData = {
  email: string;
};

export const BasicInfoForm = () => {
  const { register } = useFormContext<BasicInfoFormData>();

  const { boolean: isOpen, toggle, setFalse: setClose } = useBoolean(false);
  const selectRef = useOutsideClickRef<HTMLDivElement>(setClose);

  return (
    <Center horizontal vertical={false}>
      <div className="w-[1040px]">
        <Spacing>
          <Stack gap={12}>
            <div className="w-[184px] h-[184px] rounded-[8px] bg-gray-200">
              <Center>
                <Image size={38} color="#787878" />
              </Center>
            </div>
            <Stack gap={8}>
              <div className="w-[184px] h-[44px] rounded-[8px] bg-gray-100 text-p5 text-gray-400 flex justify-center items-center">
                이미지 업로드
              </div>
              <Text className="text-caption1 text-gray-400">
                - 업로드 이미지 최대 크기 10MB
              </Text>
            </Stack>
          </Stack>
          <div className="w-[824px]">
            <Stack gap={28}>
              <Text className="text-h1 text-black">김수아</Text>
              <Stack gap={20}>
                <Flex gap={12}>
                  <InputTemplate>
                    <Label accent>이메일</Label>
                    <Input
                      type="email"
                      width={824}
                      isBig
                      placeholder="이메일을 입력해주세요"
                      defaultValue=""
                      {...register('email', {
                        required: '이메일을 입력해주세요.',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: '유효한 이메일 주소를 입력해주세요.',
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
                  />
                  <Text className="text-caption1 text-gray-400">
                    100자 이내
                  </Text>
                </InputTemplate>
                <InputTemplate>
                  <Label>개발 직무</Label>
                  <div ref={selectRef}>
                    <Dropdown
                      isOpen={isOpen}
                      items={['a', 'b', 'c']}
                      onSelect={() => {
                        alert();
                      }}>
                      <Select
                        width={824}
                        placeholder="직무를 선택해주세요"
                        isOpen={isOpen}
                        isBig
                        onClick={toggle}
                      />
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

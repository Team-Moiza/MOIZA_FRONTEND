import {
  ArrowDown,
  Delete,
  Dropdown,
  Input,
  InputTemplate,
  Label,
  Plus,
  Search,
  Select,
  Text,
  Textarea,
} from "@moija/ui";

export const QualificationForm = () => {
  return (
    <div className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className="text-h2 text-black">자격증</Text>

      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between w-full">
          <input
            className="text-h4 text-black placeholder:text-gray-400 w-full outline-none"
            placeholder="자격증명"
          />
          <div className="border-[1px] w-fit flex rounded-[4px] cursor-pointer">
            <div className="w-[32px] h-[32px] flex items-center justify-center border-r-[1px]">
              <ArrowDown size={24} color="#BFBFBF" />
            </div>
            <div className="w-[32px] h-[32px] flex items-center justify-center rotate-180 border-l-[1px]">
              <ArrowDown size={24} color="#BFBFBF" />
            </div>
            <div className="w-[32px] h-[32px] flex items-center justify-center">
              <Delete size={18} color="#BFBFBF" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-8">
          <InputTemplate>
            <Label>자격증명</Label>
            <Input width={776} placeholder="대회명을 입력하세요" />
          </InputTemplate>
          <div className="w-full flex justify-between">
            <InputTemplate>
              <Label>점수/급</Label>
              <Dropdown
                isOpen={false}
                items={["1급", "2급", "3급"]}
                onSelect={() => {
                  alert();
                }}
              >
                <Select width={247} placeholder="선택" isOpen={false} onClick={() => {}} />
              </Dropdown>
            </InputTemplate>
            <InputTemplate>
              <Label>취득 날짜</Label>
              <Input width={512} placeholder="YYYY.MM" />
            </InputTemplate>
          </div>
        </div>
      </div>
      <button className="flex items-center gap-2 cursor-pointer">
        <div className="rounded-full bg-primary-500 flex items-center justify-center w-[26px] h-[26px]">
          <Plus color="#FFFFFF" size={16} />
        </div>
        <span className="text-p5 text-black">수상 내역 추가</span>
      </button>
    </div>
  );
};

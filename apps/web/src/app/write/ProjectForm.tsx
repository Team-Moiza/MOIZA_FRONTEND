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

export const ProjectForm = () => {
  return (
    <div className="w-[832px] h-fit px-[28px] pt-[24px] pb-[32px] flex flex-col bg-white gap-5 rounded-[12px]">
      <Text className="text-h2 text-black">프로젝트</Text>
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between w-full">
          <input
            className="text-h4 text-black placeholder:text-gray-400 w-full outline-none"
            placeholder="프로젝트명"
          />
          <div className="border-[1px] w-fit flex rounded-[4px]">
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
            <Label>기술 스택</Label>
            <Input
              icon={<Search size={20} color="#787878" />}
              width={776}
              placeholder="기술 스택을 등록하세요"
            />
          </InputTemplate>
          <div className="w-full flex justify-between">
            <InputTemplate>
              <Label>진행 여부</Label>
              <Dropdown
                isOpen={false}
                items={["진행중", "서비스중", "서비스 종료"]}
                onSelect={() => {
                  alert();
                }}
              >
                <Select width={247} placeholder="선택" isOpen={false} onClick={() => {}} />
              </Dropdown>
            </InputTemplate>
            <InputTemplate>
              <Label>진행 기간</Label>
              <Input width={512} placeholder="YYYY.MM - YYYY.MM" />
            </InputTemplate>
          </div>
          <InputTemplate>
            <Label>프로젝트 설명</Label>
            <Textarea
              width={776}
              height={176}
              maxLength={1200}
              placeholder="자세한 설명을 작성해주세요"
            />
          </InputTemplate>
          <InputTemplate>
            <Label>추가 링크</Label>
            <Input width={776} placeholder="http://, https://" />
          </InputTemplate>
          <button className="flex items-center justify-center w-full rounded-[8px] gap-2 bg-gray-100 text-gray-500 h-[48px]">
            <Plus size={18} color="#787878" />
            섹션 추가
          </button>
        </div>
      </div>
      <button className="flex items-center gap-2 cursor-pointer">
        <div className="rounded-full bg-primary-500 flex items-center justify-center w-[26px] h-[26px]">
          <Plus color="#FFFFFF" size={16} />
        </div>
        <span className="text-p5 text-black">프로젝트 추가</span>
      </button>
    </div>
  );
};

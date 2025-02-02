import { useBoolean, useOutsideClickRef } from "@moija/hooks";
import { Dropdown, Input, InputTemplate, Label, Select } from "@moija/ui";

export const Modal = ({ closeModal }: { closeModal: () => void }) => {
  const { boolean: isOpen, toggle, setFalse: close } = useBoolean(false);
  const { boolean: isOpenAttend, toggle: toggleAttend, setFalse: closeAttend } = useBoolean(false);
  const selectRef = useOutsideClickRef<HTMLDivElement>(close);
  const attendRef = useOutsideClickRef<HTMLDivElement>(closeAttend);

  return (
    <div className="w-[832px] h-fit px-7 py-12 bg-white rounded-xl flex flex-col gap-8 items-end">
      <div className="w-full flex justify-between">
        <InputTemplate>
          <Label>학교 이름</Label>
          <Input width={512} placeholder="학교 이름" />
        </InputTemplate>
        <InputTemplate>
          <Label>전공명</Label>
          <div ref={selectRef}>
            <Dropdown
              isOpen={isOpen}
              items={["a", "b", "c"]}
              onSelect={(item) => {
                toggle();
              }}
            >
              <Select width={247} placeholder="전공을 선택해주세요" isOpen={isOpen} onClick={toggle} />
            </Dropdown>
          </div>
        </InputTemplate>
      </div>
      <div className="w-full flex justify-between">
        <InputTemplate>
          <Label>재학 상태</Label>
          <div ref={attendRef}>
            <Dropdown
              isOpen={isOpenAttend}
              items={["재학중", "졸업"]}
              onSelect={(item) => {
                toggleAttend();
              }}
            >
              <Select width={247} placeholder="재학 상태를 선택해주세요" isOpen={isOpenAttend} onClick={toggleAttend} />
            </Dropdown>
          </div>
        </InputTemplate>
        <InputTemplate>
          <Label>재학 기간</Label>
          <Input width={512} placeholder="YYYY.MM ~" pattern="\d{4}\.(0[1-9]|1[0-2]) ~ ?(\d{4}\.(0[1-9]|1[0-2]))?" title="'YYYY.MM ~ ' 또는 'YYYY.MM ~ YYYY.MM' 과 같은 형식이어야 합니다." />
        </InputTemplate>
      </div>
      <InputTemplate>
        <Label>회사명</Label>
        <Input width={776} placeholder="YYYY.MM ~" pattern="\d{4}\.(0[1-9]|1[0-2]) ~ ?(\d{4}\.(0[1-9]|1[0-2]))?" title="'YYYY.MM ~ ' 또는 'YYYY.MM ~ YYYY.MM' 과 같은 형식이어야 합니다." />
      </InputTemplate>
      <button className="px-6 py-2 bg-gray-100 rounded-lg text-gray-500 text-btn" onClick={closeModal}>
        저장
      </button>
    </div>
  );
};

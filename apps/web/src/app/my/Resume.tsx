import { useBoolean, useOutsideClickRef } from "@moija/hooks";
import { Menu, Stack, Toggle } from "@moija/ui";

interface IProp {
  title: string;
  date: string;
  id: string;
}

export const Resume = ({ title, date, id }: IProp) => {
  const { boolean: canView, toggle: toggleView } = useBoolean(false);
  const { boolean: menu, toggle: toggleMenu, setFalse: closeMenu } = useBoolean(false);
  const menuRef = useOutsideClickRef<HTMLDivElement>(closeMenu);

  return (
    <div className="w-[246.5px] h-[127.2px] p-4 rounded-lg bg-gray-100">
      <Stack gap={8}>
        <div className="w-full flex items-center justify-between">
          <span className="text-btn1 cursor-pointer hover:underline">{title}</span>
          <div className="relative">
            <button type="button" onClick={toggleMenu}>
              <Menu color="#9E9E9E" />
            </button>
            {menu && (
              <div className="absolute top-3 flex flex-col w-[80px] right-0 z-30" ref={menuRef}>
                <div className="relative h-fit">
                  <div className="w-0 h-0 border-8 border-l-transparent border-r-transparent border-t-transparent absolute right-0 border-gray-50 z-50 top-[1px]" />
                  <div className="w-0 h-0 border-[9px] border-l-transparent border-r-transparent border-t-transparent absolute  border-gray-200 z-40 -top-[1.6px] -right-[1px]" />
                  <div className="w-full mt-4 h-fit bg-gray-50 border-[1px] border-gray-200 rounded-md left-3 shadow-md absolute z-10 flex flex-col gap-1 p-2">
                    <span className="text-btn1 text-red-400 cursor-pointer">삭제</span>
                    <span className="text-btn1 text-gray-400 cursor-pointer">설정</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <span className="text-caption2 text-gray-500">{date}</span>
        <div className="mt-5 flex items-center justify-between ">
          <span className="text-caption2">공개 여부</span>
          <Toggle value={canView} toggle={toggleView} />
        </div>
      </Stack>
    </div>
  );
};

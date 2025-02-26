import { useBoolean, useOutsideClickRef } from "@moija/hooks";
import { Delete, DownloadResume, EditResume, Menu, Stack, Toggle } from "@moija/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { publishPortFolio } from "../../apis";
import { Dispatch, SetStateAction } from "react";

interface IProp {
  title: string;
  date: string;
  id: string;
  checked: boolean;
  setType: Dispatch<SetStateAction<`removeResume_${string}` | "removeAccount" | null>>;
}

export const Resume = ({ title, date, checked, id, setType }: IProp) => {
  const { boolean: menu, toggle: toggleMenu, setFalse: closeMenu } = useBoolean(false);
  const menuRef = useOutsideClickRef<HTMLDivElement>(closeMenu);
  const { refetch } = useQuery({ queryKey: ["my", "portfolio"] });
  const { mutate } = useMutation({ mutationFn: async () => (await publishPortFolio(id)) as any, onSuccess: refetch });

  return (
    <div className="w-[246.5px] h-[127.2px] p-4 rounded-lg bg-gray-100">
      <Stack gap={8}>
        <div className="w-full flex items-center justify-between">
          <Link className="text-btn1 cursor-pointer hover:underline" href={`/detail/${"test"}`}>
            {title}
          </Link>
          <div className="relative">
            <button type="button" onClick={toggleMenu}>
              <Menu color="#9E9E9E" />
            </button>
            {menu && (
              <div className="absolute top-3 flex flex-col w-[144px] right-0 z-30" ref={menuRef} onClick={() => closeMenu()}>
                <div className="relative h-fit">
                  <div className="w-0 h-0 border-8 border-l-transparent border-r-transparent border-t-transparent absolute right-0 border-gray-50 z-50 top-[1px]" />
                  <div className="w-0 h-0 border-[9px] border-l-transparent border-r-transparent border-t-transparent absolute  border-gray-200 z-40 -top-[1.6px] -right-[1px]" />
                  <div className="w-full mt-4 h-fit bg-white border-[1px] border-gray-50 rounded-md left-3 shadow-md absolute z-10 flex flex-col px-4 py-2 pt-4">
                    <button className="text-btn1 text-gray-600 cursor-pointer flex items-center w-full gap-3 py-[6px]">
                      <DownloadResume /> PDF 저장하기
                    </button>
                    <Link className="text-btn1 text-gray-600 cursor-pointer flex items-center w-full gap-3 py-[6px]" href={`/write/${id}`}>
                      <EditResume />
                      수정
                    </Link>
                    <button className="text-btn1 text-gray-600 cursor-pointer flex items-center w-full gap-1 py-[6px]" onClick={() => setType(`removeResume_${id}`)}>
                      <Delete />
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <span className="text-caption2 text-gray-500">{date}</span>
        <div className="mt-5 flex items-center justify-between ">
          <span className="text-caption2">공개 여부</span>
          <Toggle value={checked} toggle={mutate} />
        </div>
      </Stack>
    </div>
  );
};

import { useQuery, useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { Stack, Toggle } from "@moija/ui";
import Link from "next/link";
import { publishPortFolio } from "../../apis";
import { ActionMenu } from "@moija/ui";
import { Delete, DownloadResume, EditResume } from "@moija/ui";

interface IProp {
  title: string;
  date: string;
  id: string;
  checked: boolean;
  setType: Dispatch<SetStateAction<`removeResume_${string}` | "removeAccount" | null>>;
}

export const Resume = ({ title, date, checked, id, setType }: IProp) => {
  const { refetch } = useQuery({ queryKey: ["my", "portfolio"] });
  const { mutate } = useMutation({ mutationFn: async () => (await publishPortFolio(id)) as any, onSuccess: refetch });

  return (
    <div className="w-[246.5px] h-[127.2px] p-4 rounded-lg bg-gray-100">
      <Stack gap={8}>
        <div className="w-full flex items-center justify-between">
          <Link className="text-btn1 cursor-pointer hover:underline" href={`/detail/${id}`}>
            {title}
          </Link>
          <ActionMenu
            items={[
              { icon: <DownloadResume />, label: "PDF 저장하기", onClick: () => console.log("PDF 저장") },
              { icon: <EditResume />, label: "수정", onClick: () => console.log(`수정 페이지 이동: /write/${id}`) },
              { icon: <Delete />, label: "삭제", onClick: () => setType(`removeResume_${id}`) },
            ]}
          />
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

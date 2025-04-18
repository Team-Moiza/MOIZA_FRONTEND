"use client";

import { ActionMenu, Delete, DownloadResume, EditResume, Menu, Stack, Toggle, Filter } from "@moija/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { publishPortFolio, downloadPdf, pinnedUpdate } from "../../apis";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { PdfWaiting } from "./dialog/PdfWaiting";
import { PdfDownload } from "./dialog/PdfDownload";
import { toast, Bounce } from "react-toastify";

interface IProp {
  title: string;
  date: string;
  id: string;
  checked: boolean;
  setType: Dispatch<SetStateAction<`removeResume_${string}` | "removeAccount" | "logout" | null>>;
}

export const Resume = ({ title, date, checked, id, setType }: IProp) => {
  const { refetch } = useQuery({ queryKey: ["my", "portfolio"] });
  const { mutate } = useMutation({
    mutationFn: async () => (await publishPortFolio(id)) as any,
    onSuccess: refetch,
  });
  const router = useRouter();

  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<Blob | null>(null);

  const { mutate: generatePdf } = useMutation({
    mutationFn: downloadPdf,
    onMutate: () => {
      setIsGenerating(true);
      setPdfUrl(null);
    },
    onSuccess: (response: any) => {
      setIsGenerating(false);
      const blob = new Blob([response], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setPdfUrl(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${title}.pdf`;
      a.target = "_blank";
      a.click();
    },
    onError: () => {
      setIsGenerating(false);
      alert("PDF 생성에 실패했습니다. 다시 시도해주세요.");
    },
  });

  const { mutate: pinned } = useMutation({
    mutationFn: pinnedUpdate,
    onMutate: () => {
    },
    onSuccess: () => {
      toast.success('이력서 끌올에 성공하였습니다.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    },
    onError: (error: any) => {
      if (error?.response?.status === 422) {
        toast.error("끌올은 하루에 한 번만 가능합니다. 24시간이 지나지 않았습니다.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    },
  });

  return (
    <>
      {isGenerating && !pdfUrl && <PdfWaiting />}
      {pdfUrl && !isGenerating && <PdfDownload onClose={() => setPdfUrl(null)} />}

      <div className="w-[246.5px] h-[127.2px] p-4 rounded-lg bg-gray-100">
        <Stack gap={8}>
          <div className="w-full flex items-center justify-between">
            <Link className="text-btn1 cursor-pointer hover:underline" href={`/detail/${id}`}>
              {title.length > 10 ? title.slice(0, 10) + "..." : title}
            </Link>
            <ActionMenu
              items={[
                {
                  icon: <DownloadResume />,
                  label: "PDF 저장하기",
                  onClick: () => generatePdf(id),
                },
                {
                  icon: <EditResume />,
                  label: "수정",
                  onClick: () => router.push(`/write/${id}`),
                },
                {
                  icon: <Filter />,
                  label: "이력서 끌올",
                  onClick: () => pinned(id),
                },
                {
                  icon: <Delete />,
                  label: "삭제",
                  onClick: () => setType(`removeResume_${id}`),
                },
              ]}
            >
              <Menu color="#9E9E9E" />
            </ActionMenu>
          </div>
          <span className="text-caption2 text-gray-500">{date}</span>
          <div className="mt-5 flex items-center justify-between">
            <span className="text-caption2">공개 여부</span>
            <Toggle value={checked} toggle={mutate} />
          </div>
        </Stack>
      </div>
    </>
  );
};

"use client";

import {
    ActionMenu,
    Delete,
    DownloadResume,
    EditResume,
    Menu,
    Stack,
    Toggle,
} from "@moija/ui";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { publishPortFolio, downloadPdf } from "../../apis";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { PDFWaitingModal } from "./dialog/PdfWaiting";
import { PDFDownloadModal } from "./dialog/PDFDownload.tsx";

interface IProp {
    title: string;
    date: string;
    id: string;
    checked: boolean;
    setType: Dispatch<
        SetStateAction<`removeResume_${string}` | "removeAccount" | null>
    >;
}

export const Resume = ({ title, date, checked, id, setType }: IProp) => {
    const { refetch } = useQuery({ queryKey: ["my", "portfolio"] });
    const { mutate } = useMutation({
        mutationFn: async () => (await publishPortFolio(id)) as any,
        onSuccess: refetch,
    });
    const router = useRouter();

    const [isGenerating, setIsGenerating] = useState(false);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    const { mutate: generatePdf } = useMutation({
        mutationFn: downloadPdf,
        onMutate: () => {
            console.log("PDF 생성 시작");
            setIsGenerating(true);
            setPdfUrl(null);
        },
        onSuccess: (data: { url: string }) => {
            console.log("PDF 생성 완료", data);
            setIsGenerating(false);
            setPdfUrl(data.url);
        },
        onError: (error) => {
            console.error("PDF 생성 실패", error);
            setIsGenerating(false);
            alert("PDF 생성에 실패했습니다.");
        },
    });

    return (
        <>
            {isGenerating && !pdfUrl && <PDFWaitingModal />}
            {pdfUrl && !isGenerating && (
                <PDFDownloadModal
                    pdfUrl={pdfUrl}
                    title={title}
                    onClose={() => setPdfUrl(null)}
                />
            )}
            
            <div className="w-[246.5px] h-[127.2px] p-4 rounded-lg bg-gray-100">
                <Stack gap={8}>
                    <div className="w-full flex items-center justify-between">
                        <Link
                            className="text-btn1 cursor-pointer hover:underline"
                            href={`/detail/${id}`}
                        >
                            {title}
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
                                    icon: <Delete />,
                                    label: "삭제",
                                    onClick: () =>
                                        setType(`removeResume_${id}`),
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

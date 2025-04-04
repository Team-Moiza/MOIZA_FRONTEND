"use client";

import { Button } from "@moija/ui";
import { Dialog } from "./index";

interface PDFDownloadModalProps {
    onClose: () => void;
}

export const PdfDownload = ({ onClose }: PDFDownloadModalProps) => {
    return (
        <Dialog>
            <div className="flex flex-col gap-4 items-center">
                <span className="text-h4">PDF가 생성되었습니다!</span>
                <span className="text-p3 text-gray-500">
                    다운로드가 완료되었습니다.
                </span>
            </div>
            <div className="flex flex-col gap-3 items-center">
                <Button onClick={onClose}>닫기</Button>
            </div>
        </Dialog>
    );
};

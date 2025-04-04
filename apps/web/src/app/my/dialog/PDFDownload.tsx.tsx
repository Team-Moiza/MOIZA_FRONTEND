import { Dialog } from "./index";

interface PDFDownloadModalProps {
    pdfUrl: string;
    title: string;
    onClose: () => void;
}

export const PDFDownload = ({
    pdfUrl,
    title,
    onClose,
}: PDFDownloadModalProps) => {
    return (
        <Dialog>
            <div className="flex flex-col gap-4 items-center">
                <>
                    <span className="text-h4">PDF가 생성되었습니다!</span>
                    <span className="text-p3 text-gray-500">
                        아래 버튼을 클릭해 다운로드하세요.
                    </span>
                </>
                <a
                    href={pdfUrl}
                    download={`${title}.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary-500 text-white px-4 py-2 rounded-md"
                >
                    PDF 저장하기
                </a>
            </div>
        </Dialog>
    );
};

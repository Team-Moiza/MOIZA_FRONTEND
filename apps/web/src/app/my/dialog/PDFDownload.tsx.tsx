"use client";

interface PDFDownloadModalProps {
    pdfUrl: string;
    title: string;
    onClose: () => void;
}

export const PDFDownloadModal = ({
    pdfUrl,
    title,
    onClose,
}: PDFDownloadModalProps) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-black/30 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md w-[300px] text-center flex flex-col items-center gap-4">
                <span className="text-p2 font-bold">PDF가 생성되었습니다!</span>
                <span className="text-p3 text-gray-500">
                    아래 버튼을 클릭해 다운로드하세요.
                </span>
                <a
                    href={pdfUrl}
                    download={`${title}.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    PDF 다운로드
                </a>
                <button
                    className="text-gray-500 hover:text-black mt-2"
                    onClick={onClose}
                >
                    닫기
                </button>
            </div>
        </div>
    );
};

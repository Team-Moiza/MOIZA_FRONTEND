"use client";

interface DialogProps {
    children: React.ReactNode;
}

export const Dialog = ({ children }: DialogProps) => {
    return (
        <div className="fixed z-[101] inset-0 w-full h-screen bg-[#00000030] flex justify-center items-center">
            <div className="w-[430px] h-[260px] py-[52px] flex flex-col gap-[30px] bg-white rounded-2xl">
                {children}
            </div>
        </div>
    );
};

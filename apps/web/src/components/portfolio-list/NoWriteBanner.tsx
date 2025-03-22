import { RightArrow } from "@moija/ui";
import { useRouter } from "next/navigation";

const NoWriteBanner = () => {
    const router = useRouter();
    return (
        <div className="bg-[url('/noWriteBanner.png')] relative bg-cover bg-center overflow-hidden flex items-center justify-center rounded-[20px] min-h-[180px] min-w-[600px]">
            <div className="absolute w-[500px] gap-[45px] flex items-center h-full">
                <div className="text-h5 text-white">
                    지금 바로 나의 포트폴리오를 작성하고,
                    <br />
                    다른 사람의 포트폴리오도 구경해보세요!
                </div>
                <button
                    className="flex px-[22px] py-2 text-p2 bg-white text-primary-500 rounded-[10px] gap-1 items-center"
                    onClick={() => router.push("/write")}
                >
                    작성하기
                    <RightArrow color="#1ADFB4" size="22" />
                </button>
            </div>
        </div>
    );
};

export default NoWriteBanner;

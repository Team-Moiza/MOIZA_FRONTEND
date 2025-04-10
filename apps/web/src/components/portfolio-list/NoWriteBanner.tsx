import { RightArrow } from "@moija/ui";
import { useRouter } from "next/navigation";

const NoWriteBanner = () => {
    const router = useRouter();
    return (
        <div className="bg-[url('/noWriteBanner.png')] relative bg-cover bg-center overflow-hidden flex items-center justify-center rounded-[20px] min-h-[180px] min-w-[600px]">
            <div className="absolute w-[500px] flex items-center h-full">
                <div className="text-h5 text-white">
                    <span className="whitespace-nowrap">
                        지금 바로 내 이력서 작성하고,
                    </span>
                    <span className="whitespace-nowrap">
                        다른 사람의 이력서를 구경해보세요!
                    </span>
                </div>
                <button
                    className="whitespace-nowrap flex px-[22px] py-2 text-p2 bg-white text-primary-500 rounded-[10px] gap-1 items-center"
                    onClick={() => router.push("/my")}
                >
                    작성하기
                    <RightArrow color="#1ADFB4" size="22" />
                </button>
            </div>
        </div>
    );
};

export default NoWriteBanner;

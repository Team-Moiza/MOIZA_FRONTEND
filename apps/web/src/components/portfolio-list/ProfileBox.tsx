import { useState, useEffect } from "react";
import { Heart } from "@moija/ui";
import { likeApi } from "../../apis/likeApi";
import { Profile } from "../../types/portfolio";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { School, Job } from "../../enum/enums";

const ProfileBox = ({
    id,
    name,
    job,
    profile,
    school,
    introduce,
    codes,
    likeCnt,
    company,
}: Profile) => {
    const router = useRouter();

    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(Number(likeCnt));

    useEffect(() => {
        if (!localStorage.getItem("accessToken")) return;

        const fetchLikeStatus = async () => {
            const status = await likeApi.getLikeStatus(id);
            setLiked(status.isLiked);
        };

        fetchLikeStatus();
    }, [id]);

    const handleLikeClick = async (e: React.MouseEvent) => {
        e.stopPropagation();

        if (!localStorage.getItem("accessToken")) {
            alert("로그인이 필요한 서비스입니다.");
            window.location.href = "/login";
            return;
        }

        const newLikeState = !liked;
        setLiked(newLikeState);
        setLikesCount((prev) => (newLikeState ? prev + 1 : prev - 1));

        if (newLikeState) {
            await likeApi.addLike(id.toString());
        } else {
            await likeApi.removeLike(id.toString());
        }
    };

    return (
        <div
            className="min-w-[600px] w-full h-45 px-[50px] py-[34px] bg-white rounded-[20px] border border-gray-200 flex justify-between items-center cursor-pointer hover:bg-[#fafafa]"
            onClick={() => router.push(`/detail/${id}`)}
        >
            <div className="flex items-center gap-[30px]">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border-gray-100 border">
                    <Image
                        src={
                            profile ||
                            "https://i.pinimg.com/736x/04/15/e3/0415e3a6c56fc6e8f1e0ac1bed4b6aaf.jpg"
                        }
                        alt="프로필 사진"
                        fill // ✅ fill 속성
                        className="object-cover" // 부모 컨테이너를 가득 채우도록
                    />
                </div>

                <div className="flex flex-col w-[37vw]">
                    <div className="text-caption1 text-gray-500">
                        {company
                            ? `${company} / ${School[school as unknown as keyof typeof School]}`
                            : School[school as unknown as keyof typeof School]}
                    </div>
                    <div className="text-p2 text-black">
                        {Job[job as unknown as keyof typeof Job]} · {name}
                    </div>
                    <div className="text-p4 text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis break-all">
                        {introduce}
                    </div>
                    <div className="flex mt-2 gap-2">
                        {codes?.map((code, index) => (
                            <div
                                key={index}
                                className="px-[9px] py-1 bg-gray-100 rounded-[8px] text-caption2 text-gray-500"
                            >
                                {code.keyword}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex gap-[5px] w-10 items-center justify-center text-gray-500">
                <Heart
                    size={18}
                    onClick={handleLikeClick}
                    fill={liked ? "#e96221" : "none"}
                    stroke={liked ? "none" : "#5a5a5a"}
                />
                <div className="text-caption1 text-gray-500">{likesCount}</div>
            </div>
        </div>
    );
};

export default ProfileBox;

import Image from "next/image";
import { profileData } from "../../data/profileData";

const Profile = () => {
    return (
        <>
            <div className="flex items-center gap-8 mb-8">
                <div className="w-[184px] h-[184px] bg-[#e2e2e2] rounded-lg border border-[#e2e2e2] overflow-hidden">
                    <Image
                        src={profileData.imageUrl}
                        alt="프로필 이미지"
                        width={184}
                        height={184}
                    />
                </div>
                <div>
                    <div className="text-h1">{profileData.name}</div>
                    <p className="text-gray-600">{profileData.school}</p>
                    <p className="text-sm text-gray-500">{profileData.role}</p>
                </div>
            </div>
            <div className="h-[1px] bg-gray-200 mb-"></div>
        </>
    );
};

export default Profile;

import Image from "next/image";
import { profileData } from "../../data/profileData";
import { FormData } from "../../app/write/[id]/page";
// import { HashTag } from "@moija/ui";

const Profile = ({ data }: { data: FormData | undefined }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="px-3 py-[6px] items-center gap-1 flex bg-primary-100 rounded-full w-fit">
        {/* <HashTag /> */}
        {/* <div className="text-btn text-gray-600">{data?.name}</div> */}
      </div>
      <div className="w-full flex gap-8 mb-10 items-center">
        {/* <div className="w-[184px] h-[184px] bg-[#e2e2e2] rounded-lg border border-[#e2e2e2] overflow-hidden flex-shrink-0">
          <Image src={profileData.imageUrl} alt="프로필 이미지" width={184} height={184} layout="fixed" objectFit="cover" />
        </div> */}
        <div>
          <div className="gap-2.5 flex flex-col">
            {/* <div className="flex justify-between items-center">
              <div className="text-h5 text-black">{profileData.role}</div>
              <div className="text-p5 text-gray-400">{profileData.school}</div>
            </div> */}
            <div className="text-h1">{data?.name}</div>
            <div className="text-p4 text-black">{data?.introduction?.introduce}</div>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-200 mb-[72px]" />
    </div>
  );
};

export default Profile;

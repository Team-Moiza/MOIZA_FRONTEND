import { Assets } from '@repo/ui/src'; // Assets에서 이미지들을 import

const SchoolTour = () => {
  return (
    <div className="bg-background h-[calc(100vh_-_80px)] flex flex-col items-center">
      <div className="text-center">
        <div className="text-H1 text-text">SW마이스터고</div>
        <div className="text-subText1">소프트웨어 인재를 키우는 4개의 학교, 각 학교의 이야기를 확인해보세요.</div>
      </div>
      <div className="grid grid-cols-4 gap-[20px] mt-[40px]">
        <div className="bg-white p-6 rounded-[12px] shadow-md flex flex-col items-center">
          <img src={Assets.GSM.src} alt="GSM 로고" className="h-[80px] mb-4" />
          <p className="text-lg font-semibold">광주SW마이스터고등학교</p>
        </div>
        <div className="bg-white p-6 rounded-[12px] shadow-md flex flex-col items-center">
          <img src={Assets.DGSW.src} alt="DGSW 로고" className="h-[80px] mb-4" />
          <p className="text-lg font-semibold">대구SW마이스터고등학교</p>
        </div>
        <div className="bg-white p-6 rounded-[12px] shadow-md flex flex-col items-center">
          <img src={Assets.DSM.src} alt="DSM 로고" className="h-[80px] mb-4" />
          <p className="text-lg font-semibold">대덕SW마이스터고등학교</p>
        </div>
        <div className="bg-white p-6 rounded-[12px] shadow-md flex flex-col items-center">
          <img src={Assets.BSM.src} alt="BSM 로고" className="h-[80px] mb-4" />
          <p className="text-lg font-semibold">부산SW마이스터고등학교</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolTour;
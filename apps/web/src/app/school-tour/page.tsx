import { Assets } from '@repo/ui/src';

const SchoolTour = () => {
  const schoolLogo = [
    { logo: Assets.GSM, name: '광주SW마이스터고등학교' },
    { logo: Assets.DGSW, name: '대구SW마이스터고등학교' },
    { logo: Assets.DSM, name: '대덕SW마이스터고등학교' },
    { logo: Assets.BSM, name: '부산SW마이스터고등학교' },
  ];

  return (
    <div className="bg-background h-screen flex flex-col items-center">
      <div className="pt-[180px] w-[936px]">
        <div className="flex flex-col items-center">
        <div className="text-H1 text-text">SW마이스터고</div>
        <div className="text-subText1">소프트웨어 인재를 키우는 4개의 학교, 각 학교의 이야기를 확인해보세요.</div>
        </div>
      <div className="flex flex-row w-full justify-between mt-[60px]">
        {schoolLogo.map((school, index) => (
          <div key={index} className="flex flex-col items-center gap-[25px]">
            <div key={index} className="w-[220px] h-[290px] bg-white shadow-shadow rounded-[12px] flex flex-col items-center justify-center">
              <img src={school.logo.src} className="w-[80%]" />
            </div>
              <p className="text-p3 text-subText1">{school.name}</p>
          </div>
        ))}
      </div>
        </div>
    </div>
  );
};

export default SchoolTour;
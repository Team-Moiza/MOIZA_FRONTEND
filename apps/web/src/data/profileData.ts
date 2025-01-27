import { Profile } from "../types/profile";

export const profileData: Profile = {
    name: "김수아",
    school: "대구소프트웨어마이스터고등학교",
    role: "프론트엔드 개발자",
    imageUrl:
        "https://i.pinimg.com/564x/b3/ea/18/b3ea1834562fc0dcbe9a7f3c4ef7612b.jpg",
    introduction:"시스템을 개선하며 효율을 높이는 데 관심이 있습니다. 회사 업무를 위해 사용되는 안드로이드 레이아웃 XML파일을 JSON파일로 변경하기 위해 사용하던 라이브러리를 개선하였습니다. 기존 라이브러리는 하나의 XML을 변환하는데 4초 이상이 걸렸지만 이를 한 번에 다수의 파일을 변환할 수 있도록 개선하며 다수의 파일을 작업하더라도 1초 이내의 시간으로 단축하여‬ 팀의 업무 효율을 높였습니다. 새로운 문화를 도입하여 함께 성장하기를 좋아합니다.회사 프로젝트의 형상 관리로 프로젝트 파일 자체를 압축하여 파일을 공유하던 방식에서 Git을 사용하여 형상 관리를 하는 방법을 도입했습니다. 이 과정에서 코드 리뷰 문화 도입을 시도하였습니다. 사내 스터디를 주도적으로 이끌며 회사에서 사용될 새로운 기술과 팀 내 부족한 역량을 채우기 위해 노력하였습니다.",
    skills: [
        "TypeScript",
        "HTML/CSS",
        "JavaScript",
        "Redux",
        "MySQL",
        "AWS",
        "Express",
        "Node.js",
    ],
    projects: [
        {
            title: "2024 네모사 프로젝트",
            date: "2024.04",
        },
        {
            title: "컴슈 리뉴얼 메인 싸이트",
            date: "2024.03",
        },
    ],
    awards: [
        {
            title: "App Modernization FKS Jam 1위",
            date: "2023.07",
        },
    ],
    certificates: [
        {
            name: "정보처리기사",
            date: "2022.04",
        },
        {
            name: "컴퓨터활용능력",
            date: "2021.10",
        },
    ],
};

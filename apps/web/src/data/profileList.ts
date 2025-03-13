import { Profile } from "../types/portfolio";
import { Job, School } from "../enum/enums";

const dummyProfiles: Profile[] = [
    {
        id: "1",
        name: "홍길동",
        job: Job.FRONTEND_DEVELOPER,
        school: School.BSSM,
        profileImg:
            "https://i.pinimg.com/736x/04/15/e3/0415e3a6c56fc6e8f1e0ac1bed4b6aaf.jpg",
        company: "인프론",
        codes: [{ keyword: "React" }, { keyword: "JavaScript" }],
        likeCnt: 10,
        introduce: "안녕하세요! 프론트엔드 개발을 사랑하는 홍길동입니다.",
    },
    {
        id: "2",
        name: "김철수",
        job: Job.BACKEND_DEVELOPER,
        school: School.DGSM,
        profileImg:
            "https://i.pinimg.com/736x/04/15/e3/0415e3a6c56fc6e8f1e0ac1bed4b6aaf.jpg",
        company: null,
        codes: [{ keyword: "Node.js" }, { keyword: "Express" }],
        likeCnt: 5,
        introduce: "백엔드 개발에 열정을 가진 김철수입니다.",
    },
    {
        id: "3",
        name: "이영희",
        job: Job.UI_UX_DESIGNER,
        school: School.GSM,
        profileImg:
            "https://i.pinimg.com/736x/04/15/e3/0415e3a6c56fc6e8f1e0ac1bed4b6aaf.jpg",
        company: "카카오",
        codes: [{ keyword: "Figma" }, { keyword: "Adobe XD" }],
        likeCnt: 8,
        introduce: "사용자 경험을 최우선으로 생각하는 디자이너 이영희입니다.",
    },
    {
        id: "4",
        name: "박민수",
        job: Job.ANDROID_DEVELOPER,
        school: School.DGSM,
        profileImg:
            "https://i.pinimg.com/736x/04/15/e3/0415e3a6c56fc6e8f1e0ac1bed4b6aaf.jpg",
        company: "네이버",
        codes: [{ keyword: "Kotlin" }, { keyword: "Android" }],
        likeCnt: 12,
        introduce: "안드로이드 앱 개발에 열정을 가진 박민수입니다.",
    },
    {
        id: "5",
        name: "최지우",
        job: Job.FULLSTACK_DEVELOPER,
        school: School.BSSM,
        profileImg:
            "https://i.pinimg.com/736x/04/15/e3/0415e3a6c56fc6e8f1e0ac1bed4b6aaf.jpg",
        company: "(주)넥슨",
        codes: [{ keyword: "React" }, { keyword: "Node.js" }],
        likeCnt: 5,
        introduce:
            "프론트엔드와 백엔드를 모두 다루는 풀스택 개발자 최지우입니다.",
    },
];

export default dummyProfiles;

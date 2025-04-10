import { Profile } from "../types/portfolio";

const dummyProfiles: Profile[] = [
    {
        id: "1",
        name: "홍길동",
        job: "FRONTEND_DEVELOPER",
        school: "BSSM",
        profile:
            "https://i.pinimg.com/736x/04/15/e3/0415e3a6c56fc6e8f1e0ac1bed4b6aaf.jpg",
        company: "인프론",
        codes: [{ keyword: "React" }, { keyword: "JavaScript" }],
        likeCnt: 10,
        introduce: "안녕하세요! 프론트엔드 개발을 사랑하는 홍길동입니다.",
        enrollmentStartDate: "2020",
    },
    {
        id: "2",
        name: "김철수",
        job: "BACKEND_DEVELOPER",
        school: "DGSM",
        profile:
            "https://i.pinimg.com/736x/04/15/e3/0415e3a6c56fc6e8f1e0ac1bed4b6aaf.jpg",
        company: null,
        codes: [{ keyword: "Node.js" }, { keyword: "Express" }],
        likeCnt: 5,
        introduce: "백엔드 개발에 열정을 가진 김철수입니다.",
        enrollmentStartDate: "2021",
    },
    {
        id: "3",
        name: "이영희",
        job: "UI_UX_DESIGNER",
        school: "GSM",
        profile:
            "https://i.pinimg.com/736x/04/15/e3/0415e3a6c56fc6e8f1e0ac1bed4b6aaf.jpg",
        company: "카카오",
        codes: [{ keyword: "Figma" }, { keyword: "Adobe XD" }],
        likeCnt: 8,
        introduce: "사용자 경험을 최우선으로 생각하는 디자이너 이영희입니다.",
        enrollmentStartDate: "2019",
    },
];

export default dummyProfiles;

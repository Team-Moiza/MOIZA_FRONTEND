export enum School {
    BSSM = "부산소프트웨어마이스터고등학교",
    DGSM = "대구소프트웨어마이스터고등학교",
    DSM = "대덕소프트웨어마이스터고등학교",
    GSM = "광주소프트웨어마이스터고등학교",
}

export const SchoolKeyByValue: Record<School, keyof typeof School> = {
    [School.BSSM]: "BSSM",
    [School.DGSM]: "DGSM",
    [School.DSM]: "DSM",
    [School.GSM]: "GSM",
};

export enum Major {
    SOFTWARE = "소프트웨어개발과",
    EMBEDDED = "임베디드개발과",
    SECURITY = "정보보안과",
    IOT = "스마트IoT과",
    AI = "인공지능소프트웨어개발과",
}

export enum EducationStatus {
    ENROLLED = "재학중",
    GRADUATED = "졸업",
}

export enum Job {
    BACKEND_DEVELOPER = "서버/백엔드 개발자",
    FRONTEND_DEVELOPER = "프론트엔드 개발자",
    ANDROID_DEVELOPER = "안드로이드 개발자",
    IOS_DEVELOPER = "iOS 개발자",
    APP_DEVELOPER = "앱 개발자",
    GAME_DEVELOPER = "게임 개발자",
    DATA_ENGINEER = "데이터 엔지니어",
    DEVOPS_DEVELOPER = "DevOps 개발자",
    PLANNER = "기획자",
    UI_UX_DESIGNER = "UI/UX 디자이너",
    HW_EMBEDDED = "HW/임베디드",
    FULLSTACK_DEVELOPER = "풀스택 개발자",
    SECURITY_SPECIALIST = "정보보안 담당자",
    OTHER = "기타",
}

export const jobMap: Record<string, Job> = {
    GAME_DEVELOPER: Job.GAME_DEVELOPER,
    FRONTEND_DEVELOPER: Job.FRONTEND_DEVELOPER,
    BACKEND_DEVELOPER: Job.BACKEND_DEVELOPER,
    UI_UX_DESIGNER: Job.UI_UX_DESIGNER,
    ANDROID_DEVELOPER: Job.ANDROID_DEVELOPER,
    DEVOPS_DEVELOPER: Job.DEVOPS_DEVELOPER,
    FULLSTACK_DEVELOPER: Job.FULLSTACK_DEVELOPER,
    HW_EMBEDDED: Job.HW_EMBEDDED,
    IOS_DEVELOPER: Job.IOS_DEVELOPER,
    SECURITY_SPECIALIST: Job.SECURITY_SPECIALIST,
    PLANNER: Job.PLANNER,
    OTHER: Job.OTHER,
};

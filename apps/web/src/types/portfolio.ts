import { Job, School } from "../enum/enums";

export interface Profile {
    id: string;
    name: string;
    school: string;
    job: string;
    introduce: string;
    profile: string;
    enrollmentStartDate: string;
    likeCnt: number;
    codes?: { keyword: string }[];
    company: string | null;
}

export interface ProfileListProps {
    paginatedProfiles: Profile[];
    isLoggedOut?: boolean;
}

export interface FilterApply {
    sort: "dateSort:ASC" | "likeSort:DESC" | null;
    stacks: { id: number; keyword: string }[];
    schools: string[];
    company: "전체" | "재직중" | "미재직";
}

export type FormData = {
  job: null | string;
  school: null | string;
  profile: string;
  company: null | string;
  educationStatus: null | string;
  enrollmentEndDate: null | string;
  enrollmentStartDate: null | string;
  id: number;
  name: string;
  major: string;
  title: string;
  introduce: string;
  introduction: { introduce: string; url: string };
  codes: Array<{
    keyword: string;
    id: number;
  }>;
  projects: Array<{
    title: string;
    status: boolean;
    startDate: string;
    endDate: string;
    description: string;
    link: string;
  }>;
  awards: Array<{
    name: string;
    type: string;
    date: string;
    description: string;
    competitionName: string;
  }>;
  qualifications: Array<{
    name: string;
    score: string;
    date: string;
  }>;
  links: Array<{
    url: string;
  }>;
};
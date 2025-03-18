export interface Profile {
    company: string;
    name: string;
    school: string;
    role: string;
    summary: string;
    imageUrl: string;
    introduction: string;
    skills: string[];
    projects: Project[];
    awards: Award[];
    certificates: Certificate[];
    links: String[];
}

interface Project {
    title: string;
    date: string;
    desc: string;
    link?: string;
}

interface Award {
    title: string;
    date: string;
    desc: string;
}

interface Certificate {
    name: string;
    date: string;
}


export interface Profile {
  name: string;
  school: string;
  role: string;
  imageUrl: string;
  introduction: string;
  skills: string[];
  projects: Project[];
  awards: Award[];
  certificates: Certificate[];
}

interface Project {
  title: string;
  date: string;
}

interface Award {
  title: string;
  date: string;
}

interface Certificate {
  name: string;
  date: string;
}

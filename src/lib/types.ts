export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
}

export interface ResumeData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
}

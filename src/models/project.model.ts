export interface ProjectModel {
  name: string;
  startDate?: string;
  endDate?: string;
  jobTitle?: string;
  websiteUrl?: string;
  githubUrl?: string;
  bio: string;
  image: { src: string; alt: string };
  techStack: string[];
  inProgress?: boolean;
}

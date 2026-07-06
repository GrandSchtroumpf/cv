export interface Social {
  platform: string;
  url: string;
  displayUrl: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  title: string;
  status: string;
  timezone: string;
  avatarAlt: string;
  email: string;
  summary: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string;
  highlights: string[];
  links: { name: string; url: string }[];
}

export interface SkillGroup {
  category: string;
  tags: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  startYear: string;
  endYear: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
}

export interface Resume {
  profile: ProfileData;
  experience: ExperienceItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  languages: LanguageItem[];
  navigation: { label: string; href: string }[];
}

export interface LinkedIn {
  name: string;
  description: string;
  companies: string[];
  location: string;
  heroImageUrl: string;
  avatarImageUrl: string;
  url: string;
}

export const INITIAL_LINKEDIN: LinkedIn = {
  name: "Luke Runyon",
  description: "Software Engineer at Applied Research Associates",
  companies: ["ARA", "Louisiana State University"],
  location: "Shreveport, Louisiana, United States",
  heroImageUrl: "LSU-engineering.jpg",
  avatarImageUrl: "avatar.jpg",
  url: "https://www.linkedin.com/in/luke-runyon/",
};

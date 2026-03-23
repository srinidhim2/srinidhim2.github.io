export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  date: string;
}

export interface Post {
  id: number;
  images: string[];
  caption: string;
  likes: number;
  date: string;
}

export interface Profile {
  name: string;
  username: string;
  bio: string;
  avatar: string;
  stats: {
    posts: number;
    projects: number;
    followers: number;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

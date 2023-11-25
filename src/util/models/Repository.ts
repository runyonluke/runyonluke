export interface Repository {
  name: string;
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  description: string;
  url: string;
  watcher_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
}

export const EMPTY_REPOSITORY: Repository = {
  name: "",
  full_name: "",
  owner: {
    login: "",
    avatar_url: "",
    html_url: "",
  },
  description: "",
  url: "",
  watcher_count: 0,
  forks_count: 0,
  created_at: "",
  updated_at: "",
};

export interface Repository {
  name: string;
  full_name: string;
  owner:
    | {
        login: string;
        avatar_url: string;
        html_url: string;
      }
    | undefined;
  description: string;
  html_url: string;
  watcher_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
}

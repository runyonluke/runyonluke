import { Repository } from "../models/Repository";

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

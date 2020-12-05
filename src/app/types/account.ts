import { Profiler } from 'inspector';

export interface Account {
  email: string;
  password: string;
  profile: Profile;
  quizzes: string[];
}

export interface Profile {
  first_name: string;
  last_name: string;
}
import { UserType } from './user';

export type OptionType = {
  pollOptionId: number;
  description: string;
  voteCount: number;
  votePercentage: number;
};

export type PollType = {
  pollId: number;
  title: string;
  content: string;
  type: 'POLL';
  options: OptionType[];
  user: UserType;
};

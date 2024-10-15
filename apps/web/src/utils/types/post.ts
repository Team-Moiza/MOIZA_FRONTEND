import { UserType } from './user';

export type PostType = {
  title: string;
  content: string;
  date: string;
  writer: string;
  hashtags: string[];
  commentCount: number;
  likeCount: number;
};

export type DetailPostType = {
  postId: number;
  title: string;
  content: string;
  image: string[] | null;
  user: Pick<UserType, 'nickname' | 'profile'>;
};

export type PostWriteType = {
  title: string;
  content: string;
  image: string[];
};

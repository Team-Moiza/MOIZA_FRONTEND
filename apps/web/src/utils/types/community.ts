import { PollType } from './poll';
import { PostType } from './post';

export type CommunityDataType = (PostType | PollType)[];

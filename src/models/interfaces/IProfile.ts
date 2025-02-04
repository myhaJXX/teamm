import { IReview } from './IReview';
import { IPost } from './IPost';

export interface IProfile {
  tg?: string;
  login: string;
  games: string[] | null;
  friends: string[] | null;
  rating: number;
  comments: IReview[] | null;
  urComments: IReview[] | null;
  urPosts: IPost[] | null;
}

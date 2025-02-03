import { constAPIUserInfo } from '@/constants/constAPI';
import { IProfile } from '@/models/interfaces/IProfile';
import axios from 'axios';

export const apiUserInfo = async (): Promise<IProfile> => {
  const { data } = await axios.get(constAPIUserInfo);
  const userData: IProfile = {
    tg: data.tg,
    login: data.login,
    games: data.games,
    friends: data.friends,
    rating: data.rating,
    comments: data.comments,
    urComments: data.urComments,
    urPosts: data.urPosts,
  };
  return userData;
};

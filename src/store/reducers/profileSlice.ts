import { constProfileSlice } from '@/constants/constSlices';
import { ILoading } from '@/models/interfaces/ILoading';
import { ILogin } from '@/models/interfaces/ILogin';
import { IProfile } from '@/models/interfaces/IProfile';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IProfile & ILoading = {
  tg: null,
  login: '',
  games: null,
  friends: null,
  rating: 0,
  urPosts: null,
  comments: null,
  urComments: null,
  loadingProfile: false,
  error: false,
};

const profileSlice = createSlice({
  name: constProfileSlice,
  initialState,
  reducers: {
    profileRequest: (
      _state,
      _action: PayloadAction<ILogin & { actionButton: string }>
    ) => {
      console.log(_state);
    },
    profileSuccess: (state, action: PayloadAction<IProfile>) => {
      state = { ...action.payload };
      console.log(state);
    },
    profileError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    profileLoading: (state, action: PayloadAction<boolean>) => {
      state.loadingProfile = action.payload;
    },
  },
});

export const { profileRequest, profileSuccess, profileError, profileLoading } =
  profileSlice.actions;

export default profileSlice.reducer;

import { call, put, takeEvery } from 'redux-saga/effects';
import {
  profileError,
  profileLoading,
  profileRequest,
  profileSuccess,
} from './reducers/profileSlice';
import { userLogin } from '@/api/UserLogin';
import { apiUserInfo } from '@/api/ApiUserInfo';
import { IProfile } from '@/models/interfaces/IProfile';
import { apiUserRegister } from '@/api/ApiUserRegister';

function* sagaProfile(action: ReturnType<typeof profileRequest>) {
  try {
    yield put(profileLoading(false));
    yield put(profileError(false));
    const { tg, actionButton, ...basicInfo } = action.payload;
    let data: IProfile;
    if (actionButton === 'login') {
      const status: number = yield call(
        async () => await userLogin({ ...basicInfo })
      );

      if (status !== 200) {
        throw new Error('fetch data failed');
      }

      data = yield call(async () => await apiUserInfo());
    } else {
      data = yield call(
        async () => await apiUserRegister({ tg, ...basicInfo })
      );
    }

    yield put(profileSuccess(data));
  } catch (_error) {
    yield put(profileError(true));
  } finally {
    yield put(profileLoading(false));
  }
}

export default function* rootSaga() {
  yield takeEvery(profileRequest.type, sagaProfile);
}

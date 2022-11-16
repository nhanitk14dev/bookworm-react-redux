import { call, put, take } from 'redux-saga/effects'
import { createApiCall, usersRouteApi, userDetailRouteApi } from '../api'
import { ActionType } from '../models/user.model';

/* watches for all USERS_FETCH_REQUESTED actions and triggers an API call to fetch the user data.
   worker Saga: will be fired on USERS_FETCH_REQUESTED actions, add any for type
   take: https://redux-saga.js.org/docs/advanced/Channels
*/
export function* fetchUsers({ payload }: { payload?: string }): Generator<any> {
  try {
    const params = payload ? `?${payload}` : '';
    const response = yield call(createApiCall, { path: `${usersRouteApi}${params}` })
    yield put({ type: ActionType.USERS_FETCH_SUCCEEDED, payload: response })
  } catch (error) {
    yield put({ type: ActionType.USERS_FETCH_FAILED, payload: error })
  }
}

export function* fetchUserDetailsSaga(): Generator<any> {
  try {
    const { payload }: any = yield take(ActionType.USER_DETAIL_FETCH_REQUESTED)
    const response: any = yield call(createApiCall, { path: userDetailRouteApi(payload) })
    if(Object.keys(response).length) {
      yield put({ type: ActionType.USER_DETAIL_FETCH_SUCCEEDED, payload: response })
    }else {
      yield put({ type: ActionType.USER_DETAIL_FETCH_FAILED, payload: 'Not found item' })
    }

  } catch (error) {
    yield put({ type: ActionType.USER_DETAIL_FETCH_FAILED, payload: error })
  }
}
import { call, put } from 'redux-saga/effects'
import { createApiCall, usersRouteApi } from '../api'
import { MethodType } from '../models/user.model';

/* watches for all USERS_FETCH_REQUESTED actions and triggers an API call to fetch the user data.
   worker Saga: will be fired on USERS_FETCH_REQUESTED actions, add any for type
*/
export function* fetchUsers({ payload }: { payload?: string }): Generator<any> {
  try {
    const response: any = yield call(
      createApiCall, {
      method: MethodType.GET,
      path: `${usersRouteApi}?${payload}`
    }
    );
    yield put({ type: "USERS_FETCH_SUCCEEDED", payload: response });
  } catch (error) {
    yield put({ type: "USERS_FETCH_FAILED", payload: error });
  }
}
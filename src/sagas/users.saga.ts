import { call, put, take } from "redux-saga/effects";
import {
  createApiCall,
  usersRouteApi,
  userDetailRouteApi,
  updateUserDetailRouteApi,
  createUserRouteApi,
} from "../api";
import { ActionType, IAction, MethodType, IUser } from "../models";

/* watches for all USERS_FETCH_REQUESTED actions and triggers an API call to fetch the user data.
   worker Saga: will be fired on USERS_FETCH_REQUESTED actions, add any for type
   take: https://redux-saga.js.org/docs/advanced/Channels
*/
export function* fetchUsers({ payload }: { payload?: string }): Generator<any> {
  try {
    const params = payload ? `?${payload}` : "";
    const response = yield call(createApiCall, {
      path: `${usersRouteApi}${params}`,
    });
    yield put({ type: ActionType.USERS_FETCH_SUCCEEDED, payload: response });
  } catch (error) {
    yield put({ type: ActionType.USERS_FETCH_FAILED, payload: error });
  }
}

export function* fetchUserDetailsSaga(): Generator<any> {
  try {
    const { payload }: any = yield take(ActionType.USER_DETAIL_FETCH_REQUESTED);
    const response: any = yield call(createApiCall, {
      path: userDetailRouteApi(payload),
    });
    if (Object.keys(response).length) {
      yield put({
        type: ActionType.USER_DETAIL_FETCH_SUCCEEDED,
        payload: response,
      });
    } else {
      yield put({
        type: ActionType.USER_DETAIL_FETCH_FAILED,
        payload: "Not found item",
      });
    }
  } catch (error) {
    yield put({ type: ActionType.USER_DETAIL_FETCH_FAILED, payload: error });
  }
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypet
export function* updateUserDetail(action: IAction<IUser>): Generator<any> {
  try {
    const payload = action.payload;
    if (payload?.id) {
      const response = yield call(createApiCall, {
        path: updateUserDetailRouteApi(payload.id),
        payload: payload,
        method: MethodType.PUT,
      });

      yield put({ type: ActionType.USER_UPDATE_SUCCEEDED, payload: response });
    }
  } catch (error) {
    yield put({ type: ActionType.USER_UPDATE_FAILED, payload: error });
  }
}

export function* addUser(action: IAction<IUser>): Generator<any> {
  try {
    const response = yield call(createApiCall, {
      path: createUserRouteApi,
      payload: action.payload,
      method: MethodType.POST,
    });

    yield put({ type: ActionType.USER_CREATE_SUCCEEDED, payload: response });
  } catch (error) {
    yield put({ type: ActionType.USER_CREATE_FAILED, payload: error });
  }
}

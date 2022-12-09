import { put, call, takeLatest } from "redux-saga/effects";
import { ActionType, IAction, LoginFormType } from "../models";
import { createApiCall, usersRouteApi } from "../api";

export function* loginSaga(action: IAction<LoginFormType>): Generator<any> {
  const { email, password } = action.payload;
  try {
    const params = `?email=${email}&password=${password}`;
    const response = yield call(createApiCall, {
      path: `${usersRouteApi}${params}`,
    });

    const data = Array.isArray(response) ? response.shift() : response;
    if (data?.email) {
      yield put({ type: ActionType.USER_LOGIN_SUCCEEDED, payload: data });
    } else {
      yield put({
        type: ActionType.USER_LOGIN_FAILED,
        payload: {
          message: "Email or password incorrect",
        },
      });
    }
  } catch (error) {
    yield put({ type: ActionType.USER_LOGIN_FAILED, payload: error });
  }
}

export default function* authenticationSaga() {
  yield takeLatest(ActionType.USER_LOGIN_REQUESTED as any, loginSaga);
}

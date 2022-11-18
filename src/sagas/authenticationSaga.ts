import { put, takeLatest } from "redux-saga/effects";
import { ActionType } from "../models";

export function* loginSaga({ payload }: any) {
  // todo: call api, just set user as default Demo 
  const { email, password } = payload;
  if (email === 'test@gmail.com' && password === '1234') {
    let auth = {
      "id": 1,
      "name": "test",
      "email": "test@mail.com",
      "address": "South street",
      "token": "token-xxx1x1",
      "password": "1234"
    }
    yield put({ type: ActionType.USER_LOGIN_SUCCEEDED, payload: auth })
  } else {
    yield put({ type: ActionType.USER_LOGIN_FAILED, payload })
  }
}

export default function* authenticationSaga() {
  yield takeLatest(ActionType.USER_LOGIN_REQUESTED as any, loginSaga);
  // todo add register user here
}
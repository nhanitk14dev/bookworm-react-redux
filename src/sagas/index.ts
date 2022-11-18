
import { all, fork, takeEvery } from 'redux-saga/effects'
import { helloSaga } from './hello.saga'
import { ActionType } from '../models'
import { 
  fetchUsers, 
  fetchUserDetailsSaga,
  updateUserDetail,
  addUser 
} from './users.saga'

import wathUserAuthentication from './authenticationSaga'


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* rootSaga() {
  yield all([
    helloSaga()
  ]);

  /*
    Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
    Allows concurrent fetches of user.
    set action type as any to resolve 'No overload matches this call.
  The last overload gave the following error.'
  */
  yield takeEvery( ActionType.USERS_FETCH_REQUESTED as any, fetchUsers);
  yield takeEvery(ActionType.USER_DETAIL_FETCH_REQUESTED as any, fetchUserDetailsSaga);
  yield takeEvery( ActionType.USER_UPDATE_REQUESTED as any, updateUserDetail);
  yield takeEvery( ActionType.USER_CREATE_REQUESTED as any, addUser);

  /*
    Use fork
  */

  yield fork(wathUserAuthentication);
}

export default rootSaga;

import { all, takeEvery } from 'redux-saga/effects'
import { fetchUsers, fetchUserDetailsSaga } from './users.saga'
import { helloSaga } from './hello.saga'
import { ActionType } from '../models/user.model'
import { take } from 'lodash';

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
}

export default rootSaga;
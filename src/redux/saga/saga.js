import { put, takeEvery, all, call } from 'redux-saga/effects'
import { requestUsers, requestUsersError, requestUsersSuccess, requestLoadUsers, requestLoadUsersSuccess, requestLoadUsersError, putLoadedUsers } from '../actions/usersActions';
import {FETCHED_USERS, LOAD_USERS} from '../types/actionsType';

export function* watchFetchUsers() {
  yield takeEvery(FETCHED_USERS, fetchUsersAsync)
}

export function* fetchUsersAsync() {
  try {
    yield put(requestUsers());
    const data = yield call(() => {
      return fetch('https://randomuser.me/api/?page=1&results=20')
              .then(res => res.json())   
    }
  );
    yield put(requestUsersSuccess(data))
  } catch(error) {
    console.log(error)
    yield put(requestUsersError(error))
  }
}

export function* watchLoadUsers() {
  yield takeEvery(LOAD_USERS, loadUsersAsync)
}

export function* loadUsersAsync() {
  const min = Math.ceil(1);
  const max = Math.floor(100);
  const randomPage = Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум
  try {
    yield put(requestLoadUsers());
    const data = yield call(() => {
      return fetch(`https://randomuser.me/api/?page=${randomPage}&results=20`)
              .then(res => res.json())
    }
  );
    yield put(requestLoadUsersSuccess(data))
    yield put(putLoadedUsers(data))
  } catch(error) {
    yield put(requestLoadUsersError(error))
  }
}


export default function* rootSaga() {
  yield all([
    watchFetchUsers(),
    watchLoadUsers()
  ])
}
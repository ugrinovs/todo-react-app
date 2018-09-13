import { takeLatest, call, all, put } from 'redux-saga/effects';
import { request } from 'services/http';

function* login({ loginData }) {
  try {
    const { data } = yield call(request.post, '/auth/local', {
      identifier: loginData.username,
      password: loginData.password
    });

    localStorage.setItem('jwtToken', data.jwt);
    yield put({ type: 'LOGIN_SUCCESS', token: data.jwt });
    console.log(data);
  } catch (error) {}
}

function* auth() {
  const token = localStorage.getItem('jwtToken');
  if (token) {
    yield put({ type: 'LOGIN_SUCCESS', token });
  }
}

function* logout() {
  localStorage.removeItem('jwtToken');
  yield put({ type: 'LOGOUT_SUCCESS' });
}

export default function* mainLoginSaga() {
  return yield all[
    (yield takeLatest('REQUEST_LOGIN', login),
    yield takeLatest('REQUEST_LOGOUT', logout),
    yield auth())
  ];
}

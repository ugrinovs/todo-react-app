import { put, takeLatest, takeEvery, call, all } from 'redux-saga/effects';
import { request } from 'services/http';

function* fetchTodos(action) {
  try {
    yield put({ type: 'INCREMENT_LOADER' });
    const { data } = yield call(request.get, '/todo', {
      params: action ? action.options : {}
    });

    yield put({ type: 'FETCH_TODOS_SUCCESS', todos: data });
    yield put({ type: 'DECREMENT_LOADER' });
  } catch (error) {
    yield put({ type: 'FETCH_TODOS_ERROR', error: 'Login to view this page.' });
    yield put({ type: 'DECREMENT_LOADER' });
  }
}

function* deleteTodo({ id }) {
  try {
    yield call(request.delete, `/todo/${id}`);
    yield put({ type: 'DELETE_TODO', id });
  } catch (error) {
    console.log(error);
  }
}

function* watchDeleteTodo() {
  try {
    yield takeEvery('REQUEST_DELETE_TODO', deleteTodo);
  } catch (error) {
    console.log(error);
  }
}

function* saveTodo({ todo }) {
  try {
    const { data } = yield call(request.post, '/todo', todo);
    yield put({ type: 'SAVE_TODO', todo: data });
  } catch (error) {
    console.log(error);
  }
}

function* updateTodo({ todo }) {
  try {
    const { data } = yield call(request.put, `/todo/${todo.id}`, todo);
    yield put({ type: 'UPDATE_TODO', todo: data });
  } catch (error) {
    console.log(error);
  }
}

function* watchFetchTodos() {
  yield takeLatest('REQUEST_FETCH_TODOS', fetchTodos);
}

export default function* todosSaga() {
  yield all([
    fetchTodos(),
    watchFetchTodos(),
    watchDeleteTodo(),
    yield takeLatest('REQUEST_SAVE_TODO', saveTodo),
    yield takeLatest('REQUEST_UPDATE_TODO', updateTodo),
    yield takeEvery('LOGIN_SUCCESS', fetchTodos),
    yield takeEvery('LOGOUT_SUCCESS', fetchTodos)
  ]);
}

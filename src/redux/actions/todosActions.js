export function updateFetchedTodos(todos) {
  return {
    type: 'FETCH_TODOS_SUCCESS',
    todos
  };
}

export function requestFetchTodos(options) {
  return {
    type: 'REQUEST_FETCH_TODOS',
    options
  };
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id
  };
}

export function requestDeleteTodo(id) {
  return {
    type: 'REQUEST_DELETE_TODO',
    id
  };
}

export function saveTodo(todo) {
  return {
    type: 'SAVE_TODO',
    todo
  };
}

export function requestSaveTodo(todo) {
  return {
    type: 'REQUEST_SAVE_TODO',
    todo
  };
}

export function updateTodo(todo) {
  return {
    type: 'UPDATE_TODO',
    todo
  };
}

export function fetchTodosError(error) {
  return {
    type: 'FETCH_TODOS_ERROR',
    error
  };
}

export function requestUpdateTodo(todo) {
  return {
    type: 'REQUEST_UPDATE_TODO',
    todo
  };
}

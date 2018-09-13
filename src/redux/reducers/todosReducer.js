import reducerWithActionMappings from '../reducerWithActionMappings';

export default reducerWithActionMappings(
  {
    FETCH_TODOS_SUCCESS: updateTodos,
    DELETE_TODO: deleteTodo,
    SAVE_TODO: saveTodo,
    UPDATE_TODO: updateTodo,
    FETCH_TODOS_ERROR: onError
  },
  { data: [] }
);

function updateTodos(state, { todos }) {
  return todos;
}

function deleteTodo(state, { id }) {
  return {
    ...state,
    data: state.data.filter(todo => todo.id !== id)
  };
}

function saveTodo(state, { todo }) {
  return {
    ...state,
    data: [...state.data, todo.data]
  };
}

function updateTodo(state, { todo }) {
  const data = state.data.map(
    currentTodo => (currentTodo.id === todo.id ? todo : currentTodo)
  );
  return {
    ...state,
    data
  };
}

function onError(state, { error }) {
  return {
    ...state,
    error
  }
}
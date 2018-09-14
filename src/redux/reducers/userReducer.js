import reducerWithActionMappings from '../reducerWithActionMappings';

export default reducerWithActionMappings(
  {
    LOGIN_SUCCESS: updateAuth,
    LOGOUT_SUCCESS: updateAuth,
    VALIDATION_ERROR: addValidationError
  },
  {
    authenticated: false,
    error: {
      hasError: false,
      message: ''
    }
  }
);

function updateAuth(state, { token }) {
  return {
    ...state,
    authenticated: !!token,
    error: {
      hasError: false,
      message: ''
    }
  };
}

function addValidationError(state, { error }) {
  return {
    ...state,
    error: {
      hasError: true,
      ...error
    }
  }
}

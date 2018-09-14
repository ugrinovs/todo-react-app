export function requestLogin(loginData) {
  return {
    type: 'REQUEST_LOGIN',
    loginData
  };
}

function loginSuccess(token) {
  return {
    type: 'LOGIN_SUCCESS',
    token
  };
}

export function requestLogout() {
  return {
    type: 'REQUEST_LOGOUT'
  };
}

function logoutSuccess() {
  return {
    type: 'LOGOUT_SUCCESS'
  };
}

function validationError(error) {
  return {
    type: 'VALIDATION_ERROR',
    error
  }
}

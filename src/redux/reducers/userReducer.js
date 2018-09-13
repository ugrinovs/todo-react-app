import reducerWithActionMappings from '../reducerWithActionMappings';

export default reducerWithActionMappings(
  {
    LOGIN_SUCCESS: updateAuth,
    LOGOUT_SUCCESS: updateAuth
  },
  false
);

function updateAuth(state, { token}) {
  return !!token;
}

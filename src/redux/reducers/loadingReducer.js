import reducerWithActionMappings from '../reducerWithActionMappings';

export default reducerWithActionMappings(
  {
    INCREMENT_LOADER: incrementLoader,
    DECREMENT_LOADER: decrementLoader
  },
  0
);

function incrementLoader(state) {
  return state + 1;
}

function decrementLoader(state) {
  return state - 1;
}

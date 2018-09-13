export default function reducerWithActionMappings(reducers, initialState) {
  return (state = initialState, action) => {
    const reducer = reducers[action.type];

    return reducer ? reducer(state, action) : state;
  };
}

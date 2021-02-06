const initialState = { counter: 0, results: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1, results: state.results };
    case "DECREMENT":
      return { counter: state.counter - 1, results: state.results };
    case "ADD":
      return { counter: state.counter + action.value, results: state.results };
    case "SUBTRACT":
      return { counter: state.counter - action.value, results: state.results };
    case "STORE_RESULT":
      return {
        counter: state.counter,
        results: state.results.concat(state.counter),
      };
    case "DELETE_RESULT":
      return {
        counter: state.counter,
        results: state.results
          .slice(0, action.index)
          .concat(state.results.slice(action.index + 1)),
      };
    default:
      return state;
  }
};

export default reducer;

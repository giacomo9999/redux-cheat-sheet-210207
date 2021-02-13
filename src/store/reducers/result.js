import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = { results: [1, 2, 3] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat(action.value),
      });

    case actionTypes.DELETE_RESULT:
      return updateObject(state, {
        results: state.results
          .slice(0, action.index)
          .concat(state.results.slice(action.index + 1)),
      });

    default:
      return state;
  }
};

export default reducer;

import * as actionTypes from "./actionTypes";

export const saveResult = (result) => {
  return { type: actionTypes.STORE_RESULT, value: result };
};

export const storeResult = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = (index) => {
  return { type: actionTypes.DELETE_RESULT, index: index };
};

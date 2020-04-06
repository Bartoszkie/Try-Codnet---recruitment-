import HeaderActionTypes from "./header.types";

const INITIAL_STATE = {
  selectedCurrency: "USD",
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.CHANGE_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;

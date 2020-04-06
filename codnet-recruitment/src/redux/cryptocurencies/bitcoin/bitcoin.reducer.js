import BitcoinActionTypes from "./bitcoin.types";

const INITIAL_STATE = {
  cryptocurrency: null,
  loading: false,
  errorMessage: undefined,
};

const CryptoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BitcoinActionTypes.BITCOIN_START:
      return {
        ...state,
        loading: true,
      };

    case BitcoinActionTypes.BITCOIN_SUCCESS:
      return {
        ...state,
        loading: false,
        cryptocurrency: action.payload,
      };
    case BitcoinActionTypes.BITCOIN_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default CryptoReducer;

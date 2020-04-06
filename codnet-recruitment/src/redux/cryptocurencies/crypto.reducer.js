import CryptoActionTypes from "./crypto.types";

const INITIAL_STATE = {
  cryptocurrency: null,
  loading: false,
  errorMessage: undefined,
};

const CryptoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CryptoActionTypes.BITCOIN_START:
    case CryptoActionTypes.ENUMERUM_START:
    case CryptoActionTypes.EOS_START:
      return {
        ...state,
        loading: true,
      };

    case CryptoActionTypes.BITCOIN_SUCCESS:
    case CryptoActionTypes.ENUMERUM_SUCCESS:
    case CryptoActionTypes.EOS_SUCCESS:
      return {
        ...state,
        loading: false,
        cryptocurrency: action.payload,
      };
    case CryptoActionTypes.BITCOIN_ERROR:
    case CryptoActionTypes.ENUMERUM_ERROR:
    case CryptoActionTypes.EOS_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default CryptoReducer;
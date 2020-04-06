import EnumerumActionTypes from "./enumerum.types";

const INITIAL_STATE = {
  cryptocurrency: null,
  loading: false,
  errorMessage: undefined,
};

const CryptoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EnumerumActionTypes.ENUMERUM_START:
      return {
        ...state,
        loading: true,
      };

    case EnumerumActionTypes.ENUMERUM_SUCCESS:
      return {
        ...state,
        loading: false,
        cryptocurrency: action.payload,
      };
    case EnumerumActionTypes.ENUMERUM_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default CryptoReducer;

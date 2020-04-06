import { combineReducers } from "redux";

//Reducers
import cryptoReducer from "./cryptocurencies/crypto.reducer";

const rootReducer = combineReducers({
  crypto: cryptoReducer,
});

export default rootReducer;

import { combineReducers } from "redux";

//Reducers
import cryptoReducer from "./cryptocurencies/crypto.reducer";
import headerReducer from "./header/header.reducer";

const rootReducer = combineReducers({
  crypto: cryptoReducer,
  header: headerReducer,
});

export default rootReducer;

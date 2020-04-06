import { all, call } from "redux-saga/effects";

import { cryptoSagas } from "./cryptocurencies/crypto.saga";

export default function* rootSaga() {
  yield all([call(cryptoSagas)]);
}

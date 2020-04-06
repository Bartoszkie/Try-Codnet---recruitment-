import { all, takeLatest, call, put } from "redux-saga/effects";
import { HeaderChangeCurrency } from "./header.actions";
import CryptoActionTypes from "../cryptocurencies/crypto.types";

export function* resetCurrency() {
  yield put(HeaderChangeCurrency());
}

export function* cryptoChange() {
  yield takeLatest(CryptoActionTypes.FETCH_START, resetCurrency);
}

export function* cryptoChanges() {
  yield all([call(cryptoChange)]);
}

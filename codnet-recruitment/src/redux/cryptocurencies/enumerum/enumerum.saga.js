import { all, takeLatest, call, put } from "redux-saga/effects";
import EnumerumActionTypes from "../enumerum/enumerum.types";
import {
  fetchInfoAboutEnumerumSuccess,
  fetchInfoAboutEnumerumError,
} from "./enumerum.actions";

export function* fetchEnumerumAsync() {
  try {
    const fetchDataAboutBitcoin = yield fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin"
    );
    const fetchDataAboutBitcoinJSON = yield fetchDataAboutBitcoin.json();
    yield put(fetchInfoAboutEnumerumSuccess(fetchDataAboutBitcoinJSON));
  } catch (error) {
    yield put(fetchInfoAboutEnumerumError(error));
  }
}

export function* fetchBitcoinStart() {
  yield takeLatest(EnumerumActionTypes.ENUMERUM_START, fetchEnumerumAsync);
}

export function* bitcoinSagas() {
  yield all([call(fetchBitcoinStart)]);
}

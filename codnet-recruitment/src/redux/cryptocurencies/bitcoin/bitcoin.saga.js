import { all, takeLatest, call, put } from "redux-saga/effects";
import BitcoinActionTypes from "./bitcoin.types";
import {
  fetchInfoAboutBitcoinSuccess,
  fetchInfoAboutBitcoinError,
} from "./bitcoin.actions";

export function* fetchBitcoinAsync({payload: pathname}) {
  console.log(pathname);

  try {
    const fetchDataAboutBitcoin = yield fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin"
    );
    const fetchDataAboutBitcoinJSON = yield fetchDataAboutBitcoin.json();
    yield put(fetchInfoAboutBitcoinSuccess(fetchDataAboutBitcoinJSON));
  } catch (error) {
    yield put(fetchInfoAboutBitcoinError(error));
  }
}

export function* fetchBitcoinStart() {
  yield takeLatest(BitcoinActionTypes.BITCOIN_START, fetchBitcoinAsync);
}

export function* bitcoinSagas() {
  yield all([call(fetchBitcoinStart)]);
}

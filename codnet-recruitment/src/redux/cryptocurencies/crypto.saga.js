import { all, takeLatest, call, put } from "redux-saga/effects";
import CryptoActionTypes from "./crypto.types";
import {
  fetchInfoAboutBitcoinSuccess,
  fetchInfoAboutBitcoinError,
  fetchInfoAboutEnumerumSuccess, 
  fetchInfoAboutEnumerumError, 
  fetchInfoAboutEOSError, 
  fetchInfoAboutEOSSuccess
} from "./crypto.actions";

export function* fetchCryptoAsync({ payload: pathname }) {
  if (pathname === "/bitcoin") {
    try {
      const fetchDataAboutBitcoin = yield fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin"
      );
      const fetchDataAboutBitcoinJSON = yield fetchDataAboutBitcoin.json();
      yield put(fetchInfoAboutBitcoinSuccess(fetchDataAboutBitcoinJSON));
    } catch (error) {
      yield put(fetchInfoAboutBitcoinError(error));
    }
  } else if (pathname === "/ethereum") {
    console.log(pathname);
    
    try {
      const fetchDataAboutEnumerum = yield fetch(
        "https://api.coingecko.com/api/v3/coins/ethereum"
      );
      const fetchDataAboutEnumerumJSON = yield fetchDataAboutEnumerum.json();
      yield put(fetchInfoAboutEnumerumSuccess(fetchDataAboutEnumerumJSON));
    } catch (error) {
      yield put(fetchInfoAboutEnumerumError(error));
    }
  } else if (pathname === "/eos") {
    console.log(pathname);
    try {
      const fetchDataAboutEOC = yield fetch(
        "https://api.coingecko.com/api/v3/coins/eos"
      );
      const fetchDataAboutEOCJSON = yield fetchDataAboutEOC.json();
      yield put(fetchInfoAboutEOSSuccess(fetchDataAboutEOCJSON));
    } catch (error) {
      yield put(fetchInfoAboutEOSError(error));
    }
  }
}

export function* fetchCryptoStart() {
  yield takeLatest(CryptoActionTypes.FETCH_START, fetchCryptoAsync);
}

export function* cryptoSagas() {
  yield all([call(fetchCryptoStart)]);
}

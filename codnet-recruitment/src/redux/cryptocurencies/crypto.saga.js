import { all, takeLatest, call, put, delay } from "redux-saga/effects";
import CryptoActionTypes from "./crypto.types";
import {
  fetchInfoAboutBitcoinSuccess,
  fetchInfoAboutBitcoinError,
  fetchInfoAboutEnumerumSuccess,
  fetchInfoAboutEnumerumError,
  fetchInfoAboutEOSError,
  fetchInfoAboutEOSSuccess,
  fetchDate,
} from "./crypto.actions";

function dateFunction() {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;
  return dateTime;
}

export function* fetchCryptoAsync({ payload: pathname }) {
  while (true) {
    if (pathname === "/bitcoin") {
      try {
        const fetchDataAboutBitcoin = yield fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );
        const fetchDataAboutBitcoinJSON = yield fetchDataAboutBitcoin.json();
        const date = dateFunction();
        yield put(fetchDate(date));
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
        const date = dateFunction();
        yield put(fetchDate(date));
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
        const date = dateFunction();
        yield put(fetchDate(date));
        yield put(fetchInfoAboutEOSSuccess(fetchDataAboutEOCJSON));
      } catch (error) {
        yield put(fetchInfoAboutEOSError(error));
      }
    }
    yield delay(10000);
  }
}

export function* fetchCryptoStart() {
  yield takeLatest(CryptoActionTypes.FETCH_START, fetchCryptoAsync);
}

export function* cryptoSagas() {
  yield all([call(fetchCryptoStart)]);
}

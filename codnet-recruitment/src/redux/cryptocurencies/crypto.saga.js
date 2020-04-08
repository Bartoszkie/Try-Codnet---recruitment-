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

const fetchData = async (path) => {
  const fetchDataAboutCrypto = await fetch(`${path}`).then((response) => {
    if (response.status >= 400) {
      throw new Error();
    }
    return response.json();
  });
  return fetchDataAboutCrypto;
};

export function* fetchCryptoAsync({ payload: pathname }) {
  while (true) {
    if (pathname === "/bitcoin") {
      try {
        const data = yield fetchData(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );
        const date = dateFunction();
        yield put(fetchDate(date));
        yield put(fetchInfoAboutBitcoinSuccess(data));
      } catch (error) {
        yield put(fetchInfoAboutBitcoinError(error));
      }
    } else if (pathname === "/ethereum") {
      try {
        const data = yield fetchData(
          "https://api.coingecko.com/api/v3/coins/ethereum"
        );
        const date = dateFunction();
        yield put(fetchDate(date));
        yield put(fetchInfoAboutEnumerumSuccess(data));
      } catch (error) {
        yield put(fetchInfoAboutEnumerumError(error));
      }
    } else if (pathname === "/eos") {
      try {
        const data = yield fetchData(
          "https://api.coingecko.com/api/v3/coins/eos"
        );
        const date = dateFunction();
        yield put(fetchDate(date));
        yield put(fetchInfoAboutEOSSuccess(data));
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

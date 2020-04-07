import CryptoActionTypes from "./crypto.types";

export const fetchDate = (date) => ({
  type: CryptoActionTypes.GET_DATE,
  payload: date,
});

export const fetchInfoAboutCrypto = (pathname) => ({
  type: CryptoActionTypes.FETCH_START,
  payload: pathname,
});

export const fetchInfoAboutBitcoinSuccess = (infoAboutBitcoin) => ({
  type: CryptoActionTypes.BITCOIN_SUCCESS,
  payload: infoAboutBitcoin,
});

export const fetchInfoAboutBitcoinError = (errorAboutBitcoin) => ({
  type: CryptoActionTypes.BITCOIN_ERROR,
  payload: errorAboutBitcoin,
});

export const fetchInfoAboutEnumerumSuccess = (infoAboutEnumerum) => ({
  type: CryptoActionTypes.ENUMERUM_SUCCESS,
  payload: infoAboutEnumerum,
});

export const fetchInfoAboutEnumerumError = (errorAboutEnumerum) => ({
  type: CryptoActionTypes.ENUMERUM_ERROR,
  payload: errorAboutEnumerum,
});

export const fetchInfoAboutEOSSuccess = (infoAboutEOS) => ({
  type: CryptoActionTypes.EOS_SUCCESS,
  payload: infoAboutEOS,
});

export const fetchInfoAboutEOSError = (errorAboutEOS) => ({
  type: CryptoActionTypes.EOS_ERROR,
  payload: errorAboutEOS,
});

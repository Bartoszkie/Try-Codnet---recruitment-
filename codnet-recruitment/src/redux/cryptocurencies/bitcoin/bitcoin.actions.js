import BitcoinActionTypes from "./bitcoin.types";

export const fetchInfoAboutBitcoin = (pathname) => ({
  type: BitcoinActionTypes.BITCOIN_START,
  payload: pathname
});

export const fetchInfoAboutBitcoinSuccess = (infoAboutBitcoin) => ({
  type: BitcoinActionTypes.BITCOIN_SUCCESS,
  payload: infoAboutBitcoin,
});

export const fetchInfoAboutBitcoinError = (errorAboutBitcoin) => ({
  type: BitcoinActionTypes.BITCOIN_ERROR,
  payload: errorAboutBitcoin,
});

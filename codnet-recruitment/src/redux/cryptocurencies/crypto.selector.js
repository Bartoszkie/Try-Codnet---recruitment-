import { createSelector } from "reselect";

const selectCryptocurrencies = (state) => state.crypto;

export const selectInfoAboutCrypto = createSelector(
  [selectCryptocurrencies],
  (crypto) => crypto.cryptocurrency
);

export const selectInfoAboutLoading = createSelector(
  [selectCryptocurrencies],
  (crypto) => crypto.loading
);

export const selectInfoAboutCryptoErrors = createSelector(
  [selectCryptocurrencies],
  (crypto) => crypto.errorMessage
);

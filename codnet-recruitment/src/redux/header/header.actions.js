import HeaderActionTypes from "./header.types";

export const HeaderChangeCurrency = (currency) => ({
  type: HeaderActionTypes.CHANGE_CURRENCY,
  payload: currency,
});

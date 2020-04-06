import EnumerumActionTypes from "./";

export const fetchInfoAboutEnumerum = () => ({
  type: EnumerumActionTypes.ENUMERUM_START,
});

export const fetchInfoAboutEnumerumSuccess = (infoAboutEnumerum) => ({
  type: EnumerumActionTypes.ENUMERUM_SUCCESS,
  payload: infoAboutEnumerum,
});

export const fetchInfoAboutEnumerumError = (errorAboutEnumerum) => ({
  type: EnumerumActionTypes.ENUMERUM_ERROR,
  payload: errorAboutEnumerum,
});

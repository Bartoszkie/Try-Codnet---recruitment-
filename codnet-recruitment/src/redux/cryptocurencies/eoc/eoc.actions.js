export const fetchInfoAboutEOS = () => ({
    type: CryptoActionTypes.EOS_START,
  });
  
  
  export const fetchInfoAboutEOSSuccess = (infoAboutEOS) => ({
    type: CryptoActionTypes.BITCOIN_SUCCESS,
    payload: infoAboutEOS,
  });
  
  
  export const fetchInfoAboutEOSError = (errorAboutEOS) => ({
    type: CryptoActionTypes.BITCOIN_ERROR,
    payload: errorAboutEOS,
  });
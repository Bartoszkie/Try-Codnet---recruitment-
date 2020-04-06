import React from "react";
import Typography from "../typography/typography.component";

//SYLES
import {
  BannerContainer,
  CryptoCurrencyInfo,
  CryptoCurrencyLogo,
  CryptoCurrencyPricingInfo,
  CryptoCurrencyValue,
} from "./banner.styles";

const Banner = () => {
  return (
    <BannerContainer>
      <CryptoCurrencyInfo>
        <CryptoCurrencyLogo></CryptoCurrencyLogo>
        <Typography type="h2">Bitcoin</Typography>
      </CryptoCurrencyInfo>

      <CryptoCurrencyPricingInfo>
        <Typography type="h2">$7,759.05</Typography>
        <CryptoCurrencyValue>
          <Typography type="h2">USD</Typography>
        </CryptoCurrencyValue>
      </CryptoCurrencyPricingInfo>
    </BannerContainer>
  );
};

export default Banner;

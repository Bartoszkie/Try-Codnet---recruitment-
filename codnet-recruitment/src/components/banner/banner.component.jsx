import React from "react";
import Typography from "../typography/typography.component";

import { connect } from "react-redux";

//SYLES
import {
  BannerContainer,
  CryptoCurrencyInfo,
  CryptoCurrencyLogo,
  CryptoCurrencyPricingInfo,
  CryptoCurrencyValue,
} from "./banner.styles";

const Banner = (props) => {
  console.log(props.cryptocurrency.loading);
  console.log(props.selectedCurrency);

  const { selectedCurrency } = props.selectedCurrency;
  console.log(
    "this is selected-currency in banner components",
    selectedCurrency
  );

  if (props.cryptocurrency.loading) {
    return <p>Is Loading</p>;
  }

  return (
    <BannerContainer>
      <CryptoCurrencyInfo>
        <CryptoCurrencyLogo
          src={props.cryptocurrency.cryptocurrency.image.small}
        ></CryptoCurrencyLogo>
        <Typography type="h2">
          {props.cryptocurrency.cryptocurrency.id}
          <br />
          {props.cryptocurrency.cryptocurrency.symbol}
        </Typography>
      </CryptoCurrencyInfo>

      <CryptoCurrencyPricingInfo>
        <Typography type="h2">
          {selectedCurrency === "USD"
            ? `${props.cryptocurrency.cryptocurrency.market_data.current_price.usd}`
            : selectedCurrency === "EUR"
            ? `${props.cryptocurrency.cryptocurrency.market_data.current_price.eur}`
            : selectedCurrency === "PLN"
            ? `${props.cryptocurrency.cryptocurrency.market_data.current_price.pln}`
            : null}
        </Typography>
        <CryptoCurrencyValue>
          <Typography type="h2">
            {selectedCurrency === "USD"
              ? "USD"
              : selectedCurrency === "EUR"
              ? "EUR"
              : selectedCurrency === "PLN"
              ? "PLN"
              : null}
          </Typography>
        </CryptoCurrencyValue>
      </CryptoCurrencyPricingInfo>
    </BannerContainer>
  );
};

const mapStateToProps = (state) => ({
  cryptocurrency: state.crypto,
  selectedCurrency: state.header,
});

export default connect(mapStateToProps)(Banner);

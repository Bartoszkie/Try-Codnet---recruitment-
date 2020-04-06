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
          <br/>
          {props.cryptocurrency.cryptocurrency.symbol}
        </Typography>
      </CryptoCurrencyInfo>

      <CryptoCurrencyPricingInfo>
        <Typography type="h2">{props.cryptocurrency.cryptocurrency.market_data.current_price.usd}</Typography>
        <CryptoCurrencyValue>
          <Typography type="h2">USD</Typography>
        </CryptoCurrencyValue>
      </CryptoCurrencyPricingInfo>
    </BannerContainer>
  );
};

const mapStateToProps = (state) => ({
  cryptocurrency: state.crypto,
});

export default connect(mapStateToProps)(Banner);

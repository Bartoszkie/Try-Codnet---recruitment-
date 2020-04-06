import React from "react";
import {connect} from "react-redux";

import { BannerInfoContainer, BannerInfoBox } from "./banner-info.styles";
import Typography from "../typography/typography.component";

const BannerInfo = (props) => {

  if (props.cryptocurrency.loading) {
    return <p>Is Loading</p>;
  }

  return (
    <BannerInfoContainer>
      <BannerInfoBox>
        <Typography type="p">Market Cap</Typography>
        <Typography type="h4">{props.cryptocurrency.cryptocurrency.market_data.market_cap.usd} USD</Typography>
        <Typography type="p">{props.cryptocurrency.cryptocurrency.market_data.market_cap.btc} BTC</Typography>
      </BannerInfoBox>
      <BannerInfoBox>
        <Typography type="p">Volume (24h)</Typography>
        <Typography type="h4">{props.cryptocurrency.cryptocurrency.market_data.high_24h.usd}</Typography>
        <Typography type="p">{props.cryptocurrency.cryptocurrency.market_data.high_24h.btc}BTC</Typography>
      </BannerInfoBox>
      <BannerInfoBox>
        <Typography type="p">circulating_supply</Typography>
        <Typography type="h4">{props.cryptocurrency.cryptocurrency.market_data.circulating_supply}</Typography>
      </BannerInfoBox>
      <BannerInfoBox>
        <Typography type="p">Max Supply</Typography>
        <Typography type="h4">{props.cryptocurrency.cryptocurrency.market_data.total_supply}</Typography>
      </BannerInfoBox>
    </BannerInfoContainer>
  );
};

const mapStateToProps = (state) => ({
  cryptocurrency: state.crypto,
});

export default connect(mapStateToProps)(BannerInfo);

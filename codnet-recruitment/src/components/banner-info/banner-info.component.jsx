import React from "react";
import { connect } from "react-redux";

import { BannerInfoContainer, BannerInfoBox } from "./banner-info.styles";
import Typography from "../typography/typography.component";

const BannerInfo = (props) => {
  if (props.cryptocurrency.loading) {
    return <p>Is Loading</p>;
  }

  const { selectedCurrency } = props.selectedCurrency;
  const { market_data } = props.cryptocurrency.cryptocurrency;
  const { pathname } = props.cryptocurrency;

  console.log("selected", pathname);

  return (
    <BannerInfoContainer>
      <BannerInfoBox>
        <Typography type="p">Market Cap</Typography>
        <Typography type="h4">
          {selectedCurrency === "USD"
            ? `${market_data.market_cap.usd} USD`
            : selectedCurrency === "EUR"
            ? `${market_data.market_cap.eur} EUR`
            : selectedCurrency === "PLN"
            ? `${market_data.market_cap.pln} PLN`
            : null}
        </Typography>
        <Typography type="p">
          {pathname === "/bitcoin"
            ? `${market_data.market_cap.btc} BTC`
            : pathname === "/ethereum"
            ? `${market_data.market_cap.eth} ETH`
            : pathname === "/eos"
            ? `${market_data.market_cap.eos} EOS`
            : null}
        </Typography>
      </BannerInfoBox>
      <BannerInfoBox>
        <Typography type="p">Volume (24h)</Typography>
        <Typography type="h4">
          {market_data.high_24h.usd}
          {selectedCurrency === "USD"
            ? `${market_data.high_24h.usd} USD`
            : selectedCurrency === "EUR"
            ? `${market_data.high_24h.eur} EUR`
            : selectedCurrency === "PLN"
            ? `${market_data.high_24h.pln} PLN`
            : null}
        </Typography>
        <Typography type="p">
          {market_data.high_24h.btc}BTC
          {pathname === "/bitcoin"
            ? `${market_data.high_24h.btc} BTC`
            : pathname === "/ethereum"
            ? `${market_data.high_24h.eth} ETH`
            : pathname === "/eos"
            ? `${market_data.high_24h.eos} EOS`
            : null}
        </Typography>
      </BannerInfoBox>
      <BannerInfoBox>
        <Typography type="p">circulating_supply</Typography>
        <Typography type="h4">{market_data.circulating_supply}</Typography>
      </BannerInfoBox>
      <BannerInfoBox>
        <Typography type="p">Max Supply</Typography>
        <Typography type="h4">{market_data.total_supply}</Typography>
      </BannerInfoBox>
    </BannerInfoContainer>
  );
};

const mapStateToProps = (state) => ({
  cryptocurrency: state.crypto,
  selectedCurrency: state.header,
});

export default connect(mapStateToProps)(BannerInfo);

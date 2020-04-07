import React from "react";
import { connect } from "react-redux";

import { BannerInfoContainer, BannerInfoBox } from "./banner-info.styles";
import Typography from "../typography/typography.component";
import { numberWithCommas } from "../utilities/numberFunctions";

const BannerInfo = (props) => {
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
            ? `$ ${numberWithCommas(market_data.market_cap.usd)} USD`
            : selectedCurrency === "EUR"
            ? `€ ${numberWithCommas(market_data.market_cap.eur)} EUR`
            : selectedCurrency === "PLN"
            ? `ZL ${numberWithCommas(market_data.market_cap.pln)} PLN`
            : null}
        </Typography>
        <Typography type="p">
          {pathname === "/bitcoin"
            ? `${numberWithCommas(market_data.market_cap.btc)} BTC`
            : pathname === "/ethereum"
            ? `${numberWithCommas(market_data.market_cap.eth)} ETH`
            : pathname === "/eos"
            ? `${numberWithCommas(market_data.market_cap.eos)} EOS`
            : null}
        </Typography>
      </BannerInfoBox>
      <BannerInfoBox>
        <Typography type="p">Volume (24h)</Typography>
        <Typography type="h4">
          {selectedCurrency === "USD"
            ? `$ ${numberWithCommas(market_data.high_24h.usd)} USD`
            : selectedCurrency === "EUR"
            ? `€ ${numberWithCommas(market_data.high_24h.eur)} EUR`
            : selectedCurrency === "PLN"
            ? `ZL ${numberWithCommas(market_data.high_24h.pln)} PLN`
            : null}
        </Typography>
        <Typography type="p">
          {pathname === "/bitcoin"
            ? `${numberWithCommas(market_data.high_24h.btc)} BTC`
            : pathname === "/ethereum"
            ? `${numberWithCommas(market_data.high_24h.eth)} ETH`
            : pathname === "/eos"
            ? `${numberWithCommas(market_data.high_24h.eos)} EOS`
            : null}
        </Typography>
      </BannerInfoBox>
      <BannerInfoBox>
        <Typography type="p">Circulating Supply</Typography>
        <Typography type="h4">
          {pathname === "/bitcoin"
            ? `${numberWithCommas(market_data.circulating_supply)} BTC`
            : pathname === "/ethereum"
            ? `${numberWithCommas(market_data.circulating_supply)} ETH`
            : pathname === "/eos"
            ? `${numberWithCommas(market_data.circulating_supply)} EOS`
            : null}
        </Typography>
      </BannerInfoBox>
      <BannerInfoBox>
        <Typography type="p">Max Supply</Typography>
        <Typography type="h4">
          {pathname === "/bitcoin" && market_data.total_supply !== null
            ? `${numberWithCommas(market_data.total_supply)} BTC`
            : pathname === "/ethereum" && market_data.total_supply !== null
            ? `${numberWithCommas(market_data.total_supply)} ETH`
            : pathname === "/eos" && market_data.total_supply !== null
            ? `${numberWithCommas(market_data.total_supply)} EOS`
            : market_data.total_supply === null
            ? `Not avalible`
            : null}
        </Typography>
      </BannerInfoBox>
    </BannerInfoContainer>
  );
};

const mapStateToProps = (state) => ({
  cryptocurrency: state.crypto,
  selectedCurrency: state.header,
});

export default connect(mapStateToProps)(BannerInfo);

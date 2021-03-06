import React, { useState } from "react";
import Typography from "../typography/typography.component";
import { connect } from "react-redux";

import Button from "../button/button.component";
import Modal from "../modal/modal.component";
import BannerInfo from "../banner-info/banner-info.component";
import { numberWithCommas } from "../utilities/numberFunctions";

//SYLES
import {
  BannerContainer,
  CryptoCurrencyInfo,
  CryptoCurrencyLogo,
  CryptoCurrencyPricingInfo,
  CryptoCurrencyValue,
  CryptoCurrencyLevel,
} from "./banner.styles";

const Banner = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const { selectedCurrency } = props.selectedCurrency;
  const { cryptocurrency } = props.cryptocurrency;

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <BannerContainer>
      <CryptoCurrencyInfo>
        <CryptoCurrencyLogo
          src={cryptocurrency.image.small}
        ></CryptoCurrencyLogo>
        <Typography type="h2">{cryptocurrency.id}</Typography>
        <Typography type="h2">{`(${cryptocurrency.symbol})`}</Typography>
      </CryptoCurrencyInfo>

      <CryptoCurrencyPricingInfo>
        <Typography type="h2">
          {selectedCurrency === "USD"
            ? `${numberWithCommas(
                cryptocurrency.market_data.current_price.usd
              )}`
            : selectedCurrency === "EUR"
            ? `${numberWithCommas(
                cryptocurrency.market_data.current_price.eur
              )}`
            : selectedCurrency === "PLN"
            ? `${numberWithCommas(
                cryptocurrency.market_data.current_price.pln
              )}`
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
          <CryptoCurrencyLevel>
            {selectedCurrency === "USD"
              ? `${numberWithCommas(
                  cryptocurrency.market_data.price_change_24h_in_currency.usd
                )} USD`
              : selectedCurrency === "EUR"
              ? `${numberWithCommas(
                  cryptocurrency.market_data.price_change_24h_in_currency.eur
                )} EUR`
              : selectedCurrency === "PLN"
              ? `${numberWithCommas(
                  cryptocurrency.market_data.price_change_24h_in_currency.pln
                )} PLN`
              : null}
          </CryptoCurrencyLevel>
        </CryptoCurrencyValue>
        <Button blue={true} handleOpen={handleOpenModal}>
          {cryptocurrency.id === "bitcoin"
            ? `Buy Bitcoin (BTC)`
            : cryptocurrency.id === "ethereum"
            ? `Buy Ethereum (ETH)`
            : cryptocurrency.id === "eos"
            ? `Buy EOS (EOS)`
            : null}
        </Button>
      </CryptoCurrencyPricingInfo>
      {openModal ? (
        <Modal
          handleOpen={handleOpenModal}
          h2={"Coming Soon!"}
          p={"Feature in development!"}
        ></Modal>
      ) : null}
      <BannerInfo />
    </BannerContainer>
  );
};

const mapStateToProps = (state) => ({
  cryptocurrency: state.crypto,
  selectedCurrency: state.header,
});

export default connect(mapStateToProps)(Banner);

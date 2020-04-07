import React, { useState, useRef } from "react";
import Typography from "../typography/typography.component";
import { connect } from "react-redux";

import Button from "../button/button.component";
import Modal from "../modal/modal.component";

import { useOnClckOutside } from "../hooks/useOnClickOutside.hook";

//SYLES
import {
  BannerContainer,
  CryptoCurrencyInfo,
  CryptoCurrencyLogo,
  CryptoCurrencyPricingInfo,
  CryptoCurrencyValue,
} from "./banner.styles";

const Banner = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const { selectedCurrency } = props.selectedCurrency;
  const { cryptocurrency } = props.cryptocurrency;

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  if (props.cryptocurrency.loading) {
    return <p>Is Loading</p>;
  }

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
            ? `${cryptocurrency.market_data.current_price.usd}`
            : selectedCurrency === "EUR"
            ? `${cryptocurrency.market_data.current_price.eur}`
            : selectedCurrency === "PLN"
            ? `${cryptocurrency.market_data.current_price.pln}`
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
        <Button blue={true} handleOpenModal={handleOpenModal}>
          {cryptocurrency.id === "bitcoin"
            ? `Bitcoin (BTC)`
            : cryptocurrency.id === "ethereum"
            ? `Ethereum (ETH)`
            : cryptocurrency.id === "eos"
            ? `EOS (EOS)`
            : null}
        </Button>
      </CryptoCurrencyPricingInfo>
      {openModal ? (
        <Modal openModal={openModal} setOpenModal={setOpenModal}></Modal>
      ) : null}
    </BannerContainer>
  );
};

const mapStateToProps = (state) => ({
  cryptocurrency: state.crypto,
  selectedCurrency: state.header,
});

export default connect(mapStateToProps)(Banner);

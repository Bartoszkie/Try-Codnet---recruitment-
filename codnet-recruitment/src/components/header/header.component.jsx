import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logoSM from "../../assets/img/logo-sm.png";
import { connect } from "react-redux";

import { fetchInfoAboutCrypto } from "../../redux/cryptocurencies/crypto.actions";
import { HeaderChangeCurrency } from "../../redux/header/header.actions";

//STYLES
import {
  HeaderContainer,
  HeaderButton,
  HeaderLogo,
  HeaderSwitch,
  HeaderNavigation,
  HeaderAppName,
  HeaderAppNameBold,
  HeaderButtonLogo,
  HederSwitchOption,
} from "./header.styles";

const Header = (props) => {
  const [optionsState, setOptionsState] = useState("USD");
  const { pathname } = useLocation();

  const handleChange = (e) => {
    console.log("Navbar Value: ", e.target.value);
    setOptionsState(e.target.value);
    props.changeCurrency(e.target.value);
  };


  const actionToTriggerPathname = () => {
    props.fetchInfoAboutCrypto(pathname);
  };

  useEffect(actionToTriggerPathname, [pathname]);

  return (
    <HeaderContainer>
      <HeaderButtonLogo to="/bitcoin">
        <HeaderLogo src={logoSM} />
        <HeaderAppName>
          <HeaderAppNameBold>IT</HeaderAppNameBold>Recruitment
        </HeaderAppName>
      </HeaderButtonLogo>

      <HeaderNavigation>
        <HeaderButton to="/bitcoin">Bitcoin</HeaderButton>
        <HeaderButton to="/ethereum">Ethereum</HeaderButton>
        <HeaderButton to="/eos">EOS</HeaderButton>
      </HeaderNavigation>

      <HeaderSwitch defaultValue={optionsState} onChange={handleChange}>
        <HederSwitchOption value="USD">USD</HederSwitchOption>
        <HederSwitchOption value="EUR">EUR</HederSwitchOption>
        <HederSwitchOption value="PLN">PLN</HederSwitchOption>
      </HeaderSwitch>
    </HeaderContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchInfoAboutCrypto: (pathname) => dispatch(fetchInfoAboutCrypto(pathname)),
  changeCurrency: (currency) => dispatch(HeaderChangeCurrency(currency)),
});

export default connect(null, mapDispatchToProps)(Header);

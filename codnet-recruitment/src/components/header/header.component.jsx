import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logoSM from "../../assets/img/logo-sm.png";
import { connect } from "react-redux";

import { fetchInfoAboutCrypto } from "../../redux/cryptocurencies/crypto.actions";

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
  const { pathname } = useLocation();

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
        <HeaderButton to="/ethereum">Enumerum</HeaderButton>
        <HeaderButton to="/eos">EOS</HeaderButton>
      </HeaderNavigation>

      <HeaderSwitch>
        <HederSwitchOption value="USD">USD</HederSwitchOption>
        <HederSwitchOption value="EURO">EUR</HederSwitchOption>
        <HederSwitchOption value="PLN">PLN</HederSwitchOption>
      </HeaderSwitch>
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchInfoAboutCrypto: (pathname) => dispatch(fetchInfoAboutCrypto(pathname)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logoSM from '../../assets/img/logo-sm.png';

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
  HederSwitchOption
} from "./header.styles";

const Header = () => {
  const { pathname } = useLocation();

  const actionToTriggerPathname = () => {
    console.log("syfek");
  };

  useEffect(actionToTriggerPathname, [pathname]);

  return (
    <HeaderContainer>
      <HeaderButtonLogo to="/bitcoin">
        <HeaderLogo src={logoSM}/>
        <HeaderAppName>
          <HeaderAppNameBold>IT</HeaderAppNameBold>Recruitment
        </HeaderAppName>
      </HeaderButtonLogo>

      <HeaderNavigation>
        <HeaderButton to="/bitcoin">Bitcoin</HeaderButton>
        <HeaderButton to="/enumerum">Enumerum</HeaderButton>
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

export default Header;

import React from "react";

//STYLES
import {
  FooterContainer,
  FooterDataInfo,
  FooterNavigation,
  FooterNavigationItem
} from "./footer.styles";
import Typography from "../typography/typography.component";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDataInfo>12.04.2019</FooterDataInfo>
      <Typography type="p">Recruitment Task</Typography>
      <FooterNavigation>
          <FooterNavigationItem to="/bitcoin">Bitcoin</FooterNavigationItem>
          <FooterNavigationItem to="/enumerum">Enumerum</FooterNavigationItem>
          <FooterNavigationItem to="/eos">eos</FooterNavigationItem>
      </FooterNavigation>
    </FooterContainer>
  );
};

export default Footer;

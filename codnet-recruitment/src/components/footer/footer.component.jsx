import React from "react";
import { connect } from "react-redux";

//STYLES
import {
  FooterContainer,
  FooterDataInfo,
  FooterNavigation,
  FooterNavigationItem,
} from "./footer.styles";
import Typography from "../typography/typography.component";

const Footer = ({ cryptocurrency: cryptocurrency }) => {
  return (
    <FooterContainer>
      <FooterDataInfo>Last Update: {cryptocurrency.date}</FooterDataInfo>
      <Typography type="p">Zadanie rekrutacyjne Try Codnet</Typography>
      <FooterNavigation>
        <FooterNavigationItem to="/bitcoin">Bitcoin</FooterNavigationItem>
        <FooterNavigationItem to="/enumerum">Ethereum</FooterNavigationItem>
        <FooterNavigationItem to="/eos">Eos</FooterNavigationItem>
      </FooterNavigation>
    </FooterContainer>
  );
};

const mapStateToProps = (state) => ({
  cryptocurrency: state.crypto,
});

export default connect(mapStateToProps)(Footer);

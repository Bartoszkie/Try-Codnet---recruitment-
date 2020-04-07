import React from "react";
import { connect } from "react-redux";
import { AboutInfoContainer, AboutArticle } from "./about-info.styles";
import { deleteHTMLFromString } from "../utilities/numberFunctions";

const AboutInfo = ({ cryptocurrency }) => {
  return (
    <AboutInfoContainer>
      <AboutArticle>
        {deleteHTMLFromString(cryptocurrency.cryptocurrency.description.en)}
      </AboutArticle>
    </AboutInfoContainer>
  );
};

const mapStateToProps = (state) => ({
  cryptocurrency: state.crypto,
});

export default connect(mapStateToProps)(AboutInfo);

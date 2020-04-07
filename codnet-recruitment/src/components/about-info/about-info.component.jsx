import React from "react";
import { connect } from "react-redux";

import { AboutInfoContainer } from "./about-info.styles";
import Typography from "../typography/typography.component";

import { deleteHTMLFromString } from "../utilities/numberFunctions";

const AboutInfo = ({ cryptocurrency }) => {
  console.log(
    "this is data from about info",
    cryptocurrency.cryptocurrency.description.en
  );

  return (
    <AboutInfoContainer>
      <Typography type="p">
        {deleteHTMLFromString(cryptocurrency.cryptocurrency.description.en)}
      </Typography>
    </AboutInfoContainer>
  );
};

const mapStateToProps = (state) => ({
  cryptocurrency: state.crypto,
});

export default connect(mapStateToProps)(AboutInfo);

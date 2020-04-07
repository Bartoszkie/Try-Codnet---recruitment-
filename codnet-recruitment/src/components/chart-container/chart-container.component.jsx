import React, { useState } from "react";
import { connect } from "react-redux";

//COMPONENTS
import Button from "../button/button.component";
import AboutInfo from "../about-info/about-info.component";

//STYLES
import {
  CharContainerWrapper,
  ChartButtonsContainer,
  ChartButtonsLeft,
  ChartButtonsRight,
  ChartMaxWidth
} from "./chart-container.styles";
import Chart from "../chart/chart.component";


const ChartContainer = (props) => {
  const [infoChange, setInfoChange] = useState({ show: "charts" });
  const { show } = infoChange;

  return (
    <CharContainerWrapper>
      <ChartButtonsContainer>
        <ChartButtonsLeft>
          <Button handleOpen={() => setInfoChange({ show: "charts" })}>
            Charts
          </Button>
          <Button handleOpen={() => setInfoChange({ show: "about" })}>
            About
            {props.cryptocurrency.pathname === "/bitcoin"
              ? " Bitcoin"
              : props.cryptocurrency.pathname === "/ethereum"
              ? " Ethereum"
              : props.cryptocurrency.pathname === "/eos"
              ? " EOS"
              : null}
          </Button>
        </ChartButtonsLeft>
        <ChartButtonsRight>
          <Button>1W</Button>
          <Button>1D</Button>
          <Button>4H</Button>
          <Button>2H</Button>
          <Button>15M</Button>
        </ChartButtonsRight>
      </ChartButtonsContainer>
      {show === "charts" ? <Chart /> : <AboutInfo />}
    </CharContainerWrapper>
  );
};

const mapStateToProps = (state) => ({
  cryptocurrency: state.crypto,
});

export default connect(mapStateToProps)(ChartContainer);

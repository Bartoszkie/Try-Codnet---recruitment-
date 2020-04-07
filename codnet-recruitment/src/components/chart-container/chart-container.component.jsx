import React from "react";

//COMPONENTS
import Button from "../button/button.component";

//STYLES
import {
    CharContainerWrapper,
  ChartButtonsContainer,
  ChartButtonsLeft,
  ChartButtonsRight,
} from "./chart-container.styles";
import Chart from "../chart/chart.component";

const ChartContainer = () => {
  return (
    <CharContainerWrapper>
      <ChartButtonsContainer>
        <ChartButtonsLeft>
          <Button>Charts</Button>
          <Button>About Bitcoin</Button>
        </ChartButtonsLeft>
        <ChartButtonsRight>
          <Button>1W</Button>
          <Button>1D</Button>
          <Button>4H</Button>
          <Button>2H</Button>
          <Button>15M</Button>
        </ChartButtonsRight>
      </ChartButtonsContainer>
      <Chart/>
    </CharContainerWrapper>
  );
};

export default ChartContainer;

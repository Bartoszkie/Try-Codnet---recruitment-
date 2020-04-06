import React from "react";
import { GlobalGrid, GlobalStyles } from "../styles/global.styles";

//COMPONENTS
import Header from "../components/header/header.component";
import Banner from '../components/banner/banner.component';

const MainPage = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <GlobalGrid>
        <Header />
        <Banner/>
      </GlobalGrid>
    </React.Fragment>
  );
};

export default MainPage;

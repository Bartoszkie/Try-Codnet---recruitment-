import React from "react";
import { GlobalGrid, GlobalStyles } from "../styles/global.styles";

//COMPONENTS
import Header from "../components/header/header.component";
import Banner from '../components/banner/banner.component';
import BannerInfo from "../components/banner-info/banner-info.component";

const MainPage = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <GlobalGrid>
        <Header />
        <Banner/>
        <BannerInfo/>
      </GlobalGrid>
    </React.Fragment>
  );
};

export default MainPage;

import React from "react";
import { GlobalGrid, GlobalStyles } from "../styles/global.styles";

//COMPONENTS
import Header from "../components/header.component";

const MainPage = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <GlobalGrid>
        <Header />
      </GlobalGrid>
    </React.Fragment>
  );
};

export default MainPage;

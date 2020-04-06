import React from "react";
import { Route } from "react-router-dom";

//STYLES
import { GlobalGrid, GlobalStyles } from "./styles/global.styles";

//COMPONENTS
//PAGES

const App = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={MainPage}/>  
    </React.Fragment>
  );
};

export default App;

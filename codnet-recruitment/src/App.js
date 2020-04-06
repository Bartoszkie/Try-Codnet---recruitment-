import React from "react";
import { Route } from "react-router-dom";

//COMPONENTS
//PAGES
import MainPage from './pages/main-page.page';

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" component={MainPage}/>  
    </React.Fragment>
  );
};

export default App;

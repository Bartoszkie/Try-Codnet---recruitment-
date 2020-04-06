import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//COMPONENTS
//PAGES
import MainPage from "./pages/main-page.page";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Redirect exact from="/" to="/bitcoin" />
        <Route path="/" component={MainPage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;

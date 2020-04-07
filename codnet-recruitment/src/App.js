import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.styles";

//COMPONENTS
//PAGES
import MainPage from "./pages/main-page.page";

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Switch>
          <Redirect exact from="/" to="/bitcoin" />
          <Route path="/" component={MainPage} />
        </Switch>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;

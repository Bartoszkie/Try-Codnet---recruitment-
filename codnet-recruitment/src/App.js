import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme, lightTheme, darkTheme } from "./styles/theme.styles";
import {ButtonToggle} from "./styles/global.styles";
//COMPONENTS
//PAGES
import MainPage from "./pages/main-page.page";

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <ButtonToggle onClick={toggleTheme}>Toggle theme</ButtonToggle>
        <Switch>
          <Redirect exact from="/" to="/bitcoin" />
          <Route path="/" component={MainPage} />
        </Switch>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;

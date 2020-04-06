import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: inherit;
        margin: 0; 
        padding: 0; 
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }
`;

export const GlobalGrid = styled.section`
  display: grid;
  grid-template-columns:
    [full-start] minmax(15rem, 1fr) [center-start] repeat(
      8,
      minmax(min-content, 14rem)
    )
    [center-end] minmax(15rem, 1fr) [full-end];
  grid-template-rows: min-content min-content 1fr min-content;
  height: 100vh;
`;

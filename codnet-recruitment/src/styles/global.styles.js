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
        font-family: 'Roboto', sans-serif;

          @media only screen and (max-width: 1200px) { 
              font-size: 56.25%; 
          }

          @media only screen and (max-width: 900px) { 
              font-size: 50%; 
          }

          @media only screen and (min-width: 1200px) {
              font-size: 75%; 
          }
    }

    ::selection {
      color: #fff;
      background: #55AFE4;
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
  grid-template-rows: min-content min-content 60vh min-content;
  justify-content: center;

  height: 100vh;

  position: relative;
`;

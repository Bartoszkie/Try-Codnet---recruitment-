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
    }

    ::selection {
      color: #fff;
      background: #55AFE4;
    }

    body {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
    }
`;

export const ButtonToggle = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 1rem 2rem;
  position: relative;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`;

export const GlobalGrid = styled.section`
  display: grid;
  grid-template-columns:
    [left-space-start] minmax(10.4rem, 1fr)
    [left-space-end center-start] repeat(10, minmax(min-content, 12rem))
    [center-end right-space-start] minmax(10.4rem, 1fr) [ right-space-end];
  grid-template-rows: min-content min-content minmax(min-content, 1fr) min-content;
  justify-content: center;
  height: 100vh;
  position: relative;

  @media (max-width: 600px) {
    grid-template-columns:
      [left-space-start] minmax(min-content, 1fr)
      [left-space-end center-start] repeat(10, minmax(min-content, 12rem))
      [center-end right-space-start] minmax(min-content, 1fr)
      [ right-space-end];
    height: auto;
    grid-template-rows: min-content 40rem 100rem 9rem;
  }
`;

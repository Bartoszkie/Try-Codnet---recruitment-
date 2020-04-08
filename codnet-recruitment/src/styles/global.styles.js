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
  font-family: "Roboto", sans-serif;

  border-top: none;
  border-left: 0.1rem solid ${({ theme }) => theme.lightBlueButtonColor};
  border-right: 0.1rem solid ${({ theme }) => theme.lightBlueButtonColor};
  border-bottom: 0.1rem solid ${({ theme }) => theme.lightBlueButtonColor};
  
  outline: none;
  border-radius: 0px 0px 5px 5px;
  padding: 1rem 2rem;
  position: relative;
  left: 50%;
  top: 0;
  transform: translateX(-50%);

  color: ${({ theme }) => theme.text};

  background-color: ${({ theme }) => theme.body};

  cursor: pointer;
`;

export const GlobalGrid = styled.section`
  display: grid;
  grid-template-columns:
    [left-space-start] minmax(10.4rem, 1fr)
    [left-space-end center-start] repeat(10, minmax(min-content, 12rem))
    [center-end right-space-start] minmax(10.4rem, 1fr) [ right-space-end];
  grid-template-rows: min-content 32vh 1fr min-content;

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
    grid-template-rows: min-content max-content max-content 9rem;
  }
`;

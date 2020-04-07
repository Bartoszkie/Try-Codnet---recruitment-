import styled from "styled-components";
import { Link } from "react-router-dom";
import { respondTo } from "../../styles/mixins";

export const FooterContainer = styled.footer`
  /* grid-column: full-start / full-end;
  grid-row: 4 / 5; */
  position: absolute;
  bottom: 0; 
  left: 0; 
  width: 100%;

  padding: 6rem 15rem;

  background-color: #fff;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  color: ${({ theme }) => theme.greyTextColor};

  ${respondTo.sm`
      padding: 3rem 5rem;

    & > p, & > span, & > nav {
      margin: 2rem 0; 
      text-align: center;
    `}

  & > p {
    font-weight: 700;
    font-style: italic;
    margin: 0 2rem;
  }
`;

export const FooterDataInfo = styled.span`
  ${respondTo.sm`
    margin-top: 3rem 0;
  `}
`;

export const FooterNavigation = styled.nav`
  display: flex;
  justify-content: center;

  & > a:not(:first-child) {
    margin-left: 1rem;
  }

  ${respondTo.sm`
    margin-top: 3rem 0;
  `}
`;

export const FooterNavigationItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.greyTextColor};
  transition: 0.2s ease-in-out all;

  &:hover {
    color: ${({ theme }) => theme.darkBlueTextColor};
  }
`;

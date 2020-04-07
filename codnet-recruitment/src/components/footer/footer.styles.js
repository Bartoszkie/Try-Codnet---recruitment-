import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  grid-column: full-start / full-end;
  grid-row: 4 / 5;
  padding: 6rem 15rem;

  background-color: #fff;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: ${({ theme }) => theme.greyTextColor};

  & > p {
    font-weight: 700;
    font-style: italic;
  }
`;

export const FooterDataInfo = styled.span``;

export const FooterNavigation = styled.nav`
  display: flex;
  justify-content: center;

  & > a:not(:first-child) {
    margin-left: 1rem;
  }
`;

export const FooterNavigationItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.greyTextColor};
  transition: 0.2s ease-in-out all;

  &:hover {
    color: ${({ theme }) => theme.darkBlueTextColor};
  }
`;

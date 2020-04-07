import styled from "styled-components";
import { Link } from "react-router-dom";

import { respondTo } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  grid-column: full-start / full-end;
  grid-row: 1 / 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);

  padding: 2rem 2rem;
  position: relative;

  ${respondTo.sm`
    padding-bottom: 5rem;
  `}
`;

export const HeaderButton = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  color: ${({ theme }) => theme.greyTextColor};
  transition: 0.2s ease-in-out all;

  margin: 0 2.5rem;

  &:hover {
    color: ${({ theme }) => theme.darkBlueTextColor};
  }
`;

export const HeaderNavigation = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${respondTo.sm`
      top: 80%;
  `}
`;

export const HeaderSwitch = styled.select`
  box-shadow: 0px 5px 10px #a3abba33;
  border-radius: 5px;
  padding: 0.6rem 1rem;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const HederSwitchOption = styled.option``;

export const HeaderLogo = styled.img``;

export const HeaderAppName = styled.div`
  margin-left: 1rem;
  font-size: 2.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.lightBlueTextColor};
`;

export const HeaderAppNameBold = styled.span`
  color: ${({ theme }) => theme.darkBlueTextColor};
`;

export const HeaderButtonLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
`;

import styled from "styled-components";
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.header`
  grid-column: full-start / full-end;
  grid-row: 1 / 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, .1);

  padding: 2rem 2rem;
`;

export const HeaderButton = styled(Link)`
    font-size: 1.6rem;
    text-decoration: none;

    margin: 0 .9rem;
`;

export const HeaderNavigation = styled.div`
  justify-self: center;
`;

export const HeaderSwitch = styled.select`

`;

export const HederSwitchOption = styled.option`

`;

export const HeaderLogo = styled.img`

`;

export const HeaderAppName = styled.div`
  margin-left: 1rem;
`;

export const HeaderAppNameBold = styled.span`

`;

export const HeaderButtonLogo = styled(Link)`
  display: flex; 
  justify-content: center;
  align-items: center;

  text-decoration: none;
`;

import styled from "styled-components";
import { respondTo } from "../../styles/mixins";

export const BannerContainer = styled.section`
  grid-column: center-start / center-end;
  grid-row: 2 / 3;

  padding: 3rem 1rem;
  height: 27vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  ${respondTo.lgSm`
    padding: 3rem 0rem;
  `};

  ${respondTo.sm`
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    grid-column: left-space-start / right-space-end;

    padding: 3rem 2rem;
  `}
`;

export const CryptoCurrencyInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.darkBlueTextColor};
  font-size: 2.2rem;

  & h2:nth-child(2) {
    margin-right: 0.5rem;
    text-transform: capitalize;
  }

  & h2:nth-child(3) {
    text-transform: uppercase;
  }

  ${respondTo.sm`
      margin-bottom: 3rem;
  `}
`;

export const CryptoCurrencyLogo = styled.img`
  box-shadow: 0px 5px 10px #a3abba33;
  border-radius: 50%;
  margin-right: 2.5rem;
`;

export const CryptoCurrencyPricingInfo = styled.div`
  display: flex;
  font-size: 3.6rem;
  color: ${({ theme }) => theme.lightBlueTextColor};

  ${respondTo.sm`
    flex-direction: column;
    align-items: center;

    & > button {
      margin-top: 1rem;
      margin-left: 0;
    }
  `}
`;

export const CryptoCurrencyValue = styled.span`
  margin-left: 0.5rem;
  font-weight: 100;
  color: ${({ theme }) => theme.darkTextColor};
`;

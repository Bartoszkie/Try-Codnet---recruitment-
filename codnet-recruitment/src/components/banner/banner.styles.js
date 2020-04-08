import styled from "styled-components";
import { respondTo } from "../../styles/mixins";

export const BannerContainer = styled.section`
  grid-column: center-start / center-end;
  grid-row: 2 / 3;

  padding: 13rem 1rem 3rem 1rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  position: relative;

  ${respondTo.lgSm`
    padding: 8rem 0rem;
  `};

  ${respondTo.sm`
    grid-column: left-space-start / right-space-end;

    padding: 8rem 2rem;
  `}
`;

export const CryptoCurrencyInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: auto;

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
      margin-right: 0;
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

  & > h2,
  span {
    transform: translateY(-3rem);
  }

  ${respondTo.sm`
    flex-direction: column;
    align-items: center;
    text-align: center;

    & > button {
      margin-top: 4rem;
      margin-left: 0;
    }
  `}
`;

export const CryptoCurrencyPricingValues = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CryptoCurrencyValue = styled.span`
  margin-left: 0.5rem;
  font-weight: 100;
  color: ${({ theme }) => theme.darkTextColor};
  position: relative;
`;

export const CryptoCurrencyLevel = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.darkTextColor};
  position: absolute;
  top: 155%;
  right: 0.6rem;
`;

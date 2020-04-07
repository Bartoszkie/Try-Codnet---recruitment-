import styled from "styled-components";

export const BannerContainer = styled.section`
  grid-column: full-start / full-end;
  grid-row: 2 / 3;

  padding: 3rem 15rem;
  height: 27vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CryptoCurrencyInfo = styled.div`
  display: flex;
`;

export const CryptoCurrencyLogo = styled.img``;

export const CryptoCurrencyPricingInfo = styled.div`
  display: flex;
`;

export const CryptoCurrencyValue = styled.span`
  margin-left: 0.5rem;
`;

import styled from "styled-components";
import { respondTo } from "../../styles/mixins";

export const BannerInfoContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;

  padding: 4rem 6rem;
  margin-top: 2rem;

  box-shadow: 0px 20px 60px #a3abba66;
  border-radius: 5px;

  background-color: #fff;
  width: 80%;

  ${respondTo.sm`
    width: 100%;
    padding: 2rem;
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(2, min-content);

    justify-content: center;
  `}
`;

export const BannerInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${respondTo.sm`
    margin: 2rem;
  `}

  & > p:first-child {
    color: ${({ theme }) => theme.greyTextColor};
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  & > h4 {
    color: #000;
    font-size: 1.6rem;
    font-weight: 400;
  }

  & > p:last-child {
    color: ${({ theme }) => theme.greyTextColor};
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
`;

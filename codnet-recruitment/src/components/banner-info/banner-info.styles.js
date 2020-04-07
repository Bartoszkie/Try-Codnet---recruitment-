import styled from "styled-components";

export const BannerInfoContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  padding: 4rem 6rem;
  box-shadow: 0px 20px 60px #a3abba66;
  border-radius: 5px;

  background-color: #fff;
  width: 80%;

  position: absolute;
  z-index: 100;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BannerInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > p:first-child {
    color: ${({ theme }) => theme.greyTextColor};
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  & > h4 {
    color: #000;
    font-size: 1.6rem;
  }

  & > p:last-child {
    color: ${({ theme }) => theme.greyTextColor};
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
`;

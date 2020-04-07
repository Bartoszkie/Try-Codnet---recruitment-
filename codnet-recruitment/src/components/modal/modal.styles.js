import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  padding: 2rem 5rem;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border-radius: 5px;
  border: 0.1rem solid #55afe4;

  z-index: 2001;
  position: relative;

  text-align: center;
`;

export const CloseButton = styled.button`
  outline: none;
  border: none;
  background-color: #fff;
  position: absolute;
  top: 1rem;
  right: 2rem;
  width: 2rem;
  height: 2rem;

  &::after,
  &::before {
    position: absolute;
    content: "";
    display: inline-block;
    height: 0.1rem;
    width: 2rem;
    background-color: ${({ theme }) => theme.darkTextColor};
  }

  &::after {
    transform: rotate(-45deg);
  }

  &::before {
    transform: rotate(45deg);
  }
`;

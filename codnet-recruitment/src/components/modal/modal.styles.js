import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.1);
  display: ${(isOpen) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  background-color: #fff;
  color: #000;

  padding: 2rem 5rem;
  border-radius: 5px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    margin-bottom: 2rem;
  }
`;

export const ButtonModal = styled.button`
  height: 10rem;
  width: 10rem;

  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  box-shadow: none;
  z-index: 1;

  &:focus {
    background-color: transparent;
    color: #000;
  }
`;

import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.1);

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
`;

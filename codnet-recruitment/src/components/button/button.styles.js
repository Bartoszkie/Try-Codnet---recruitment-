import styled from "styled-components";

export const ButtonContainer = styled.a`
  background-color: #fff;
  color: #000;

  padding: 0.5rem 1rem;
  margin: .3rem;

  box-shadow: 0px 5px 10px #a3abba33;
  border-radius: 5px;

  &:active, &:link {
    background-color: blue;
    color: #fff;
  }
`;

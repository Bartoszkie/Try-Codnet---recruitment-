import styled from "styled-components";
import { respondTo } from "../../styles/mixins";

export const ButtonContainer = styled.button`
  cursor: pointer;

  background-color: ${(props) => (props.blue ? `#55AFE4` : "#FFFFFF")};
  color: ${(props) => (props.blue ? `#FFFFFF` : "#2C3440")};

  padding: 1.3rem 1.8rem 1.3rem 1.8rem;
  margin-left: 3rem;

  outline: none;
  border: none;
  box-shadow: 0px 5px 10px #a3abba33;
  border-radius: 5px;

  ${respondTo.sm`
    margin-left: 1rem;
  `}

  &:focus {
    background-color: #55AFE4;
    color: #fff;
  }
`;

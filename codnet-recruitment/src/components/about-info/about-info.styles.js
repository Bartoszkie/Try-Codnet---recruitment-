import styled from "styled-components";
import { respondTo } from "../../styles/mixins";

export const AboutInfoContainer = styled.section`
  padding: 5rem 5rem;
  word-break: break-all;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  ${respondTo.sm`
    padding: 2rem 1rem;
  `}
`;

export const AboutArticle = styled.article`
  width: 90%;
  height: 100%;
  
  text-align: justify;
  font-size: 1.6rem;
`;
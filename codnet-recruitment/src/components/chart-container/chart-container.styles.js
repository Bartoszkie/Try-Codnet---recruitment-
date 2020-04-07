import styled from "styled-components";
import { respondTo } from "../../styles/mixins";

export const CharContainerWrapper = styled.section`
  grid-column: full-start / full-end;
  grid-row: 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-color: rgba(0, 0, 0, 0.1);

  padding: 15rem 2rem 2rem 2rem;

  ${respondTo.sm`
    padding: 25rem 2rem 2rem 2rem;
    justify-content: center;
  `}
`;

export const ChartButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%; 
`;

export const ChartButtonsLeft = styled.div``;

export const ChartButtonsRight = styled.div``;

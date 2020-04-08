import styled from "styled-components";
import { respondTo } from "../../styles/mixins";

export const CharContainerWrapper = styled.section`
  grid-column: center-start / center-end;
  grid-row: 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-color: rgba(0, 0, 0, 0.1);

  padding: 15rem 2rem 2rem 2rem;

  ${respondTo.lgSm`
       grid-column: left-space-start / right-space-end;
  `}

  ${respondTo.sm`
    padding: 5rem 2rem 2rem 2rem;
    justify-content: center;
  `}
`;

export const ChartMaxWidth = styled.div``;

export const ChartButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${respondTo.sm`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const ChartButtonsLeft = styled.div`
  & > button:nth-child(2) {
    margin-top: 1rem;
  }
`;

export const ChartButtonsRight = styled.div`
   & > button {
    margin-top: 1rem;
  }

  ${respondTo.sm`
      display: flex; 
      justify-content: center;
  `}
`;

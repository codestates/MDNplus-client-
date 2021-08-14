import styled from "styled-components";
import { fadeIn } from "../../../../styled-components/Animation";

export const TimeContainer_ON = styled.div`
  opacity: 1;
  width: 100%;
  height: 31rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;

  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;
export const TimeContainer_OFF = styled.div`
  opacity: 0;
  width: 100%;
  height: 30rem;
`;
export const TimeBox = styled.div`
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TimeImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-bottom: 1rem;
`;
export const TimeBoxTitle = styled.div`
  font-size: 2rem;
  color: #757575;
  margin-bottom: 1rem;
`;

export const Time = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;
export const TimeSub = styled.div`
  margin-top: 0.3rem;
`;

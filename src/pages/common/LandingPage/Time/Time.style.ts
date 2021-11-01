import styled from "styled-components";
import { fadeIn } from "../../../../styles/animation";

export const ContainerOn = styled.div`
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

  .time-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .time-img {
    width: 2rem;
    height: 2rem;
    margin-bottom: 1rem;
  }

  .time-title {
    font-size: 2rem;
    color: #757575;
    margin-bottom: 1rem;
  }

  .time {
    font-size: 3rem;
    font-weight: bold;
  }

  .time-sub {
    margin-top: 0.3rem;
  }
`;

export const ContainerOff = styled.div`
  opacity: 0;
  width: 100%;
  height: 30rem;
`;

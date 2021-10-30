import styled from "styled-components";
import { fadeIn } from '../../../../styles/animation';

export const Container_ON = styled.div`
  opacity: 1;
  width: 100%;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #eeeeee;

  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  .review-box-container {
    display: flex;

    @media (max-width: 500px) {
      display: grid;
    }
  }

  .review-title {
    font-weight: bold;
    font-size: 3rem;
    margin-top: 4rem;
    color: #424242;

    @media (max-width: 500px) {
      font-size: 1rem;
      margin-top: -10rem;
    }
  }

  .review-sub-title {
    font-size: 1.2rem;
    margin: 0.5rem 0 3rem 0;
    color: #757575;
  }

  .review-box {
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 25rem;
    border-radius: 0.3rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15),
      0 6px 20px 0 rgba(0, 0, 0, 0.15);
    margin: 2rem;
    padding: 1.2rem;
    position: relative;
    background: white;
  }

  .reviewer-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 20rem;
    margin-bottom: 1rem;
  }

  .reviewer-img {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
  }

  .reviewer-name {
    font-weight: bold;
    font-size: 1.2rem;
    color: #424242;
    margin-left: 1rem;
  }

  .review-body {
    font-size: 1.2rem;
    line-height: 2.3rem;
    color: #757575;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Container_OFF = styled.div`
  opacity: 0;
  width: 100%;
  height: 50rem;
`;
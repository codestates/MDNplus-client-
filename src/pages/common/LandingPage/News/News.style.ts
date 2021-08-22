import styled from "styled-components";
import { fadeIn } from "../../../../styled-components/Animation";

export const NewsContainer_ON = styled.div`
  opacity: 1;
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  .news-intro-box {
    width: 61rem;
    margin-bottom: 1rem;
  }

  .news-intro {
    font-size: 2rem;
    font-weight: bold;
  }

  .news-box {
    width: 65rem;
    height: 25rem;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.5rem;
    column-gap: 1.5rem;
  }

  .main-box {
    position: relative;
    grid-row: 1 / span 3;
    border: none;
    cursor: pointer;
  }

  .main-contents {
    position: absolute;
    top: 0;
    z-index: 2;
    padding: 2rem;
  }

  .main-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }

  .main-body {
    margin-top: 1rem;
    color: white;
    line-height: 1.7rem;
    word-spacing: 0.1rem;
  }

  .news-img {
    position: absolute;
    top: 0rem;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0.5rem;
  }

  .news-img.sub {
    left: 0rem;
  }

  .news-overlay {
    background: rgba(255, 255, 255, 0.2);
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0rem;
    z-index: 1;
    border-radius: 0.5rem;
  }

  .news-overlay.sub {
    left: 0rem;
  }

  .sub-box {
    padding: 2rem;
    position: relative;
    cursor: pointer;
  }

  .sub-title {
    position: absolute;
    top: 1.3rem;
    font-size: 1.2rem;
    color: white;
    z-index: 2;
  }

  .sub-title:nth-child(2) {
    top: 3rem;
  }
`;

export const NewsContainer_OFF = styled.div`
  opacity: 0;
  width: 100%;
  height: 40rem;
`;
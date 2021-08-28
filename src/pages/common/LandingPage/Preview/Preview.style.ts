import styled from "styled-components";
import {
  fadeIn,
  slideUp_short,
  slideLeft_line,
  slideRight_line,
  slideLeft_box,
  slideRight_box,
} from "../../../../styles/Animation";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .preview-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }

  .sub-box {
    position: absolute;
    top: 0rem;
    left: 0rem;
    width: 23vw;
    height: 100%;
    background: #cfd8dc;

    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
    animation-name: ${slideLeft_box};
    animation-fill-mode: forwards;
  }

  .sub-box.second {
    right: 0rem;
    left: auto;
    animation-name: ${slideRight_box};
  }

  .preview-img {
    width: 40rem;
    height: 37rem;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 1;

    animation-duration: 3s;
    animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
    animation-name: ${slideUp_short};
    animation-fill-mode: forwards;

    @media (max-width: 500px) {
      width: 20rem;
      height: 19rem;
    }
  }

  .appeal-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    animation-duration: 4s;
    animation-timing-function: cubic-bezier(0.65, 0.05, 0.32, 0.98);
    animation-name: ${slideUp_short};
    animation-fill-mode: forwards;
  }

  .appeal-box.second {
    margin-left: 2rem;
  }

  .appeal-title {
    width: 75%;
    margin-top: 10rem;
    margin-bottom: 1rem;
    color: #616161;
    font-size: 1.2rem;
  }

  .appeal-body {
    font-size: 2.5rem;
    font-weight: bold;
    width: 85%;
    line-height: 3.5rem;
    padding-left: 2rem;

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }

  .underline {
    width: 4rem;
    border: 1px solid black;
    position: absolute;
    top: 14rem;
    left: -2rem;

    animation-duration: 5s;
    animation-timing-function: ease-out;
    animation-name: ${slideLeft_line};
    animation-fill-mode: forwards;

    @media (max-width: 500px) {
      border: none;
    }
  }

  .underline.second {
    animation-name: ${slideRight_line};
    right: -2rem;
    left: 0rem;
  }

  .preview2 {
    grid-template-columns: 0.4fr 0.6fr;
  }
`;

export const PreviewContainer_ON = styled.div`
  opacity: 1;
  width: 100%;
  height: 45rem;
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  background: #fafafa;

  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const PreviewContainer_OFF = styled.div`
  opacity: 0;
  width: 100%;
  height: 45rem;
  //
`;

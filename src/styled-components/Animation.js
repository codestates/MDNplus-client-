import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

export const slideUp = keyframes`
  from {
    transform: translateY(20rem);
  }
  to {
    transform: translateY(0rem)
  }
`;

export const slideUp_AppealBox = keyframes`
  from {
    transform: translateY(5rem);
  }
  to {
    transform: translateY(0px)
  }
`;

// 랜딩페이지

export const fadeIn_img = keyframes`
  0% {
    opacity: 0;
  }

  25% {
    opacity: 0;
  }
  
  75% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const slideUp_Intro = keyframes`
  from {
    opacity: 0;
    transform: translateY(7rem);
  }
  to {
    opacity: 1;
    transform: translateY(0rem)
  }
`;

export const slideUp_short = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem)
  }
  25% {
    opacity: 0;
    transform: translateY(3rem)
  }

  50% {
    opacity: 0;
    transform: translateY(3rem)
  }

  100% {
    opacity: 1;
    transform: translateY(0rem)
  }
`;

export const slideLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50rem)
  }
  25% {
    opacity: 0;
    transform: translateX(-50rem)
  }
  50% {
    opacity: 0;
    transform: translateX(-50rem)
  }
  100% {
    opacity: 1;
    transform: translateX(0rem)
  }
`;

export const slideLeft_box = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50rem)
  }
  100% {
    opacity: 1;
    transform: translateX(0rem)
  }
`;



export const slideLeft_line = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-1rem)
  }
  25% {
    opacity: 0;
    transform: translateX(-1rem)
  }
  50% {
    opacity: 0;
    transform: translateX(-1rem)
  }
  100% {
    opacity: 1;
    transform: translateX(0rem)
  }
`;

export const slideRight = keyframes`
  from {
    transform: translateX(20rem)
  }
  to {
    transform: translateX(0rem)
  }
`

export const slideRight_box = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50rem)
  }
  100% {
    opacity: 1;
    transform: translateX(0rem)
  }
`;

export const slideRight_line = keyframes`
  0% {
    opacity: 0;
    transform: translateX(1rem)
  }
  25% {
    opacity: 0;
    transform: translateX(1rem)
  }
  50% {
    opacity: 0;
    transform: translateX(1rem)
  }
  100% {
    opacity: 1;
    transform: translateX(0rem)
  }
`;
import styled, {keyframes} from 'styled-components'

export const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

export const slideUp = keyframes`
  from {
    transform: translateY(20rem);
  }
  to {
    transform: translateY(0px)
  }
`

export const slideUp_AppealBox = keyframes`
  from {
    transform: translateY(5rem);
  }
  to {
    transform: translateY(0px)
  }
`



// 랜딩페이지
export const slideUp_Intro = keyframes`
  from {
    transform: translateY(5rem);
  }
  to {
    transform: translateY(0rem)
  }
`

export const example = keyframes`
  0% {
    transform: translateY(20rem);
  }
  100% {
    transform: translateY(0rem);
  }

`
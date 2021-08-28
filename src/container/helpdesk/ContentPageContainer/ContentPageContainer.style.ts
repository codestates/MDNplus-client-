import styled from "styled-components"

export const Container = styled.div`
position: relative;
height: 100%;
width: 100%;

@media (max-width: 375px) {
  height: 100vh;
  width: 100vw;
}

.back-btn {
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 1.2rem;
  color: #78909c;
  cursor: pointer;
  @media (max-width: 375px) {
    font-size: 1rem;
    top: 0.2rem;
    bottom: 0.5rem;
    left: 0;
  }
}
`;

export const QuestionContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const AnswerContainer = styled.div`
background: #f6f6f6;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-bottom: 5rem;

.answer-box {
  background: white;
  padding: 5rem 1rem 5rem 1rem;
  width: 60%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  @media (max-width: 375px) {
    width: 100%;
  }
}
`;

import styled from "styled-components";

export const HeartIcon = styled.span``;

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  @media (max-width: 375px) {
    height: 100vh;
    width: 100vw;
  }
`;

export const BackBtn = styled.span`
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 1.3rem;
  color: #78909c;
  cursor: pointer;
  @media (max-width: 375px) {
    font-size: 1rem;
    top: 0.2rem;
    bottom: 0.5rem;
    left: 0;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LikeBox_Q = styled.div`
  display: flex;
  justity-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  cursor: pointer;
  @media (max-width: 375px) {
    margin-left: 1rem;
  }
`;

export const LikeNum_Q = styled.span``;

export const QuestionBox = styled.div`
  width: 50%;
  padding: 3rem;
  @media (max-width: 375px) {
    margin-top: 0.5rem;
    font-size: 1rem;
    width: 100%;
  }
`;

export const QuestionTitleBox = styled.div`
  padding-bottom: 1rem;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const TitleIcon = styled.span`
  border: none;
  padding: 0.7rem;
  background: #90a4ae;
  color: white;
  font-weight: bold;
  margin-right: 0.5rem;
  width: 4rem;
  text-align: center;

  @media (max-width: 375px) {
    font-size: 0.8rem;
    padding: 0.15rem;
  }
`;

export const QuestionTitle = styled.span`
  font-size: 1.2rem;
  @media (max-width: 375px) {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

export const QuestionBody = styled.div`
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

export const TagBox = styled.div`
  height: 3rem;
`;

export const Tag = styled.span`
  color: #78909c;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    color: #2196f3;
  }
`;

export const InfoBox_Q = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImg_Q = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.4rem;
  border: none;
`;

export const UserName_Q = styled.span`
  margin-right: 0.4rem;
  color: black;
  font-size: 0.9rem;
  @media (max-width: 375px) {
    font-size: 0.6rem;
  }
`;

export const Date_Q = styled.span`
  color: #757575;
  font-size: 0.8rem;
  padding-bottom: 0.1rem;
  @media (max-width: 375px) {
    font-size: 0.6rem;
  }
`;
export const AnswerBtn = styled.button`
  margin-left: auto;
  padding: 0.7rem 1rem 0.7rem 1rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  @media (max-width: 375px) {
    font-size: 0.6rem;
  }
`;

export const AnswerContainer = styled.div`
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5rem;
`;

export const AnswerBox = styled.div`
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
`;

export const LikeBox_A = styled.div`
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 2.5rem;
  margin: 3rem 0.5rem 0rem -2rem;
  cursor: pointer;
  @media (max-width: 375px) {
    margin: 0;
  }
`;

export const LikeNum_A = styled.div``;

export const Answer = styled.div`
  margin-top: -3rem;
  position: relative;
  width: 75%;
`;

export const AnswerTitleBox = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;

export const AnswerUserImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
`;

export const AnswerTitle = styled.span`
  font-weight: bold;
`;

export const AnswerTitle_empty = styled.div`
  text-align: center;
  width: 100%;
  font-size: 1.2rem;
  color: #424242;
`;

export const AnswerBody = styled.div`
  line-height: 2rem;
`;

export const Date_A = styled.div`
  color: #757575;
  position: absolute;
  bottom: -3rem;
  right: 0rem;
`;

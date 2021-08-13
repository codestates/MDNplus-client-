import styled from "styled-components";

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  // border: 1px solid black;
  margin-top: 2rem;
  width: 75%;
  padding: 4rem 0 4rem 0;
  border-bottom: 1px solid #bdbdbd;
`;

export const UserInfoImage = styled.img`
  width: 7em;
  height: 7em;
  border-radius: 50%;
  object-fit: cover;
  @media (max-width: 375px) {
    width: 5em;
    height: 5em;
  }
`;

export const UserInfoName = styled.div`
  font-weight: bold;
  font-size: 2.2rem;
  margin-left: 3.5rem;
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10rem;
`;

export const Stage = styled.div`
  width: 80%;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  padding: 3rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: 100%;
`;

export const QuestionBtn = styled.div`
  margin: 2rem 0rem 1rem 0rem;
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const AnswerBtn = styled.div`
  margin: 1rem 0rem 1rem 0rem;
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const RightContainer = styled.div``;

export const QuestionContainer = styled.div``;

export const QuestionBox = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 0 1rem 1rem 1rem;
  cursor: pointer;
  margin: 2rem 0 2rem 0;
`;

export const QuestionTitle = styled.span`
  font-weight: 600;
  font-size: 1.3rem;
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

export const QuestionBody = styled.div`
  line-height: 1.8rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`;

export const QuestionLastLine = styled.div`
  color: #686868;
  margin-top: 1rem;
  font-size: 0.8rem;
`;

export const QuestionDate = styled.span`
  @media (max-width: 375px) {
    font-size: 0.5rem;
  }
`;

export const QuestionAnswersNum = styled.span`
  margin-left: 0.8rem;
`;

export const QuestionLikes = styled.span`
  margin-left: 0.8rem;
  @media (max-width: 375px) {
    font-size: 0.5rem;
  }
`;

export const EmptyComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 30rem;
  height: 30rem;
  margin-top: -3rem;
`;

export const EmptyMessage = styled.div`
  color: #9e9e9e;
  font-size: 2rem;
  margin-top: -3rem;
`;

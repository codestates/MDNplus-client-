import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    height: 100vh;
    width: 100vw;
  }
`;

export const LeftContainer = styled.div`
  height: 100%;
  width: 100%;
  @media (max-width: 375px) {
    height: 100%;
    width: 100%;
  }
`;

export const QuestionBox = styled.div`
  height: 40%;
  overflow-y: auto;
  padding: 3rem 3rem 1.5rem 3rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const QuestionTitleBox = styled.div``;

export const TitleIcon = styled.span`
  border: none;
  padding: 0.7rem;
  background: #90a4ae;
  color: white;
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const QuestionTitle = styled.span`
  font-size: 1.2rem;
`;

export const QuestionBody = styled.div`
  margin: 2em 0 2em 0;
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
`;

export const Date_Q = styled.span`
  color: #757575;
  font-size: 0.8rem;
  padding-bottom: 0.1rem;
`;

export const WritingArea = styled.div`
  width: 100%;
  height: 60%;
  resize: none;
  outline: none;
  font-size: 1.3rem;
  margin: 1.5rem 0rem 3rem 3rem;
  @media (max-width: 375px) {
    height: 100%;
    width: 100%;
  }
`;

export const WritingTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #686868;
  margin-bottom: 1rem;
`;

export const Body = styled.textarea`
  width: 90%;
  height: 60%;
  border: none;
  outline: none;
  resize: none;
  font-size: 1rem;
  @media (max-width: 375px) {
    height: 100%;
    width: 100%;
  }
`;

export const RightContainer = styled.div`
  background-color: #f5f5f5;
  padding: 1.3rem 3rem 3rem 3rem;
  height: 100%;
  width: 100%;
  @media (max-width: 375px) {
    display: none;
  }
`;

export const PreviewTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: #686868;
  margin: 3rem 0rem 3rem 0rem;
  padding-bottom: 1rem;
  border-bottom: 0.05rem solid #e0e0e0;
  width: 100%;
`;

export const UserInfoImage = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfoName = styled.span`
  margin-left: 2rem;
`;

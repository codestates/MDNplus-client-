import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Stage = styled.div`
  width: 93%;
`;

export const IntroBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const IntroContents = styled.div``;

export const IntroTitle = styled.h1`
  color: #757575;
  font-weight: 600;
`;

export const IntroLetter = styled.div`
  margin-top: -1rem;
  color: #9e9e9e;
  font-weight: bold;
`;

export const Icon = styled.img`
  width: 6rem;
  margin-top: 1rem;
`;

export const QuestionBtn = styled.button`
  position: absolute;
  right: 0rem;
  // margin-right: 2rem;
  font-size: 0.9rem;
  padding: 0.7rem 1.2rem 0.7rem 1.2rem;
  border-radius: 1.2rem;
  border: none;
  background: #1976d2;
  color: white;
  cursor: pointer;
  z-index: 0;
`;

export const Questions = styled.div`
  // border: 1px solid blue;
  padding: 2rem;
`;

export const FilterBox = styled.div`
  width: 100%;
  display: flex;
  margin: 2rem 0rem 1rem 3rem;
`;

export const FilterFast = styled.span`
  color: #757575;
  cursor: pointer;
  // margin-right: 0.5rem;
`;

export const FilterFast_Selected = styled.span`
  font-weight: bold;
  cursor: pointer;
  // margin-right: 0.5rem;
  color: #3f51b5;
`;

export const FilterPopular = styled.span`
  color: #757575;
  cursor: pointer;
  margin-left: 1.5rem;
`;

export const FilterPopular_Selected = styled.span`
  font-weight: bold;
  cursor: pointer;
  margin-left: 1.5rem;

  color: #3f51b5;
`;

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: repeat(1, auto);
  }
`;

export const QuestionBox = styled.div`
  border-top: 0.01px solid #e0e0e0;
  padding: 2rem;
  // padding-top: 1rem;
`;

export const TitleBox = styled.div`
  cursor: pointer;
  width: 100%;
`;

export const FixedLetter = styled.span`
  color: #1658d8;
  margin-right: 0.5rem;
  font-weight: 600;
  font-size: 1.2rem;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export const Body = styled.div`
  cursor: pointer;
  margin-top: 0.5rem;
  margin-left: 1.3rem;
  font-size: 0.8rem;
  color: #757575;
`;
export const TagBox = styled.div`
  margin-top: 1.8rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.span`
  // margin-left: 0.3rem;
  background: #f6f6f6;
  color: #686868;
  border-radius: 2rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 0.7rem;
  cursor: pointer;

  &:hover {
    background-color: #2196f3;
    color: white;
  }
`;

export const NumberBox = styled.div`
  padding-top: 1rem;
  margin-bottom: -1rem;
`;

export const LikesNum = styled.span`
  color: #686868;
  font-size: 0.8rem;
  // margin-left: 1rem;
  // margin-right: 1rem;
  margin-top: 1rem;
`;

export const AnswersNum = styled.span`
  font-size: 0.8rem;
  margin-left: 1rem;
  color: #686868;
`;

export const CreatedAt = styled.span`
  font-size: 0.8rem;
  color: #686868;
  margin-left: 1rem;
`;

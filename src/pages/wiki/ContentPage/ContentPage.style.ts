import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 10rem;

  @media (max-width: 375px) {
    height: 100vh;
    width: 100vw;
    justify-content: center;
  }
`;

export const ContentBox = styled.div`
  width: 53%;
  margin-top: 2rem;
  margin-left: -10rem;
  line-height: 1.5rem;

  @media (max-width: 375px) {
    font-size: 1rem;
    margin: 0.5rem;
    width: 100%;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 375px) {
    align-items: center;
    justify-content: space-around;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  display: inline-block;
  @media (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const EditBtn = styled.span`
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 4rem;
  margin-right: 1rem;
  @media (max-width: 375px) {
    margin: 0;

    font-size: 0.8rem;
  }
`;

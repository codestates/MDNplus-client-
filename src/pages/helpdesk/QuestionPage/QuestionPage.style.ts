import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    height: 100vh;
    width: 100vw;
  }
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
`;

export const LeftContainer = styled.div`
  padding: 0px 2.8rem 2.8rem 2.8rem;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.textarea`
  border: none;
  font-size: 1.6rem;
  margin-top: 2rem;
  resize: none;
  outline: none;
  width: 100%;
  overflow: hidden;
`;

export const UnderLine = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #e0e0e0;
  margin-top: 1.3rem;
  margin-bottom: 1.3rem;
`;

export const TagBox = styled.div``;

export const TagInput = styled.input`
  border: none;
  margin-top: 1.2rem;
  font-size: 1rem;
  outline: none;
`;

export const Tag = styled.span`
  border-radius: 1rem;
  padding: 0.3rem 0.7rem 0.3rem 0.7rem;
  margin-right: 0.7rem;
  cursor: pointer;
  background: #eeeeee;
  color: #0055fa;
`;

export const Body = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 1rem;
  margin-top: 0.8rem;
  color: black;
`;

export const RightContainer = styled.div`
  background: #f4f4f4;
  padding: 0.7rem 3rem 3rem 3rem;
  position: relative;
  @media (max-width: 375px) {
    display: none;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
`;

export const LeftContainer = styled.div`
  // padding: 0px 30px 30px 30px;
  padding: 1.5rem;
  height: 100vw;
s`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  display: inline-block;
`;

export const Body = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
`;

export const RightContainer = styled.div`
  background: #f4f4f4;
  padding: 0px 30px 30px 30px;
  line-height: 2rem;
  word-spacing: 0.2rem;
  padding: 1.5rem;
`;
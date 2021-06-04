import styled from "styled-components";
import spinGIF from "../img/spinGIF.gif";

function Loading() {
  return (
    <LoadingContainer>
      <Img src={spinGIF}></Img>
    </LoadingContainer>
  );
}

export default Loading;

const LoadingContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  margin-top: 5rem;
`

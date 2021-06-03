import styled from "styled-components";
import spinGIF from "../img/spinGIF.gif";

function Loading() {
  return (
    <LoadingContainer>
      <img src={spinGIF}></img>
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

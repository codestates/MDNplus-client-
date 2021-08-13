import styled from "styled-components";
import spinGIF from "../../img/spinGIF.gif";

function Loading() {
  return (
    <Container>
      <Img src={spinGIF}></Img>
    </Container>
  );
}

export default Loading;

const Container = styled.div`
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

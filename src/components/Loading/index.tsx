import styled from "styled-components";

function Loading() {
  return (
    <Container>
      <Img src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112352/spinGIF_shsswk.gif"></Img>
    </Container>
  );
}

export default Loading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65vh;
`;

const Img = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;

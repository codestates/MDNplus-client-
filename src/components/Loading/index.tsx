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
`;

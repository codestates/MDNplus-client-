import styled from "styled-components";

function FooterComponent() {
  return (
    <Container>
      <ContentContainer>
        <TopContent>MDN+ </TopContent>
        <BottomContent>
          Front-End : 문성석 김준래
          <br />
          Back-End : 조은길 김승용
          <br />
        </BottomContent>
      </ContentContainer>
    </Container>
  );
}

export default FooterComponent;

const Container = styled.div`
  background: #1a237e;
  width: 100%;
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 375px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  font-size: 1.3rem;
  padding: 3rem 0 3rem 0;
  color: #e0e0e0;
  width: 70%;
  height: 100%;
`;

const TopContent = styled.div`
  padding-bottom: 1rem;
  font-size: 3rem;
`;

const BottomContent = styled.div`
  line-height: 2rem;
  font-size: 1rem;
`;

import styled from "styled-components";

function FooterComponent() {
  return (
    <Container>
      <ContentContainer>
        <TopContent>BO3 Company &nbsp; </TopContent>
        <BottomContent>&nbsp;Front-End : 문성석 김준래 &nbsp; &nbsp;Back-End : 조은길 김승용</BottomContent>
      </ContentContainer>
    </Container>
  );
}

export default FooterComponent;

const Container = styled.div`
  background: #1a237e;
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 375px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  display: flex;

  align-items: center;
  font-size: 1.3rem;

  color: #e0e0e0;
  width: 70%;
  height: 100%;
`;

const TopContent = styled.span`
  padding-bottom: 0.5rem;
  font-size: 2rem;
`;

const BottomContent = styled.span`
  line-height: 2rem;
  font-size: 1rem;
`;

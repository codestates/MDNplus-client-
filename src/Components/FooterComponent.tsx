import styled from "styled-components";

function FooterComponent() {
  return (
    <Container>
      <ContentContainer>
        <TopContent>서비스이용약관 | 개인정보처리방침 </TopContent>
        <BottomContent>
          주식회사 마음수업 <br /> 서울시 중구 삼일대로 343 대신파이낸스센터 16층 위워크 <br /> 대표이사: Tudor Daniel Robert <br />
          사업자등록번호: 406-81-05065 <br /> 통신판매업신고번호: 제2019-서울종로-0883호
        </BottomContent>
      </ContentContainer>
    </Container>
  );
}

export default FooterComponent;

const Container = styled.div`
  background: #1a237e;
  width: 100%;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const BottomContent = styled.div`
  line-height: 2rem;
  font-size: 1rem;
`;

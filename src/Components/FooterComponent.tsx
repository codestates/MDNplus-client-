import styled from "styled-components";

function FooterComponent() {
  return (
    <Container>
      <ContentContainer>
        <LogoContainer>
          <Logo>MDN+ </Logo>
          <CopyRight>ⓒ 2021. MDN+ all rights reserved.</CopyRight>
        </LogoContainer>

        <Company>
          <Title>Company</Title>
          <Contents>
            <div>About us</div>
            <div>Jobs</div>
            <div>Contact</div>
          </Contents>
        </Company>
        <Product>
          <Title>Product</Title>
          <Contents>
            <div>Features</div>
            <div>Pricing</div>
            <div>Apps</div>
            <div>Support</div>
          </Contents>
        </Product>
        <Resources>
          <Title>Resources</Title>
          <Contents>
            <div>Education</div>
            <div>Wrok</div>
          </Contents>
        </Resources>
        <AboutUs>
          <Title> About us </Title>

          <Contents>
            <div>
              <Atag href="https://github.com/codestates/MDNplus-client-">Visit US!</Atag>
            </div>
            <div>Seongseok Moon</div>
            <div>Junrae Kim</div>
            <div>Eungil Cho</div>
            <div>Seungyong Kim</div>
          </Contents>
        </AboutUs>
      </ContentContainer>
    </Container>
  );
}

//&nbsp;Front-End : 문성석 김준래 &nbsp; &nbsp;Back-End : 조은길 김승용

export default FooterComponent;

const Container = styled.div`
  background: #f5f5f5;
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 375px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  color: #616161;
  display: flex;
  justify-content: space-between;
  width: 65%;
  height: 100%;
  font-size: 1.2rem;
  padding: 3rem 0 3rem 0;
`;

const LogoContainer = styled.span`
  font-size: 2.2rem;
  font-weight: bold;
`;

const Logo = styled.div`
  font-family: sans-serif;
`;

const Company = styled.div``;

const Product = styled.div``;

const Resources = styled.span``;

const AboutUs = styled.span``;

const Title = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
`;

const Contents = styled.span`
  font-size: 0.8rem;
  line-height: 1.8rem;
  font-weight: normal;
  cursor: pointer;
`;

const CopyRight = styled.div`
  font-size: 0.8rem;
  margin-top: 1rem;
`;

const Atag = styled.a`
  color: #616161;
  text-decoration: none;
`;

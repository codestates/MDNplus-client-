import {
  MainNews,
  MainNewsBody,
  MainNewsContents,
  MainNewsImg,
  MainNewsOverlay,
  MainNewsTitle,
  NewsBox,
  NewsContainer_OFF,
  NewsContainer_ON,
  NewsIntro1,
  NewsIntro2,
  NewsIntroBox,
  SubNews,
  SubNewsImg,
  SubNewsOverlay,
  SubNewsTitle1,
  SubNewsTitle2,
} from "./News.style";

type NewsSectionProps = {
  currentY: number;
};

function NewsSection({ currentY }: NewsSectionProps) {
  return (
    <>
      {currentY >= 3200 ? (
        <NewsContainer_ON>
          <NewsIntroBox>
            <NewsIntro1>MDN+</NewsIntro1>
            <NewsIntro2> 뉴스</NewsIntro2>
          </NewsIntroBox>
          <NewsBox>
            <MainNews>
              <MainNewsContents>
                <MainNewsTitle>개발 공부가 힘들 때</MainNewsTitle>
                <MainNewsTitle>'MDN+'를 이용해요</MainNewsTitle>
                <MainNewsBody>
                  "개발 공부를 시작하면서 MDN을 많이 참고했는데 번역이 매끄럽지
                  않고 조금 어렵게 설명이 되어있는 부분들이 있더라구요. 그래서
                  이런 부분들을 현업에서 일하는 개발자들 또는 개발을 공부하는
                  사람들이 자유롭게 수정을 하며 새롭게 MDN을 재구성한다면 어떨까
                  생각을 ...
                </MainNewsBody>
              </MainNewsContents>
              <MainNewsImg src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112351/MainNews_nej1zj.jpg"></MainNewsImg>
              <MainNewsOverlay></MainNewsOverlay>
            </MainNews>
            <SubNews>
              <SubNewsTitle1>사용자라면 누구든지 수정이 가능한</SubNewsTitle1>
              <SubNewsTitle2>MDN판 위키백과</SubNewsTitle2>
              <SubNewsOverlay></SubNewsOverlay>
              <SubNewsImg src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112352/pen_b7vxvc.jpg"></SubNewsImg>
            </SubNews>
            <SubNews>
              <SubNewsTitle1>MDN+,</SubNewsTitle1>
              <SubNewsTitle2>누적 사용자 5만명 돌파</SubNewsTitle2>
              <SubNewsOverlay></SubNewsOverlay>
              <SubNewsImg src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112351/network_nunmed.jpg"></SubNewsImg>
            </SubNews>
            <SubNews>
              <SubNewsTitle1>예비 개발자라면</SubNewsTitle1>
              <SubNewsTitle2>꼭 알아야 할 5가지</SubNewsTitle2>
              <SubNewsOverlay></SubNewsOverlay>
              <SubNewsImg src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112351/note_hx9pna.jpg"></SubNewsImg>
            </SubNews>
          </NewsBox>
        </NewsContainer_ON>
      ) : (
        <NewsContainer_OFF></NewsContainer_OFF>
      )}
    </>
  );
}

export default NewsSection;

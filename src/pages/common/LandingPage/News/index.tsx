import { NewsContainer_OFF, NewsContainer_ON } from "./News.style";

type NewsSectionProps = {
  currentY: number;
};

function NewsSection({ currentY }: NewsSectionProps) {
  return (
    <>
      {currentY >= 3200 ? (
        <NewsContainer_ON>
          <div className="news-intro-box">
            <span className="news-intro">MDN+</span>
            <span className="news-intro"> 뉴스</span>
          </div>
          <div className="news-box">
            <div className="main-box">
              <div className="main-contents">
                <div className="main-title">개발 공부가 힘들 때</div>
                <div className="main-title">'MDN+'를 이용해요</div>
                <div className="main-body">
                  "개발 공부를 시작하면서 MDN을 많이 참고했는데 번역이 매끄럽지
                  않고 조금 어렵게 설명이 되어있는 부분들이 있더라구요. 그래서
                  이런 부분들을 현업에서 일하는 개발자들 또는 개발을 공부하는
                  사람들이 자유롭게 수정을 하며 새롭게 MDN을 재구성한다면 어떨까
                  생각을 ...
                </div>
              </div>
              <img
                className="news-img"
                src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112351/MainNews_nej1zj.jpg"
              ></img>
              <div className="news-overlay"></div>
            </div>
            <div className="sub-box">
              <div className="sub-title">사용자라면 누구든지 수정이 가능한</div>
              <div className="sub-title">MDN판 위키백과</div>
              <div className="news-overlay sub"></div>
              <img
                className="news-img sub"
                src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112352/pen_b7vxvc.jpg"
              ></img>
            </div>
            <div className="sub-box">
              <div className="sub-title">MDN+,</div>
              <div className="sub-title">누적 사용자 5만명 돌파</div>
              <div className="news-overlay sub"></div>
              <img
                className="news-img sub"
                src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112351/network_nunmed.jpg"
              ></img>
            </div>
            <div className="sub-box">
              <div className="sub-title">예비 개발자라면</div>
              <div className="sub-title">꼭 알아야 할 5가지</div>
              <div className="news-overlay sub"></div>
              <img
                className="news-img sub"
                src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112351/note_hx9pna.jpg"
              ></img>
            </div>
          </div>
        </NewsContainer_ON>
      ) : (
        <NewsContainer_OFF></NewsContainer_OFF>
      )}
    </>
  );
}

export default NewsSection;

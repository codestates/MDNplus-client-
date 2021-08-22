import { Container_OFF, Container_ON } from "./Time.style";

type NavContainerProps = {
  currentY: number;
};

function TimeSection({ currentY }: NavContainerProps) {
  return (
    <>
      {currentY >= 260 ? (
        <Container_ON>
          <div className="time-box">
            <img
              className="time-img"
              src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112349/clockIcon_qedx9c.png"
            ></img>
            <div className="time-title">MDN+로 아낀 개발 검색 시간</div>
            <div className="time">153,352분</div>
            <div className="time-sub">* 2021년 6월 설문조사 기준</div>
          </div>
        </Container_ON>
      ) : (
        <Container_OFF></Container_OFF>
      )}
    </>
  );
}

export default TimeSection;

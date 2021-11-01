import { ContainerOff, ContainerOn } from "./Time.style";

type NavContainerProps = {
  currentY: number;
};

function TimeSection({ currentY }: NavContainerProps) {
  return (
    <>
      {currentY >= 260 ? (
        <ContainerOn>
          <div className="time-box">
            <img
              className="time-img"
              alt="clock"
              src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112349/clockIcon_qedx9c.png"
            ></img>
            <div className="time-title">MDN+로 아낀 개발 검색 시간</div>
            <div className="time">153,352분</div>
            <div className="time-sub">* 2021년 6월 설문조사 기준</div>
          </div>
        </ContainerOn>
      ) : (
        <ContainerOff></ContainerOff>
      )}
    </>
  );
}

export default TimeSection;

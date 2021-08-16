import {
  Time,
  TimeBox,
  TimeBoxTitle,
  TimeContainer_OFF,
  TimeContainer_ON,
  TimeImg,
  TimeSub,
} from "./Time.style";

type NavContainerProps = {
  currentY: number;
};

function TimeSection({ currentY }: NavContainerProps) {
  return (
    <>
      {currentY >= 260 ? (
        <TimeContainer_ON>
          <TimeBox>
            <TimeImg src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112349/clockIcon_qedx9c.png"></TimeImg>
            <TimeBoxTitle>MDN+로 아낀 개발 검색 시간</TimeBoxTitle>
            <Time>153,352분</Time>
            <TimeSub>* 2021년 6월 설문조사 기준</TimeSub>
          </TimeBox>
        </TimeContainer_ON>
      ) : (
        <TimeContainer_OFF></TimeContainer_OFF>
      )}
    </>
  );
}

export default TimeSection;

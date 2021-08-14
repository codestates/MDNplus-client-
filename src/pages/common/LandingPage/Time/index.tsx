import {
  Time,
  TimeBox,
  TimeBoxTitle,
  TimeContainer_OFF,
  TimeContainer_ON,
  TimeImg,
  TimeSub,
} from "./Time.style";
import clockIcon from "../../../../img/clockIcon.png";

type NavContainerProps = {
  currentY: number;
};

function TimeSection({ currentY }: NavContainerProps) {
  return (
    <>
      {currentY >= 260 ? (
        <TimeContainer_ON>
          <TimeBox>
            <TimeImg src={clockIcon}></TimeImg>
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

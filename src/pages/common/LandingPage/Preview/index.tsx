import {
  AppealBody,
  AppealBox,
  Preview1Container_OFF,
  Preview1Container_ON,
  Preview2Container_OFF,
  Preview2Container_ON,
  AppealTitle,
  PreviewBox,
  PreviewImg,
  SubBox1,
  SubBox2,
  UnderLine1,
  UnderLine2,
} from "./Preview.style";
import appeal1 from "../../../../img/appeal1.png";
import appeal2 from "../../../../img/appeal2.png";
import styled from "styled-components";

type PreviewSectionProps = {
  currentY: number;
};

function PreviewSection({ currentY }: PreviewSectionProps) {
  return (
    <>
      {currentY >= 600 ? (
        <Preview1Container_ON>
          <PreviewBox>
            <SubBox1></SubBox1>
            <PreviewImg src={appeal1}></PreviewImg>
          </PreviewBox>
          <AppealBox>
            <UnderLine1></UnderLine1>
            <AppealTitle>MDN+ 위키</AppealTitle>
            <AppealBody>
              개발자들이 자유롭게 작성해놓은 개발 정보들을 얻어가세요!
            </AppealBody>
          </AppealBox>
        </Preview1Container_ON>
      ) : (
        <Preview1Container_OFF></Preview1Container_OFF>
      )}

      <EmptySpace></EmptySpace>

      {currentY >= 1300 ? (
        <Preview2Container_ON>
          <AppealBox>
            <UnderLine2></UnderLine2>
            <AppealTitle>헬프데스크</AppealTitle>
            <AppealBody>
              개발 관련 정보들을 찾는데 시간이 오래 걸리셨나요?
            </AppealBody>
            <AppealBody>헬프데스크에 질문하세요!</AppealBody>
          </AppealBox>
          <PreviewBox>
            <SubBox2></SubBox2>
            <PreviewImg src={appeal2}></PreviewImg>
          </PreviewBox>
        </Preview2Container_ON>
      ) : (
        <Preview2Container_OFF></Preview2Container_OFF>
      )}
    </>
  );
}

export default PreviewSection;

const EmptySpace = styled.div`
  width: 100%;
  height: 10rem;
  // border: 1px solid black;
`;

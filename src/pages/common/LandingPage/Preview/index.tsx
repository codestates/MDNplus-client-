import {
  PreviewContainerOff,
  PreviewContainerOn,
  Container,
} from "./Preview.style";
import styled from "styled-components";

type PreviewSectionProps = {
  currentY: number;
};

function PreviewSection({ currentY }: PreviewSectionProps) {
  return (
    <Container>
      {currentY >= 600 ? (
        <PreviewContainerOn className="preview1">
          <div className="preview-box">
            <div className="sub-box"></div>
            <img
              className="preview-img"
              alt="preview of wiki service"
              src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112348/appeal1_ekduys.png"
            ></img>
          </div>
          <div className="appeal-box">
            <div className="underline"></div>
            <div className="appeal-title">MDN+ 위키</div>
            <div className="appeal-body">
              개발자들이 자유롭게 작성해놓은 개발 정보들을 얻어가세요!
            </div>
          </div>
        </PreviewContainerOn>
      ) : (
        <PreviewContainerOff></PreviewContainerOff>
      )}

      <EmptySpace></EmptySpace>

      {currentY >= 1300 ? (
        <PreviewContainerOn className="preview2">
          <div className="appeal-box second">
            <div className="underline second"></div>
            <div className="appeal-title">헬프데스크</div>
            <div className="appeal-body">
              개발 관련 정보들을 찾는데 시간이 오래 걸리셨나요?
            </div>
            <div className="appeal-body">헬프데스크에 질문하세요!</div>
          </div>
          <div className="preview-box">
            <div className="sub-box second"></div>
            <img
              className="preview-img"
              alt="preview of helpdesk service"
              src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112349/appeal2_nehb8u.png"
            ></img>
          </div>
        </PreviewContainerOn>
      ) : (
        <PreviewContainerOff></PreviewContainerOff>
      )}
    </Container>
  );
}

export default PreviewSection;

const EmptySpace = styled.div`
  width: 100%;
  height: 10rem;
`;

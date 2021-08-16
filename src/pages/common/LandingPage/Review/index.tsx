import {
  ReviewBody,
  ReviewBox,
  ReviewBoxContainer_OFF,
  ReviewBoxContainer_ON,
  ReviewBoxSubTitle,
  ReviewBoxTitle,
  ReviewFlexBox,
  Reviewer,
  ReviewerBox,
  ReviewerImg,
} from "./Review.style";

type ReviewSectionProps = {
  currentY: number;
};

function ReviewSection({ currentY }: ReviewSectionProps) {
  return (
    <>
      {currentY >= 2350 ? (
        <ReviewBoxContainer_ON>
          <ReviewBoxTitle>
            개발공부에 얼마나 많은 도움이 되었을까?{" "}
          </ReviewBoxTitle>
          <ReviewBoxSubTitle>
            언제 어디서든 MDN+에 있는 여러 개발자분들 덕분에 개발공부에 두려움이
            없어졌어요.
          </ReviewBoxSubTitle>
          <ReviewFlexBox>
            <ReviewBox>
              <ReviewerBox>
                <ReviewerImg src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112348/avatar1_hedjen.png"></ReviewerImg>
                <Reviewer>코드스테이츠 27기 김코딩</Reviewer>
              </ReviewerBox>
              <ReviewBody>
                MDN에 번역이 조금 이해가 안되는 부분들이 있었어서 힘들었는데
                MDN+ 위키에 어떤 분이 좀 더 자연스럽게 번역해서 올리셨더라구요.
                잘못된 정보들도 몇군데 있었는데, 제가 직접 수정하면서 동시에
                공부도 할 수 있었어서 개발 공부에 도움이 많이 됐습니다.
              </ReviewBody>
            </ReviewBox>
            <ReviewBox>
              <ReviewerBox>
                <ReviewerImg src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112348/avatar2_zi6fmz.png"></ReviewerImg>
                <Reviewer>주니어 개발자 문코딩</Reviewer>
              </ReviewerBox>
              <ReviewBody>
                처음으로 혼자 진행하던 사이드 프로젝트에서 오류가 발생해
                며칠동안 밤을 새도 답이 안나왔었는데 시니어 개발자님이 답변을
                달아주셔서 해결할 수 있었습니다! 앞으로도 개발하면서 계속 이용할
                것 같습니다. 좋은 서비스 감사합니다 :)
              </ReviewBody>
            </ReviewBox>
            <ReviewBox>
              <ReviewerBox>
                <ReviewerImg src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112349/avatar3_j6uvwn.png"></ReviewerImg>
                <Reviewer>개발 3년차 조코딩</Reviewer>
              </ReviewerBox>
              <ReviewBody>
                MDN+ 헬프데스크에 올라오는 질문들에 틈틈히 답변을 달았었습니다.
                나중에 이직하는 과정에서 이러한 경험들을 자기소개서에 담았더니,
                면접관님이 좋게봐주셔서 무사히 원하던 기업에 이직할 수
                있었습니다. 정말 감사합니다 !
              </ReviewBody>
            </ReviewBox>
          </ReviewFlexBox>
        </ReviewBoxContainer_ON>
      ) : (
        <ReviewBoxContainer_OFF></ReviewBoxContainer_OFF>
      )}
    </>
  );
}

export default ReviewSection;

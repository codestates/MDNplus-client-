import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { RootState } from "../../../modules";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import AnswerModal from "../../../components/AnswerModal";
import useBooleanData from "../../../hooks/useBooleanData";
import axios from "axios";
import HelpModal from "../../../components/HelpModal";
import {
  ExitBtn,
  SubmitBtn,
  HelpBtn,
  BtnBox,
} from "../../../styled-components/Post";
import {
  UserName_Q,
  Body,
  Container,
  Date_Q,
  InfoBox_Q,
  LeftContainer,
  PreviewTitle,
  QuestionBody,
  QuestionBox,
  QuestionTitle,
  QuestionTitleBox,
  RightContainer,
  TitleIcon,
  UserImg_Q,
  UserInfoImage,
  UserInfoName,
  WritingArea,
  WritingTitle,
} from "./AnswerPage.style";

type PropsOption = {
  helpModal: Boolean;
  handleHelpModal: () => void;
};

function AnswerPage({ helpModal, handleHelpModal }: PropsOption) {
  const allState = useSelector((state: RootState) => state.AnswerPageReducer);
  const { onSetWriteMode } = useBooleanData();
  const [writing, setWriting] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [btnName, setbtnName] = useState("");
  const previewRef = useRef<any>(null);
  const [userInfo, setUserInfo] = useState({
    img: "",
    nickName: "",
  });
  const { displayQuestion } = allState;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWriting(e.target.value);
  };

  const handleBtns = (e: string) => {
    setbtnName(e);
    setIsOpen(() => !isOpen);
  };

  const handleAnswerBtn = () => {
    const previewValues = previewRef.current.innerText;
    const pureContentArr = previewValues.split("님의 답변").slice(1);
    let pureContent = "";
    for (let i = 0; i < pureContentArr.length; i++) {
      pureContent = pureContent + pureContentArr[i];
    }
    axios
      .post(
        "http://localhost:8080/comment",
        { questionId: displayQuestion?._id, content: writing, pureContent },
        { withCredentials: true }
      )
      .then((res) => {
        setIsOpen(() => !isOpen);
        window.history.back();
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/userinfo", { withCredentials: true })
      .then((res) => {
        setUserInfo({ img: res.data.image, nickName: res.data.nickName });
      });
    onSetWriteMode(true);
  }, []);

  return displayQuestion === undefined || displayQuestion === null ? (
    <div>비어있는 질문</div>
  ) : (
    <Container>
      {helpModal ? <HelpModal handleHelpModal={handleHelpModal} /> : null}
      <LeftContainer>
        <QuestionBox>
          <QuestionTitleBox>
            <TitleIcon>질문</TitleIcon>
            <QuestionTitle> {displayQuestion.title}</QuestionTitle>
          </QuestionTitleBox>
          <QuestionBody>
            <ReactMarkdown children={displayQuestion.body} />
          </QuestionBody>
          <InfoBox_Q>
            {displayQuestion.userId.image ? (
              <UserImg_Q src={displayQuestion.userId.image}></UserImg_Q>
            ) : (
              <UserImg_Q src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg"></UserImg_Q>
            )}
            <UserName_Q>{displayQuestion.userId.nickName}</UserName_Q>
            <Date_Q>{`${displayQuestion.createdAt.substring(
              0,
              4
            )}.${displayQuestion.createdAt.substring(
              5,
              7
            )}.${displayQuestion.createdAt.substring(8, 10)}`}</Date_Q>
          </InfoBox_Q>
        </QuestionBox>
        <WritingArea>
          <WritingTitle>나의 답변</WritingTitle>
          <Body
            id="text"
            value={writing}
            placeholder={`당신의 지식을 공유해주세요...\n\n\n* 마크다운 사용법은 오른쪽 하단 도움말을 확인해주세요.`}
            onChange={handleChange}
          />
        </WritingArea>
        {isOpen ? (
          <AnswerModal
            handleAnswerBtn={handleAnswerBtn}
            btnName={btnName}
            setIsOpen={setIsOpen}
            writing={writing}
          />
        ) : null}
      </LeftContainer>

      <RightContainer ref={previewRef}>
        <PreviewTitle>
          {userInfo.img === "" ? (
            <UserInfoImage src="https://res.cloudinary.com/dr4ka7tze/image/upload/v1629112353/userIcon_gray_k0aghd.jpg" />
          ) : (
            <UserInfoImage src={userInfo.img} />
          )}
          <UserInfoName>{userInfo.nickName} 님의 답변</UserInfoName>
        </PreviewTitle>
        <ReactMarkdown children={writing} components={Components} />
      </RightContainer>
      <BtnBox>
        <ExitBtn onClick={() => handleBtns("나가기")}> 나가기 </ExitBtn>
        <SubmitBtn onClick={() => handleBtns("답변")}> 답변달기</SubmitBtn>
        <HelpBtn onClick={handleHelpModal}>?</HelpBtn>
      </BtnBox>
    </Container>
  );
}

export const Components = {
  code({ node, inline, className, children, ...props }: any) {
    return (
      <SyntaxHighlighter
        style={docco}
        language="javascript"
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    );
  },
};

export default AnswerPage;

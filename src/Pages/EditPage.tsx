import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import EditConfirmModal from "../Components/EditConfirmModal";
import useContentData from "../Hooks/useContentData";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useHistory } from "react-router-dom";
import useAllData from "../Hooks/useAllData";
import useBooleanData from "../Hooks/useBooleanData";
import { SubmitBtn, ExitBtn, BtnBox, HelpBtn, GuideLine } from "../styled-components/Post";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import HelpModal from '../Components/HelpModal';

function EditPage() {
  const { contentState, onChangeContent } = useContentData();
  const { allState } = useAllData();
  const { onSetWriteMode } = useBooleanData();
  const { contentData } = contentState; // contentPage에서 수정 버튼 눌러 EditPage로 이동하므로, 같은 contentData 사용
  const [checkModal, setCheckModal] = useState(false);
  const [helpModal, setHelpModal] = useState(false)
  const previewRef = useRef<any>(null)
  const history = useHistory();

  //유저가 글을 수정하여 onchange 이벤트가 발생 시, contentData의 body를 수정하기 위한 함수
  const handleChange = (e: any) => {
    const previewValues = previewRef.current.innerText
    onChangeContent({body: e.target.value, pureBody: previewValues});
    // const previewValues = document.querySelector('.markdown')
    console.log(typeof previewValues)
  };

  // 유저가 수정버튼 누를 시, 정말로 수정할 것인지 물어보는 모달의 상태(true, false)를 관리하는 함수
  const handleConfirmModal = () => {
    if (checkModal) {
      setCheckModal(false);
    } else {
      setCheckModal(true);
    }
  };

  //유저가 오른쪽 하단 도움말을 눌렀을 때 나오는 모달을 관리하는 함수
  const handleHelpModal = () => {
    if(helpModal) {
      setHelpModal(false)
    } else {
      setHelpModal(true)
    }
  }

  //유저가 나가기 버튼 누를 시, ContentPage로 이동하는 코드
  const handleExit = () => {
    history.push("/ContentPage");
    onSetWriteMode(false);
  };

  useEffect(() => {
    onSetWriteMode(true);
  }, []);

  return (
    <>
      {helpModal ? <HelpModal handleHelpModal={handleHelpModal}/> : null}
      {checkModal ? <EditConfirmModal handleConfirmModal={handleConfirmModal} /> : null}
      {!contentData ? (
        <div>로딩 중입니다</div>
      ) : (
        <Container>
          <LeftContainer>
            <TitleBox>
              <Title>{contentData.title}</Title>
              <GuideLine>* 마크다운 사용법은 오른쪽 하단 도움말을 확인해주세요.</GuideLine>
            </TitleBox>
            {contentData.body ? (
              <Body defaultValue={contentData.body} onChange={handleChange} autoFocus></Body>
            ) : (
              <Body placeholder="당신의 지식을 공유해주세요..." onChange={handleChange}></Body>
            )}
            <BtnBox>
              <ExitBtn onClick={handleExit}>나가기</ExitBtn>
              <SubmitBtn onClick={handleConfirmModal}>수정 완료</SubmitBtn>
            </BtnBox>
          </LeftContainer>
          <RightContainer ref={previewRef}>
            <Title>{contentData.title}</Title>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[[gfm, { singleTilde: false }]]} components={Components} children={contentData.body} className="markdown" />
            <HelpBtn onClick={handleHelpModal}>?</HelpBtn>
          </RightContainer>
        </Container>
      )}
    </>
  );
}

export const Components = {
  code({ node, inline, className, children, ...props }: any) {
    return <SyntaxHighlighter style={docco} language="javascript" PreTag="div" children={String(children).replace(/\n$/, "")} {...props} />;
  },
};

export default EditPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  height: 100vw;
`;

const LeftContainer = styled.div`
  padding: 0px 30px 30px 30px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  display: inline-block;
`;

const Body = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
`;

const RightContainer = styled.div`
  background: #f4f4f4;
  padding: 0px 30px 30px 30px;
  line-height: 2rem;
  word-spacing: 0.2rem;
`;

// const handleMarkdownH1 = () => {
//   if (contentData) {
//     const splitedArr = contentData.body.split("\n");
//     const newContentBody = contentData.body.slice(0, currentIndex);
//     const splitedNewArr = newContentBody.split("\n");
//     const targetString = splitedNewArr[splitedNewArr.length - 1];
//     const targetStringIdx = splitedNewArr.length - 1

//     // splitedArr[targetStringIdx] = `# ${splitedArr[targetStringIdx]}`

//     // let result = ''

//     // for(let i = 0; i < splitedArr.length; i++) {
//     //   if(splitedArr[i] === "") {
//     //     result = result + '\n'
//     //   } else {
//     //     result = result + splitedArr[i]
//     //   }
//     // }

//     // onChangeContent(result)
//   }
// };

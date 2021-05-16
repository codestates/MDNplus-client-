import React, { useRef, useState } from "react";
import styled from "styled-components";
import EditConfirmModal from "../Components/EditConfirmModal";
import useContentData from "../Hooks/useContentData";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { render } from "react-dom";
import { text } from '@fortawesome/fontawesome-svg-core';


function EditPage() {
  const { state, onChangeContent } = useContentData();
  const { contentData } = state; // contentPage에서 수정 버튼 눌러 EditPage로 이동하므로, 같은 contentData 사용
  const [checkModal, setCheckModal] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // const [currentIndex, setCurrentIndex] = useState<number | undefined>(0);

  //유저가 글을 수정하여 onchange 이벤트가 발생 시, contentData의 body를 수정하기 위한 함수
  const handleChange = (e: any) => {
    onChangeContent(e.target.value);
  };

  // 유저가 수정버튼 누를 시, 정말로 수정할 것인지 물어보는 모달의 상태(true, false)를 관리하는 함수
  const handleConfirmModal = () => {
    if (checkModal) {
      setCheckModal(false);
    } else {
      setCheckModal(true);
    }
  };

  // 마크다운 버튼 클릭 시, 추가하는 기능을 위해 만들었던 코드(시간 남으면 진행할 예정)
  // const handleGetIndex = () => {
  //   const text = textareaRef.current;
  //   const currentIndex = text?.selectionStart;
  //   console.log(text)
  //   console.log(currentIndex);
  //   setCurrentIndex(currentIndex);
  // };

  return (
    <>
      {checkModal ? <EditConfirmModal handleConfirmModal={handleConfirmModal} /> : null}
      {!contentData ? (
        <div>로딩 중입니다</div>
      ) : (
        <Container>
          <LeftContainer>
            <Title>{contentData.title}</Title>
            {contentData.body ? (
              <Body ref={textareaRef} defaultValue={contentData.body} onChange={handleChange} autoFocus></Body>
            ) : (
              <Body placeholder="당신의 지식을 공유해주세요..." onChange={handleChange}></Body>
            )}
            <SubmitBtn onClick={handleConfirmModal}>수정 완료</SubmitBtn>
          </LeftContainer>
          <RightContainer>
            <Title>{contentData.title}</Title>
            <ReactMarkdown components={Components} children={contentData.body} />
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

const Title = styled.h1``;

const Body = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  resize: none;
`;

const SubmitBtn = styled.button`
  position: fixed;
  top: 45rem;
  left: 38rem;
  // top: 900px;
  // left: 800px;
`;

const RightContainer = styled.div`
  background: #f4f4f4;
  padding: 0px 30px 30px 30px;
`;

const PreviewTitle = styled.h1``;

const PreviewBody = styled.div`
  font-size: 20px;
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
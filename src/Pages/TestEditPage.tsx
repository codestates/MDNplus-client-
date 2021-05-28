import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import MDEditor, { commands, ICommand, TextState, TextAreaTextApi} from "@uiw/react-md-editor";
import styled from "styled-components";
import useBooleanData from "../Hooks/useBooleanData"; 

function TestEditPage() {
  const [value, setValue] = useState<any>("**Hello world!!!**");
  const { onSetWriteMode } = useBooleanData();

  

  useEffect(() => {
    onSetWriteMode(true);
  }, []);

  return (
      <div>
    <Container className="container">
        <div>
      <Title placeholder="질문 제목을 입력하세요"></Title>
      <MDEditor value={value} onChange={setValue} height={1000} fullscreen={false} preview={"edit"} hideToolbar={true}/>
        </div>
        <Preview>
      <MDEditor.Markdown source={value} />
        </Preview>
    </Container>
    </div>
  );
}
export default TestEditPage;

const Container = styled.div`
  // position: relative;
  width: 100vw;
  height: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr)
`;

const Title = styled.input`
  height: 3rem;
  margin-left: 1rem;

`;

const Preview = styled.div`
    border: 1px solid black;
    padding: 5.5rem;
`

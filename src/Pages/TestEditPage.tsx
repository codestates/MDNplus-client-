import React, {useState} from "react";
import ReactDOM from "react-dom";
import MDEditor from '@uiw/react-md-editor';
import styled from "styled-components"

function TestEditPage() {
  const [value, setValue] = useState<any>("**Hello world!!!**");
  return (
    <Container className="container">
      <MDEditor
        value={value}
        onChange={setValue}
      />
      {/* <MDEditor.Markdown source={value} /> */}
    </Container>
  );
}
export default TestEditPage;

const Container = styled.div`
    width: 100vw;
    height: 100vw;
    border: 1px solid black;

`
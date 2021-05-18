import React, { useEffect, useState } from "react";
import styled from "styled-components";
import patienceDiff from "../DiffAlgorithm";

// 마이페이지 수정 기록에 하이라이트 표시하여 뿌려주는 방법
// 1. 함수의 인자값으로 업데이트 된 history, 서버로부터 응답 받아온 변경된 값들의 index가 담긴 배열을 넣어준다.
// 2. history를 '' 단위로 split 한다.
// 3. 반복문을 돌려서

const test = "안녕하세요 여기는 그냥 테스트용 스트링입니다. 얼마나 길게 적어야 할지 음.....";
const test2 = "안녕하세요 여기는 그냥 테스트용 스트링입니다. 지금 테스트 중입니다. 얼마나 길게 적어야 할지 음.....";
const result = patienceDiff(test.split(""), test2.split(""));
const filtered = result.lines.filter((el) => el.aIndex === -1);

console.log(filtered);
const changedStringIdx = filtered.map((el) => el.bIndex);

function QuestionPage() {
  const [history, setHistory] = useState("안녕하세요 여기는 그냥 테스트용 스트링입니다. 지금 테스트 중입니다. 얼마나 길게 적어야 할지 음.....");
  const [changedIdx, setChangedIdx] = useState(changedStringIdx);

  const historyArr = history.split("");
  console.log(historyArr)

  const handleHighLighted = (el: string) => {
    return <HighLighted>{el}</HighLighted>;
  };

  // useEffect(() => {
  //   console.log(changedIdx[0]);
  //   if (changedIdx.length !== 0) {
  //     const test = [...changedIdx];
  //     const filtered = test.filter((el, idx) => idx !== 0);
  //     setChangedIdx(filtered);
  //     console.log(changedIdx);
  //   }
  // }, [changedIdx]);

  useEffect(() => {
    console.log("highLight 렌더링됨");
    if(changedIdx.length === 0) {
      return
    }
    const test = [...changedIdx];
    const filtered = test.filter((el, idx) => idx !== 0);
    setChangedIdx(filtered);
    console.log(changedIdx)
  }, [changedIdx]);


  return <>{historyArr.map((el, idx) => (idx !== changedIdx[0] ? <span>{el}</span> : handleHighLighted(el)))}</>;
}

export default QuestionPage;

const HighLighted = styled.span`
  background: yellow;
`;

// const getHighlightedText = (history:string, changedStringIdx:number[]) => {
//   const splited = test2.split('')
//   // return <div></div>
//   return <span>{splited.map((el, idx) => idx === changedStringIdx[0] ? <HighLighted>{el}</HighLighted> : el)}</span>
//   // return <span>{splited.map((el, idx) => idx === highlight.toLowerCase() ? <HighLighted>{part}</HighLighted> : part)}</span>;
// }
// const test = '안녕하세요 여기는 그냥 테스트용 스트링입니다. 얼마나 길게 적어야 할지 음.....'
// const test2 = '안녕하세요 여기는 그냥 테스트용 스트링입니다. 지금 테스트 중입니다. 얼마나 길게 적어야 할지 음.....'

// const result = patienceDiff(test.split(""), test2.split(""))
// const filtered = result.lines.filter((el) => el.aIndex === -1)
// const changedStringIdx = filtered.map(el => el.bIndex)
// console.log(changedStringIdx)
// console.log(filtered)

// useEffect(() => {
// console.log('뭔가 생김')

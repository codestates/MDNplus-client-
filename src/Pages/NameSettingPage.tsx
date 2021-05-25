import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useAllData from "../Hooks/useAllData";
import styled from "styled-components"
import useBooleanData from '../Hooks/useBooleanData';

// axios.defaults.withCredentials=true;

const NameSettingPage = () => {
  const { onSetWriteMode } = useBooleanData()
  const [nickname, setNickname] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    console.log(nickname);
    axios
      .post("http://localhost:80/oauth/nick", { nickName: nickname })
      .then((res) => {
        history.push("/");
      })
      .catch((err) => console.log("안됨"));
  };

  const handleChangeName = (e: any) => {
    console.log(e.target.value);
    setNickname(e.target.value);
  };

  useEffect(() => {
    onSetWriteMode();
  }, []);

  return (
    <Container>
      <Stage>
        <FirstTitle>MDN+에 오신 것을 환영합니다 !</FirstTitle>
        <SecondTitle>사용하실 이름을 입력해주세요</SecondTitle>
        <Name>이름</Name>
        <NameInput onChange={handleChangeName} placeholder="" autoFocus></NameInput>
      <NextBtn onClick={handleSubmit}>다음</NextBtn>
      </Stage>
    </Container>
  );
};

export default NameSettingPage;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Stage = styled.div`
    width: 70%;
    height: 70%;
    padding-left: 10rem;

`

const FirstTitle = styled.h1`
    font-size: 3rem;
`

const SecondTitle = styled.div`
    margin-bottom: 5rem;
    font-size: 1.5rem;
`

const Name = styled.div`
    margin-bottom: 3rem;
    font-size: 1.5rem;

`

const NameInput = styled.input`
    border: none;
    border-bottom: 1px solid #5F5E5E;
    font-size: 1.5rem;
    outline: none;
    padding-bottom: 1rem;
    margin-bottom: 5rem;
    
`

const NextBtn = styled.button`
    display: block;
    font-size: 1.5rem;
    border: none;
    border-radius: 2rem;
    padding: 0.7rem;
    background: #3B85F3;
    color: white;
    width: 7rem;
    cursor: pointer;
`



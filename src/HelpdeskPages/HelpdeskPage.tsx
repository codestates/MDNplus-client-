import React, { useEffect } from 'react';
import useHelpData from '../Hooks/useHelpData';
import fakeData2 from '../FakeData2'
import styled from 'styled-components'
import { useHistory } from 'react-router';

type Question = {
    id: number;
    userName: string;
    userId: number;
    title: string;
    body: string;
    answers: Answers[];
    likes: number;
    tags: string[];
    createdAt: string;
}

type Answers = {
    id: number;
    userId: number;
    userName: string;
    qTitle: string;
    body: string;
    likes: number;
    createdAt: string;
}

type HelpData = {
    allQuestions: Question[]
}

const HelpdeskPage = () => {
    const {helpData, onStoreData, onFilterFast, onFilterPopular, onClickQuestion} = useHelpData()
    const {allQuestions}:HelpData = helpData
    const history = useHistory()

    useEffect(() => {
        onStoreData(fakeData2.allQuestions)
    }, [])

    return (
        <div>
            <button onClick={(() => {history.push('/HquestionPage')})}>질문하기</button>
            <span onClick={onFilterFast}>최신순</span>
            <span onClick={onFilterPopular}>인기순</span>
        <div>
            {allQuestions === null ? <div>로딩 중입니다</div> : 
            allQuestions.map((el) => (
                <QuestionBox onClick={(() => {onClickQuestion(el)})} key={el.id}>
                    <div>{el.title}</div>
                    <div>{el.body}</div>
                    <div>{el.tags.map((el, idx) => (
                        <span key={idx+1}>{el}</span>
                    ))}</div>
                    <div>{el.likes}</div>
                    <div>{el.createdAt}</div>
                    <div>{el.userName}</div>
                </QuestionBox>
            ))
            }
        </div>
        </div>

    )
}
            
export default HelpdeskPage;

const QuestionBox = styled.div`
    border: 1px solid gray;
`
import styled from "styled-components"

export const QuestionStyle = styled.div`
border-top: 0.01px solid #e0e0e0;
padding: 2rem;

.question-title-box {
  cursor: pointer;
  width: 100%;
}

.question-logo {
  color: #1658d8;
  margin-right: 0.5rem;
  font-weight: 600;
  font-size: 1.2rem;
}

.question-title {
  font-size: 1rem;
  font-weight: 500;
}

.question-body {
  cursor: pointer;
  margin-top: 0.5rem;
  margin-left: 1.3rem;
  font-size: 0.8rem;
  color: #757575;
}

.count-box {
  padding-top: 1rem;
  margin-bottom: -1rem;
}

.like-count {
  color: #686868;
  font-size: 0.8rem;
  margin-top: 1rem;
}

.answer-count {
  font-size: 0.8rem;
  margin-left: 1rem;
  color: #686868;
}

.question-date {
  font-size: 0.8rem;
  color: #686868;
  margin-left: 1rem;
}
`;

export const TagBox = styled.div`
margin-top: 1.8rem;
margin-bottom: 1rem;
`;

export const Tag = styled.span`
background: #f6f6f6;
color: #686868;
border-radius: 2rem;
padding: 0.5rem 1rem 0.5rem 1rem;
font-size: 0.7rem;
cursor: pointer;

&:hover {
  background-color: #2196f3;
  color: white;
}
`;

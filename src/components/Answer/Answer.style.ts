import styled from 'styled-components'

export const Container = styled.div`
margin-top: -3rem;
position: relative;
width: 75%;

.title-box {
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
}

.user-img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.4rem;
  border: none;
}

.date {
  color: #757575;
  position: absolute;
  bottom: -3rem;
  right: 0rem;
}

.answer-title {
  font-weight: bold;
}

.answer-body {
  line-height: 2rem;
}

.empty {
  text-align: center;
  width: 100%;
  font-size: 1.2rem;
  color: #424242;
}
`;

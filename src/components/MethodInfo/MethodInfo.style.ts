import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 60%;
  padding-top: 50px;
  line-height: 1.5rem;

  .title-box {
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-size: 45px;
    display: inline-block;
  }

  .edit-btn {
    position: absolute;
    top: 80px;
    right: 0;
    font-size: 18px;
    background: none;
  }
`;

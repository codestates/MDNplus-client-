import styled from "styled-components";
import Button from "../Button/index";

export const Wrapper = styled.article`
  width: 70%;
  padding: 50px;
  line-height: 1.5rem;

  .title-box {
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-size: 45px;
    display: inline-block;
  }
`;

export const EditBtn = styled(Button)`
  margin-top: 2.5rem;
  font-size: 1.2rem;
`;

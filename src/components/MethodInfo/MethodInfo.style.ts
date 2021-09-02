import styled from "styled-components";
import Button from "../Button/index";

export const Wrapper = styled.div`
  width: 53%;
  margin-top: 2rem;
  margin-left: -10rem;
  line-height: 1.5rem;

  @media (max-width: 375px) {
    font-size: 1rem;
    margin: 0.5rem;
    width: 100%;
  }

  .title-box {
    display: flex;
    justify-content: space-between;

    @media (max-width: 375px) {
      align-items: center;
      justify-content: space-around;
    }
  }

  .title {
    font-size: 45px;
    display: inline-block;
    @media (max-width: 375px) {
      font-size: 2rem;
    }
  }
`;

export const EditBtn = styled(Button)`
  margin-top: 2.5rem;
  font-size: 1.2rem;

  @media (max-width: 375px) {
    margin: 0;
    font-size: 0.8rem;
  }
`;

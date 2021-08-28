import styled from "styled-components";
import Button from "../../components/Button/index"

export const BtnBox = styled.div`
  position: fixed;
  bottom: -1rem;
  background: none;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

export const ExitBtn = styled(Button)`
  margin-top: 1rem;
`;

export const SubmitBtn = styled(Button)`
  background: #5766b4;
  color: white;
  margin-right: 13rem;
  font-size: 1.2rem;
`;

export const HelpBtn = styled.button`
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  background: #616161;
  color: white;
  cursor: pointer;
  margin-right: 1rem;
`;
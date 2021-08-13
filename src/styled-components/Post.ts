import styled from "styled-components";

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

export const ExitBtn = styled.button`
  border: none;
  background: none;
  font-size: 1.3rem;
  cursor: pointer;
  width: 7rem;
  height: 2.5rem;
`;
export const SubmitBtn = styled.button`
  width: 7rem;
  height: 2.5rem;
  border: none;
  border-radius: 1.5rem;
  background: #5766b4;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 13rem;
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

export const GuideLine = styled.span`
  font-size: 0.85rem;
  color: #757575;
`;

import styled from "styled-components";
import Button from "../Button";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f4f4;
  font-family: "Archivo Black", sans-serif;
  box-shadow: 0px 4px 5px #eeeeee;

  @media (max-width: 375px) {
    height: 5rem;
    background: #f4f4f4;
  }

  .left-box {
    display: flex;
    align-items: center;
    @media (max-width: 375px) {
      width: 100%;
    }
  }

  .logo {
    font-size: 2.5rem;
    color: #005ce7;
    margin: 1rem 1rem 1rem 3rem;
    cursor: pointer;

    @media (max-width: 375px) {
      margin: 0;
      padding-left: 0.2rem;
      font-size: 1.5rem;
    }
  }
`;

export const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 375px) {
    height: auto;
    width: 2rem;
    padding: 0.3rem 0 0.3rem 0;
    margin-right: 1rem;
    background: #f4f4f4;
  }
`;

export const LoginBtn = styled(Button)`
  background-color: white;
  font-weight: 500;
  margin: 1rem;
  border: 1px solid #a7a3a3;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #616161;
    color: white;
  }

  @media (max-width: 375px) {
    width: 100%;
    margin: 0;
    padding: 0;
    background: #f4f4f4;
    border: none;
    font-size: 0.6rem;
  }
`;

export const UserIconContainer = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1.5rem;
  cursor: pointer;
  @media (max-width: 375px) {
    margin: 0;
  }
`;

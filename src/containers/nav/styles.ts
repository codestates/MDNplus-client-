import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 5px #eeeeee;
  background: #f4f4f4;

  .left-box {
    display: flex;
    align-items: center;
  }

  .logo {
    margin: 1rem 1rem 1rem 3rem;
    font-family: "Archivo Black", sans-serif;
    font-size: 2.5rem;
    color: #005ce7;
    cursor: pointer;
  }

  .user-icon {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1.5rem;
    cursor: pointer;
  }
`;

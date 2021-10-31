import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .title {
    font-size: 40px;
    color: ${({ theme }) => theme.primary[700]};
  }

  .btn-box {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .btn-box button {
    display: block;
    position: relative;
    height: 40px;
    border-radius: 0.3rem;
    font-weight: bold;
    padding-left: 30px;
    border: none;
    cursor: pointer;
  }

  .btn-box button:first-child {
    margin-bottom: 1rem;
    background: #fce300;
  }

  .btn-box button:last-child {
    border: 1px solid #bdbdbd;
    background: white;
  }

  .btn-box img {
    position: absolute;
    top: 5px;
    left: 50px;
    width: 32px;
  }
`;

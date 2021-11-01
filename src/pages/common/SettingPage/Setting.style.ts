import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Common btn style CSS for SettingPage */

  .setting-btn {
    padding: 8px 26px;
    margin-bottom: 12px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary[500]};
    color: white;
    cursor: pointer;
  }

  .setting-section {
    display: flex;
    flex-direction: column;
    width: 30%;
  }

  /* User Info, Name Setting CSS */

  .user-info-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 92%;
  }

  .user-info-box img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }

  .user-name {
    display: block;
    margin-bottom: 12px;
    font-size: 32px;
    font-weight: bold;
    color: #616161;
  }

  .name-edit-btn {
    border: none;
    background: none;
    color: #3b85f3;
    cursor: pointer;
  }

  .edit-box {
    margin-left: 40px;
  }

  .edit-input {
    margin-bottom: 8px;
    font-size: 20px;
    outline: #bdbdbd;
  }

  .edit-save-btn {
    float: right;
    padding: 3px 10px;
    border: none;
    border-radius: 8px;
    background: ${({ theme }) => theme.primary[500]};
    color: white;
    font-size: 14px;
    cursor: pointer;
  }

  /* Image, Membership Setting CSS */

  .setting-btn-box {
    display: flex;
    justify-content: space-between;
    margin: 30px 0 0 10px;
  }

  .image-setting-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-picker {
    width: 0;
    height: 0;
  }

  .image-delete-btn {
    border: none;
    background: none;
    color: ${({ theme }) => theme.primary[500]};
    cursor: pointer;
  }

  .cancel-membership-box button {
    border: none;
    background-color: #ff5b5b;
    color: white;
  }
`;

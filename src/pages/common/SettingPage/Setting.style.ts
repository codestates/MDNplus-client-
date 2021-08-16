import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: auto;
  }
`;

export const Stage = styled.div`
  // border: 1px solid black;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 375px) {
    display: grid;
    grid-template-columns: auto;
    grid-auto-rows: auto;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  // border: 1px solid black;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserNameBox = styled.div`
  width: 20rem;
  padding-top: 3rem;
  // border: 1px solid black;
`;

export const UserName = styled.div`
  // border: 1px solid black;
  margin-left: 3rem;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: #616161;
  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

export const EditName = styled.span`
  // border: 1px solid black;
  color: #3b85f3;
  margin-left: 3rem;
  cursor: pointer;
`;

export const EditName_save = styled.span`
  display: inline-block;
  float: right;
  color: white;
  margin-right: 2.4rem;
  margin-top: 1rem;
  background: #3b85f3;
  padding: 0.3rem 0.7rem 0.3rem 0.7rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const EditInput = styled.input`
  margin-left: 2.5rem;
  width: 15rem;
  font-size: 1.3rem;
  outline: #bdbdbd;
`;

export const SubmitBox = styled.div`
  // border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;
export const ImgPickerBox = styled.div`
  margin-top: 1rem;
`;

export const ImgPicker = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const ImgPickerLetter = styled.label`
  display: inline-block;
  padding: 0.5rem 1.7rem 0.5rem 1.7rem;
  color: white;
  background-color: #3b85f3;
  cursor: pointer;
  border-radius: 0.5rem;
`;

export const ImgDelete = styled.div`
  display: inline-block;
  color: #3b85f3;
  cursor: pointer;
  margin: 1rem 0rem 1rem 0rem;
`;

export const DelAccountBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 3rem;
  align-items: center;
  @media (max-width: 375px) {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-left: 2.5rem;
  }
`;

export const DelAccountBtn = styled.button`
  display: inline-block;
  padding: 0.5rem 1.7rem 0.5rem 1.7rem;
  color: white;
  background-color: #ff5b5b;
  cursor: pointer;
  border-radius: 0.5rem;
  font-size: 1rem;
  margin-left: 2rem;
  margin-top: -3.2rem;
  border: none;
`;

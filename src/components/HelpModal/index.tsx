import styled from "styled-components";
import Modal from "../Modal";

type PropsOptions = {
  handleHelpModal: () => void;
  isOpen: boolean;
};

const HelpModal = ({ isOpen, handleHelpModal }: PropsOptions) => {
  return (
    <Modal
      isOpen={isOpen}
      handleModal={handleHelpModal}
      modalSize={"large"}
      component={
        <Container>
          <div className="left-container">
            <h1>마크다운 사용법</h1>
            <div className="test-box">
              <span className="test-title">h1 : </span>
              <span>#</span>
            </div>
            <div className="test-box">
              <span className="test-title">h2 : </span>
              <span>##</span>
            </div>
            <div className="test-box">
              <span className="test-title">h3 : </span>
              <span>###</span>
            </div>
            <div className="test-box">
              <span className="test-title">기울기 : </span>
              <span>*테스트*</span>
            </div>
            <div className="test-box">
              <span className="test-title">강조 : </span>
              <span>**테스트**, __테스트__</span>
            </div>
            <div className="test-box">
              <span className="test-title">강조, 기울기 : </span>
              <span>***테스트***</span>
            </div>
            <div className="test-box">
              <span className="test-title">밑줄 : </span>
              <span>{"<u>테스트</u>"}</span>
            </div>
            <div className="test-box">
              <span className="test-title">취소선 : </span>
              <span>{"<s>테스트</s> , ~~테스트~~"}</span>
            </div>
            <div className="test-br">
              <div>{"줄바꿈은<br>"}</div>
              <div>이렇게 하면 됩니다</div>
            </div>
            <div className="test-box">
              <span className="test-title">이미지 : </span>
              <span>{`<img width="100" src="이미지 링크"/>`}</span>
            </div>
          </div>
          <div className="right-container">
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <div className="test test4">테스트</div>
            <div className="test test5">테스트, 테스트</div>
            <div className="test test6">테스트</div>
            <div className="test test7">테스트</div>
            <div className="test test8">테스트</div>
            <div className="test">줄바꿈은</div>
            <div className="test">이렇게 하면 됩니다</div>
            <img
              className="test"
              width={100}
              src={
                "https://res.cloudinary.com/dr4ka7tze/image/upload/v1622032268/oke1b4jtmpxebeofuqbu.jpg"
              }
            ></img>
          </div>
        </Container>
      }
    ></Modal>
  );
};

export default HelpModal;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  width: 100%;
  height: 100%;
  border: 1px solid black;

  .left-container {
    padding: 1rem 0rem 0rem 3rem;
  }

  .right-container {
    padding: 3.5rem;
    background: #eceff1;
  }

  .test-box {
    margin-bottom: 1.5rem;
  }

  .test-title {
    font-weight: bold;
  }

  .test-br {
    margin-bottom: 1rem;
  }

  .test {
    margin-top: 1.4rem;
  }

  .test4 {
    font-style: italic;
  }

  .test5 {
    font-weight: bold;
  }

  .test6 {
    font-weight: bold;
    font-style: italic;
  }

  .test7 {
    text-decoration: underline;
  }

  .test8 {
    text-decoration: line-through;
  }
`;

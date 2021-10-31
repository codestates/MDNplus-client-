import styled from "styled-components";

type SelectBtnProps = {
  type: string;
  writing: string;
  submitType: string;
  askInfo: string;
  handleSubmit: () => void;
  handleModal: () => void;
  handleExit: () => void;
};

function SelectBtn({
  type,
  writing,
  askInfo,
  submitType,
  handleSubmit,
  handleModal,
  handleExit,
}: SelectBtnProps) {
  return (
    <Wrapper>
      {type === "submit" ? (
        writing ? (
          <>
            <p className="ask-info">{askInfo}</p>
            <div className="select-box">
              <button type="button" onClick={handleModal}>
                취소
              </button>
              <button type="button" onClick={handleSubmit}>
                {submitType}
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="ask-info">게시물을 작성해주세요.</p>
            <div className="select-box">
              <button type="button" onClick={handleModal}>
                확인
              </button>
            </div>
          </>
        )
      ) : type === "exit" ? (
        <>
          <p className="ask-info">나가시겠습니까?</p>
          <div className="select-box">
            <button type="button" onClick={handleExit}>
              네
            </button>
            <button type="button" onClick={handleModal}>
              아니요
            </button>
          </div>
        </>
      ) : null}
    </Wrapper>
  );
}

export default SelectBtn;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 32px;

  .ask-info {
    color: #616161;
    margin: 0;
  }

  .select-box {
    display: flex;
    justify-content: flex-end;
  }

  .select-box button {
    border: none;
    background: none;
    cursor: pointer;
  }

  .select-box button:first-child {
    color: #616161;
  }

  .select-box button:last-child {
    color: ${({ theme }) => theme.primary[700]};
  }
`;

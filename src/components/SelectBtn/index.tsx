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
  handleExit
}: SelectBtnProps) {
  return (
    <>
      {type === "submit" ? (
        writing ? (
          <>
            <div className="askInfo">{askInfo}</div>
            <div className="select-box">
              <button className="select cancel" onClick={handleModal}>
                취소
              </button>
              <button className="select submit" onClick={handleSubmit}>
                {submitType}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="askInfo">게시물을 작성해주세요.</div>
            <div className="select-box">
              <div className="confirm-btn" onClick={handleModal}>
                확인
              </div>
            </div>
          </>
        )
      ) : type === "exit" ? (
        <>
          <div className="askInfo">나가시겠습니까?</div>
          <div className="select-box">
            <button className="select yes" onClick={handleExit}>네</button>
            <button className="select no" onClick={handleModal}>아니요</button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default SelectBtn;

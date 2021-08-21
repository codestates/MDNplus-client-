type SelectBtnProps = {
  type: string;
  writing: string;
  pageName: string;
  submitType: string;
  askInfo: string;
  handleSubmit: () => void;
  handleCloseModal: () => void;
};

function SelectBtn({
  type,
  writing,
  askInfo,
  submitType,
  handleSubmit,
  handleCloseModal,
}: SelectBtnProps) {
  return (
    <>
      {type === "submit" ? (
        writing ? (
          <>
            <div className="askInfo">{askInfo}</div>
            <div className="selectBox">
              <button className="select cancel" onClick={handleCloseModal}>취소</button>
              <button className="select submit" onClick={handleSubmit}>{submitType}</button>
            </div>
          </>
        ) : (
          <>
            <div className="askInfo">게시물을 작성해주세요.</div>
            <div className="selectBox">
              <div className="confirmBtn" onClick={handleCloseModal}>확인</div>
            </div>
          </>
        )
      ) : type === "exit" ? (
        <>
          <div className="askInfo">나가시겠습니까?</div>
          <div className="selectBox">
            <button>네</button>
            <button>아니요</button>
          </div>
        </>
      ) : null}
    </>
  );
}

export default SelectBtn;

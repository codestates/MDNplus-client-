import { useRef } from "react";
import useBooleanData from "../../hooks/useBooleanData";
import { ModalBox, ModalContainer } from "./AnswerModal.style";

type ModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  btnName: string;
  writing: string;
  handleAnswerBtn: () => void;
};

function AnswerModal({
  setIsOpen,
  btnName,
  handleAnswerBtn,
  writing,
}: ModalProps) {
  const overLay = useRef(null);
  const { onContentPageMode, onSetWriteMode } = useBooleanData();

  const handleExit = () => {
    window.history.back();
    onSetWriteMode(false);
    onContentPageMode(true);
  };

  return (
    <ModalContainer>
      <div className="overlay" onClick={() => setIsOpen(false)} ref={overLay} />
      <ModalBox>
        {btnName === "답변" ? (
          writing ? (
            <>
              <div className="askInfo">답변을 등록하시겠습니까?</div>
              <div className="selectBox">
                <button
                  className="select cancel"
                  onClick={() => setIsOpen(false)}
                >
                  취소
                </button>
                <button
                  className="select submit"
                  onClick={() => handleAnswerBtn()}
                >
                  등록
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="emptyBox">
                <div className="askInfo">게시물을 작성해주세요.</div>
                <div className="selectBox">
                  <div className="confirmBtn" onClick={() => setIsOpen(false)}>
                    확인
                  </div>
                </div>
              </div>
            </>
          )
        ) : (
          <>
            <div className="askInfo">나가시겠습니까?</div>
            <div className="selectBox">
              <button className="select cancel" onClick={handleExit}>
                네
              </button>
              <button
                className="select submit"
                onClick={() => setIsOpen(false)}
              >
                아니요
              </button>
            </div>
          </>
        )}
      </ModalBox>
    </ModalContainer>
  );
}

export default AnswerModal;

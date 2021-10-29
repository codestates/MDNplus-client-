import { MethodType } from "../../types/reducer";
import { Wrapper } from "./Method.style";

type MethodProps = {
  data: MethodType;
  handleClickMethod: (method: MethodType) => void;
};

function Method({ data, handleClickMethod }: MethodProps) {
  return (
    <Wrapper
      onClick={() => {
        handleClickMethod(data);
      }}
    >
      <h1 className="method-title">{data.title}</h1>
      {data.pureBody ? (
        <p className="method-desc">{data.pureBody.slice(0, 70)} ...</p>
      ) : (
        <span className="method-desc">정보를 입력해주세요.</span>
      )}
      <div className="count">수정된 횟수 {data.count}</div>
    </Wrapper>
  );
}

export default Method;

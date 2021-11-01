import { MethodType } from "../../types/reducer";
import { Wrapper } from "./styles";

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
      <div>
        <h1 className="method-title">{data.title}</h1>
        {data.pureBody ? (
          <p className="method-desc">{data.pureBody.slice(0, 70)} ...</p>
        ) : (
          <span className="method-desc">정보를 입력해주세요.</span>
        )}
      </div>
      <dl className="count">
        <dt>수정된 횟수</dt>
        <dd>{data.count}</dd>
      </dl>
    </Wrapper>
  );
}

export default Method;

import styled from "styled-components";
import { MethodType } from "../../types/reducer";
import { Wrapper } from "./Method.style";

type MethodProps = {
  data: MethodType;
  handleClickMethod: (method: MethodType) => void;
};

function Method({ data, handleClickMethod }: MethodProps) {
  return (
    <Wrapper>
      <div className="contents">
        <div
          onClick={() => {
            handleClickMethod(data);
          }}
        >
          <h3 className="title">{data.title}</h3>
          {data.pureBody ? (
            <div className="body">{data.pureBody.slice(0, 70)} ...</div>
          ) : (
            <div>빈칸</div>
          )}
        </div>
      </div>
      <div className="count">수정된 횟수 {data.count}</div>
    </Wrapper>
  );
}

export default Method;

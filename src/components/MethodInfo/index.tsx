import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { MethodType } from "../../types/reducer";
import { Wrapper } from "./styles";
import Button from "../Button";

type MethodInfoProps = {
  data: MethodType;
  handleClickEdit: () => void;
};

function MethodInfo({ data, handleClickEdit }: MethodInfoProps) {
  return (
    <Wrapper>
      <div className="title-box">
        <h1 className="title">{data.title}</h1>
        <Button
          size="small"
          btnStyle="text"
          className="edit-btn"
          handler={handleClickEdit}
        >
          수정
        </Button>
      </div>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[[gfm, { singleTilde: false }]]}
        children={data.body}
        className="markdown"
      />
    </Wrapper>
  );
}

export default MethodInfo;

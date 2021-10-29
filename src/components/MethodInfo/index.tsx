import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { MethodType } from "../../types/reducer";
import { Wrapper, EditBtn } from "./MethodInfo.style";

type MethodInfoProps = {
  data: MethodType;
  handleClickEdit: () => void;
};

function MethodInfo({ data }: MethodInfoProps) {
  return (
    <Wrapper>
      <div className="title-box">
        <h1 className="title">{data.title}</h1>
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

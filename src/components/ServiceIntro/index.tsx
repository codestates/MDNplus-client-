import { Wrapper } from "./ServiceIntro.style";

type ServiceIntroProps = {
  handleMakeQuestion?: () => void;
  img: string;
  title: string;
  description: string;
  type?: string;
};

function ServiceIntro({
  handleMakeQuestion,
  img,
  title,
  description,
  type,
}: ServiceIntroProps) {
  return (
    <Wrapper>
      {type === "wiki" ? (
        <img className="intro-icon wiki" src={img} />
      ) : (
        <img className="intro-icon" src={img} />
      )}
      <div>
        <h1 className="intro-title">{title}</h1>
        <div className="intro-description">{description}</div>
      </div>
      <button className="question-btn" onClick={handleMakeQuestion}>
        질문하기
      </button>
    </Wrapper>
  );
}

export default ServiceIntro;

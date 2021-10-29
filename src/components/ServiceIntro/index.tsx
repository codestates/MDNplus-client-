import { Wrapper } from "./ServiceIntro.style";

type ServiceIntroProps = {
  handleMakeQuestion?: () => void;
  img: string;
  title: string;
  description: string;
  type?: string;
};

function ServiceIntro({ img, title, description, type }: ServiceIntroProps) {
  return (
    <Wrapper>
      {type === "wiki" ? (
        <img className="intro-icon wiki" src={img} />
      ) : (
        <img className="intro-icon" src={img} />
      )}
      <div>
        <h1 className="intro-title">{title}</h1>
        <p className="intro-description">{description}</p>
      </div>
    </Wrapper>
  );
}

export default ServiceIntro;

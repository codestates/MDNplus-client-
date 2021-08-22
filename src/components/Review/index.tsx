type ReviewProps = {
  img: string;
  name: string;
  body: string;
};

function Review({ img, name, body }: ReviewProps) {
  return (
    <>
      <div className="review-box">
        <div className="reviewer-box">
          <img className="reviewer-img" src={img}></img>
          <span className="reviewer-name">{name}</span>
        </div>
        <div className="review-body">{body}</div>
      </div>
    </>
  );
}

export default Review;

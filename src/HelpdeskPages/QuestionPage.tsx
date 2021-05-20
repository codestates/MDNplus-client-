import React from "react";
import { useHistory } from "react-router-dom";

import { useLocation } from "react-router-dom";

type pageType = {
  pageName: string;
};

function QuestionPage({ QuestionPage }: any) {
  const history = useHistory();

  const location = useLocation<pageType>();

  if (location.state === undefined) {
    console.log("null");
  } else {
    console.log(location.state.pageName);
  }

  const gogo = () => {
    history.push({
      pathname: "/Qcontentpage",
      state: { pageName: "this is WTF" },
    });
  };
  return (
    <div>
      <button onClick={gogo}></button>
    </div>
  );
}

export default QuestionPage;

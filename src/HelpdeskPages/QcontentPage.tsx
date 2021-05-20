import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux";
import { currentQData } from "../Redux/QcontentData";
import QfakeData from "../QFakeData";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

type pageType = {
  pageName: string;
};
function QcontentPage() {
  const history = useHistory();

  const allState = useSelector((state: RootState) => state.QcontentDataReducer);
  const dispatch = useDispatch();
  const { currentData } = allState;

  const location = useLocation<pageType>();

  console.log(location.state.pageName);

  useEffect(() => {
    dispatch(currentQData(QfakeData));
  }, []);

  const gogo = () => {
    history.push({
      pathname: "/QuestionPage",
      state: { pageName: "recieve!!" },
    });
  };

  return (
    <div>
      {currentData?.allData.map((el) => (
        <div>
          <div>{el.tags[0]}</div>
          {el.answers.map((el) => (
            <div>{el.qTitle}</div>
          ))}
        </div>
      ))}

      <div>
        <button onClick={gogo}></button>
      </div>
    </div>
  );
}

export default QcontentPage;

import React from "react";
import { useHistory, useLocation } from "react-router-dom";

function HelpdeskPage() {
  const history = useHistory();

  const handleMyPageContent = () => {
    history.push({
      pathname: "/QcontentPage",
      state: { pageName: "MainPage" },
    });
  };
  return (
    <div>
      <button onClick={handleMyPageContent} />
    </div>
  );
}

export default HelpdeskPage;

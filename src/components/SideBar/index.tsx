import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Wrapper } from "./styles";

const SideBar = () => {
  const [active, setActive] = useState("wiki");
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === "/Wiki") setActive("wiki");
    if (history.location.pathname === "/HelpdeskPage") setActive("helpdesk");
  }, [active, history]);

  return (
    <Wrapper active={active}>
      <Link
        to="/Wiki"
        className="service-name"
        onClick={() => setActive("wiki")}
      >
        MDN+ 위키
      </Link>
      <Link
        to="/HelpdeskPage"
        className="service-name"
        onClick={() => setActive("helpdesk")}
      >
        헬프데스크
      </Link>
    </Wrapper>
  );
};

export default SideBar;

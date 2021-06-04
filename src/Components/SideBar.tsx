import { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const SideBar = () => {
  const [sideBar, setSideBar] = useState("wiki");
  const history = useHistory();

  const handleMoveToHelp = () => {
    setSideBar("helpdesk");
    history.push("/HelpdeskPage");
  };

  const handleMoveToWiki = () => {
    setSideBar("wiki");
    history.push("/");
  };

  // useEffect(() => {
  //   console.log(history)
  //   if(history.location.pathname === "/MyPage") {
  //     onContentPageMode(false)
  //   }
  // },[])

  useEffect(() => {
    if (window.location.pathname === "/HelpdeskPage" || window.location.pathname === "/MyPage") {
      setSideBar("helpdesk");
    } else if (window.location.pathname === "/") {
      setSideBar("wiki");
    }
  });

  return (
    <Container>
      {sideBar === "wiki" ? (
        <Wiki color="isSelected" onClick={handleMoveToWiki}>
          MDN+ 위키
        </Wiki>
      ) : (
        <Wiki onClick={handleMoveToWiki}>MDN+ 위키</Wiki>
      )}
      {sideBar === "helpdesk" ? (
        <HelpDesk color="isSelected" onClick={handleMoveToHelp}>
          헬프데스크
        </HelpDesk>
      ) : (
        <HelpDesk onClick={handleMoveToHelp}>헬프데스크</HelpDesk>
      )}
    </Container>
  );
};

export default SideBar;

const handleColorType = (color: any) => {
  switch (color) {
    case "isSelected":
      return "color: black; background: #DCEAFF";
  }
};

const Container = styled.span`
  width: 13rem;
  background: #f4f4f4;
  box-shadow: 4px 0px 5px #eeeeee;
  height: 100%;
`;

const Wiki = styled.div`
  padding: 1rem;
  cursor: pointer;
  text-align: center;
  font-weight: 500;
  color: #757575;
  ${({ color }) => handleColorType(color)};
`;

const HelpDesk = styled.div`
  padding: 1rem;
  cursor: pointer;
  text-align: center;
  font-weight: 500;
  color: #757575;

  ${({ color }) => handleColorType(color)};
`;

//   background: ${(props) => props.color || "#f4f4f4"};

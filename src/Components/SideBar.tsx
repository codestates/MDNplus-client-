import React, { useState } from "react";
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

  return (
    <Container>
      {sideBar === "wiki" ? (
        <Wiki color="isSelected" onClick={handleMoveToWiki}>
          MDN+ WiKi
        </Wiki>
      ) : (
        <Wiki onClick={handleMoveToWiki}>
          MDN+ WiKi
        </Wiki>
      )}
      {sideBar === "helpdesk" ? (
        <HelpDesk color="isSelected" onClick={handleMoveToHelp}>
          HelpDesk
        </HelpDesk>
      ) : (
        <HelpDesk onClick={handleMoveToHelp}>
          HelpDesk
        </HelpDesk>
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
  width: 17%;
  height: 150rem;
  background: #f4f4f4;
  box-shadow: 4px 0px 5px #eeeeee;

  @media (max-width: 375px) {
    width: 100vw;
  }
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

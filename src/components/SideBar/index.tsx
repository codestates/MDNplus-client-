import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [active, setActive] = useState("wiki");

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

const Wrapper = styled.nav<{ active: string }>`
  width: 300px;
  background: #f4f4f4;
  box-shadow: 4px 0px 5px #eeeeee;

  .service-name {
    display: block;
    padding: 16px;
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    color: ${({ theme }) => theme.gray.default};
    text-decoration: none;
  }

  ${({ active }) =>
    active === "wiki"
      ? css`
          .service-name:first-child {
            background: rgb(220, 234, 255);
            font-weight: bold;
          }
        `
      : null}

  ${({ active }) =>
    active === "helpdesk"
      ? css`
          .service-name:last-child {
            background: rgb(220, 234, 255);
            font-weight: bold;
          }
        `
      : null}
`;

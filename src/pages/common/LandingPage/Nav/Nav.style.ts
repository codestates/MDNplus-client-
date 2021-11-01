import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #cfd8dc;
  padding: 2rem;
  position: fixed;
  top: 0;
  z-index: 99;
`;

export const Nav2 = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 2rem;
  position: fixed;
  top: 0;
  z-index: 99;
`;

export const Logo = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  margin-left: 1rem;
  cursor: pointer;

  color: ${(props) => props.color || "black"};
`;

export const NavRightBox = styled.div``;

export const QuestionsBtn = styled.span`
  font-size: 1.1rem;
  color: black;
  cursor: pointer;
  font-weight: bold;
  margin-right: 2rem;
  border: 1px solid black;
  padding: 0.5rem 1.2rem 0.5rem 1.2rem;
  border-radius: 2rem;
  background: white;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const HomeBtn = styled.span`
  font-size: 1.1rem;
  color: black;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid black;
  padding: 0.5rem 2.5rem 0.5rem 1.2rem;
  border-radius: 2rem;
  position: relative;
  background: #263238;
  color: white;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const ArrowImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 1.2rem;
  right: 2.5rem;
`;

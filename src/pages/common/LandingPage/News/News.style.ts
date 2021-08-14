import styled from "styled-components";
import { fadeIn } from "../../../../styled-components/Animation";

export const NewsContainer_ON = styled.div`
  opacity: 1;
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

export const NewsContainer_OFF = styled.div`
  opacity: 0;
  width: 100%;
  height: 40rem;
`;

export const NewsIntroBox = styled.div`
  width: 61rem;
  margin-bottom: 1rem;
`;

export const NewsIntro1 = styled.span`
  font-size: 2.1rem;
`;
export const NewsIntro2 = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const NewsBox = styled.div`
  width: 65rem;
  height: 25rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;
  column-gap: 1.5rem;
`;

//--------------------------------메인 뉴스---------------------//
export const MainNews = styled.div`
  position: relative;
  grid-row: 1 / span 3;
  border: none;
  cursor: pointer;
`;

export const MainNewsContents = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  padding: 2rem;
`;

export const MainNewsTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

export const MainNewsBody = styled.div`
  margin-top: 1rem;
  color: white;
  line-height: 1.7rem;
  word-spacing: 0.1rem;
`;

export const MainNewsImg = styled.img`
  position: absolute;
  top: 0rem;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
`;

export const MainNewsOverlay = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0rem;
  z-index: 1;
  border-radius: 0.5rem;
`;

//--------------------------------서브 뉴스---------------------------//

export const SubNews = styled.div`
  padding: 2rem;
  position: relative;
  cursor: pointer;
`;

export const SubNewsTitle1 = styled.div`
  position: absolute;
  top: 1.3rem;
  font-size: 1.2rem;
  color: white;
  z-index: 2;
`;

export const SubNewsTitle2 = styled.div`
  position: absolute;
  top: 3rem;
  font-size: 1.2rem;
  color: white;
  z-index: 2;
`;

export const SubNewsOverlay = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: 1;
  border-radius: 0.5rem;
`;

export const SubNewsImg = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  object-fit: cover;
`;

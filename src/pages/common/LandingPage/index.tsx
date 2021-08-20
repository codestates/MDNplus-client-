import React, { useEffect, useState } from "react";
import useBooleanData from "../../../hooks/useBooleanData";
import styled from "styled-components";
import FooterComponent from "../../../components/Footer";
import NavContainer from "./Nav";
import IntroSection from "./Intro";
import TimeSection from "./Time";
import PreviewSection from "./Preview";
import ReviewSection from "./Review";
import NewsSection from "./News";

const LandingPage = () => {
  const { onSetWriteMode } = useBooleanData();
  const [height, setHeight] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  useEffect(() => {
    onSetWriteMode(true);
    const height = document.body.scrollHeight;
    const currentY = window.scrollY;
    setHeight(height);
    setCurrentY(currentY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setCurrentY(window.scrollY);
    });
  }, [currentY]);

  return (
    <Container>
      <NavContainer currentY={currentY}></NavContainer>
      <IntroSection></IntroSection>
      <TimeSection currentY={currentY}></TimeSection>
      <PreviewSection currentY={currentY}></PreviewSection>
      <ReviewSection currentY={currentY}></ReviewSection>
      <NewsSection currentY={currentY}></NewsSection>
      <FooterComponent />
    </Container>
  );
};

export default LandingPage;

export const EmptySpace = styled.div`
  width: 100%;
  height: 10rem;
  // border: 1px solid black;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
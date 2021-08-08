import styled from "styled-components";
import Elizabeth from "../../assets/me_not_me.jpg";
import { animateUp } from "../Homepage/Homepage.Elements";

export const AboutSection = styled.div`
  height: 100vh;
  padding: 2rem;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
`;

export const PictureContainer = styled.div`
  background: url(${Elizabeth}) no-repeat center center;
  background-size: cover;
  height: 80%;
  flex: 3;
`;

export const AboutMe = styled.div`
  flex: 2;
  padding: 2rem;
  width: 100%;
`;

export const AboutHeader = styled.h1`
  color: #e95e01;
  line-height: 140%;
  animation: ${animateUp} 1s;
`;

export const AboutMeIntro = styled.p`
  line-height: 160%;
  font-size: 1.4rem;
  margin-bottom: 4vh;
`;
export const AboutDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2vh;
  animation: ${animateUp} 1s;
`;

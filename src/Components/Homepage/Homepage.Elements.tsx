import styled, { keyframes } from "styled-components";
import background from "../../assets/background.jpg";

export const animateUp = keyframes`{
  0% {opacity: 0;transform: translateY(100%);}
100% {opacity: 1;transform: translateY(0%);}	
}`;

export const HomePageContainer = styled.div`
  background: url(${background}) no-repeat center center;
  background-size: cover;
  height: 100vh;
`;

export const Vertical = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const TextBlock = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
`;
export const HeaderContainer = styled.h1`
  font-size: 7rem;
  color: #fff;
`;
export const HelloLink = styled.a`
  display: block;
  animation: ${animateUp} 1s;
  &:after {
    content: "Hello.";
  }
  &:hover:after {
    content: "About";
  }
`;

export const IamLink = styled.a`
  animation: ${animateUp} 1.5s;
  display: block;
  &:after {
    content: "I am";
  }
  &:hover:after {
    content: "Skills"; //might change for Work and have the contact on social media
  }
`;

export const NameLink = styled.a`
  animation: ${animateUp} 2s;
  display: block;
  &:after {
    content: "Elizabeth";
  }
  &:hover:after {
    content: "Contact";
  }
`;

export const DoorLink = styled.div`
  height: 57%;
  width: 14%;
  position: absolute;
  right: 140px;
  top: 88px;
`;

export const TextEnterContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 155px;
  top: 205px;
  animation: ${animateUp} 1s;
  color: #fff;
  & > svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

import React from "react";
import {
  HomePageContainer,
  Vertical,
  HeaderContainer,
  HelloLink,
  IamLink,
  NameLink,
  DoorLink,
  TextEnterContainer,
} from "./Homepage.Elements";

import { MdSubdirectoryArrowLeft } from "react-icons/md";
const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Vertical>
        <HeaderContainer>
          <HelloLink href="#about"></HelloLink>
          <IamLink href="#skills" />
          <NameLink href="#contact" />
        </HeaderContainer>
      </Vertical>
      <a href="#home">
        <DoorLink />
      </a>
      <TextEnterContainer>
        Enter here
        <MdSubdirectoryArrowLeft />
      </TextEnterContainer>
    </HomePageContainer>
  );
};

export default HomePage;

import React from "react";
import {
  HomePageContainer,
  Vertical,
  HeaderContainer,
  HelloLink,
  IamLink,
  NameLink,
} from "./Homepage.Elements";
const HomePage: React.FC = () => {
  return (
    <HomePageContainer>
      <Vertical>
        <HeaderContainer>
          <HelloLink href="#about"></HelloLink>
          <IamLink href="#about" />
          <NameLink href="#about" />
        </HeaderContainer>
      </Vertical>
    </HomePageContainer>
  );
};

export default HomePage;

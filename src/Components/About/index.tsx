import React from "react";
import {
  AboutSection,
  AboutContainer,
  PictureContainer,
  AboutMe,
  AboutHeader,
  AboutMeIntro,
  AboutDescription,
} from "./About.Elements";

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <PictureContainer />
        <AboutMe>
          <AboutHeader>About</AboutHeader>
          <AboutMeIntro>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ipsa,
            laudantium quae harum veritatis unde minima cumque neque sed amet
            debitis animi dicta iste. Vitae exercitationem ipsa ipsam nesciunt
            beatae.
          </AboutMeIntro>
          <AboutDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ipsa,
            laudantium quae harum veritatis unde minima cumque neque sed amet
            debitis animi dicta iste. Vitae exercitationem ipsa ipsam nesciunt
            beatae.
          </AboutDescription>
          <AboutDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ipsa,
            laudantium quae harum veritatis unde minima cumque neque sed amet
            debitis animi dicta iste. Vitae exercitationem ipsa ipsam nesciunt
            beatae.
          </AboutDescription>
        </AboutMe>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;

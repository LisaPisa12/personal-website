import React from "react";
import {
  WorksSection,
  WorksContainer,
  ChildContainer,
  WorksHeader,
  WorksIntro,
  SkillsContainer,
  WorksTitle,
} from "./Works.Elements";

const Works = () => {
  return (
    <WorksSection id="skills">
      <WorksContainer>
        <ChildContainer>
          <WorksHeader>Skills</WorksHeader>
          <WorksIntro>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit voluptate nesciunt iure sit obcaecati aliquam, soluta,
            harum deleniti similique laboriosam in perspiciatis nemo repellat
            nihil. Dicta rem numquam quibusdam ab?
          </WorksIntro>
        </ChildContainer>
        <ChildContainer>
          <SkillsContainer>
            <WorksTitle>Frontnd</WorksTitle>
          </SkillsContainer>
          <SkillsContainer>
            <WorksTitle>backend</WorksTitle>
          </SkillsContainer>
          <SkillsContainer>
            <WorksTitle>fullstack(or communitcation)</WorksTitle>
          </SkillsContainer>
          <SkillsContainer>
            <WorksTitle>Testing</WorksTitle>
          </SkillsContainer>
        </ChildContainer>
      </WorksContainer>
    </WorksSection>
  );
};

export default Works;

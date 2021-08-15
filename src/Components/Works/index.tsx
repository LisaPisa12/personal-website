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
import { ImDatabase } from "react-icons/im";
import { GrTestDesktop } from "react-icons/gr";
import { GiTalk } from "react-icons/gi";
import { GoDeviceDesktop } from "react-icons/go";
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
            <GoDeviceDesktop />
            <WorksTitle>Frontend</WorksTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              nam harum et ipsa alias ad assumenda, ducimus impedit vel quaerat
              fugiat animi quidem. Deserunt?
            </p>
          </SkillsContainer>
          <SkillsContainer>
            <ImDatabase />
            <WorksTitle>Backend</WorksTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              nam harum et ipsa alias ad assumenda, ducimus impedit vel quaerat
              fugiat animi quidem. Deserunt?
            </p>
          </SkillsContainer>
          <SkillsContainer>
            <GiTalk />
            <WorksTitle>fullstack(or communitcation)</WorksTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              nam harum et ipsa alias ad assumenda, ducimus impedit vel quaerat
              fugiat animi quidem. Deserunt?
            </p>
          </SkillsContainer>
          <SkillsContainer>
            <GrTestDesktop />
            <WorksTitle>Testing</WorksTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              nam harum et ipsa alias ad assumenda, ducimus impedit vel quaerat
              fugiat animi quidem. Deserunt?
            </p>
          </SkillsContainer>
        </ChildContainer>
      </WorksContainer>
    </WorksSection>
  );
};

export default Works;

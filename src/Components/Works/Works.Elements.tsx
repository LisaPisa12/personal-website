import styled from "styled-components";

export const WorksSection = styled.div`
  padding: 8rem 4rem;
  background: #f87422;
  color: #fff;
`;

export const WorksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChildContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

export const WorksHeader = styled.h1`
  color: #fff;
  font-size: 5rem;
`;

export const WorksIntro = styled.p`
  line-height: 160%;
  font-size: 1.4rem;
`;

export const SkillsContainer = styled.div`
  max-width: 50%;
  & > svg {
    height: 2rem;
    width: 2rem;
    color: #fff;
  }
`;

export const WorksTitle = styled.h2`
  margin: 0.5rem 0;
`;

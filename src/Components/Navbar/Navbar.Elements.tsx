import styled from "styled-components";

interface IProps {
  click?: boolean;
}

export const NavbarContainer = styled.nav`
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  background-color: transparent;
  height: 5rem;
  justify-content: flex-end;
  width: 100%;
`;

export const MediaContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 0 2rem;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${(click: IProps) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export const MediaItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
    &:hover > a > svg {
      transform: scale(1.5);
    }
  }
`;

export const MediaLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;
  transition: all 0.3s ease;
  & > svg {
    height: 2rem;
    width: 2rem;
    color: #fff;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;

export const LinkToTop = styled.h1`
  font-weight: bold;
  letter-spacing: 0.3rem;
  font-size: 1.7rem;
`;

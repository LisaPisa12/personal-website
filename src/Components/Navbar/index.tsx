import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  MediaContainer,
  MediaItem,
  MediaLinks,
  LinkToTop,
} from "./Navbar.Elements";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscFilePdf } from "react-icons/vsc";

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);
  const [showLinks, setShowLinks] = useState(true);
  const handleClick = () => setClick(!click);

  const changeOnScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setShowLinks(false);
    } else {
      setShowLinks(true);
    }
  };

  console.log(window.innerHeight);

  window.addEventListener("scroll", changeOnScroll);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavbarContainer>
      <MediaContainer onClick={handleClick} click={click}>
        {showLinks ? (
          <>
            <MediaItem>
              <MediaLinks href="https://www.joshwcomeau.com/snippets/html/scale-with-pseudoelements/">
                <FaGithub />
              </MediaLinks>
            </MediaItem>
            <MediaItem>
              <MediaLinks href="https://www.joshwcomeau.com/snippets/html/scale-with-pseudoelements/">
                <AiOutlineLinkedin />
              </MediaLinks>
            </MediaItem>
            <MediaItem>
              <MediaLinks href="https://www.joshwcomeau.com/snippets/html/scale-with-pseudoelements/">
                <VscFilePdf />
              </MediaLinks>
            </MediaItem>
          </>
        ) : (
          <div onClick={scrollToTop}>
            <LinkToTop>eli.</LinkToTop>
          </div>
        )}
      </MediaContainer>
    </NavbarContainer>
  );
};

export default Navbar;

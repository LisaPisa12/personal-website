import React, { useState } from "react";
import {
  NavbarContainer,
  MediaContainer,
  MediaItem,
  MediaLinks,
} from "./Navbar.Elements";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscFilePdf } from "react-icons/vsc";

const Navbar: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <NavbarContainer>
      <MediaContainer onClick={handleClick} click={click}>
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
      </MediaContainer>
    </NavbarContainer>
  );
};

export default Navbar;

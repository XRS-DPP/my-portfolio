import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between ml-[8%] mr-[8%] pt-6">
      <p href="/" className="bold text-[25px]">
        Xiaoru Sun
      </p>
      <div className="">
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faBars}
          size="xl"
          onClick={() => setMenuOpen(!menuOpen)}
        ></FontAwesomeIcon>
        <ol onClick={() => setMenuOpen(false)}>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="experience">Experience</a>
          </li>
          <li>
            <a href="project">Projects</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ol>
      </div>
    </nav>
  );
};

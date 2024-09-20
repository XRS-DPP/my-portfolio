import React, { useState } from "react";
import Modal from "./Modal";
// import Menu from "./Menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleToggleModal = () => {
    setMenuOpen(false);
  };

  const sendEmail = () => {
    window.location = "mailto: xrs_project@gmail.com";
  };
  return (
    <>
      <div className="w-full h-[44px] mt-10 text-gray-800 font-bold flex items-center border-b-2 border-gray-200">
        <button
          onClick={handleMenuClick}
          className={`ml-10 ${
            menuOpen ? "animate-slide-up-down" : ""
          } hover:slide-up-down 1s ease-in-out`}
        >
          <span className="text-[16px] tracking-[.4em]">
            {menuOpen ? "CLOSE" : "MENU"}
          </span>
        </button>
        <button onClick={() => sendEmail()}>
          <span className="text-[16px] tracking-[.25em]">CONTACT</span>
        </button>
      </div>
      {menuOpen && (
        <Modal>
          <Menu handleToggleModal={handleToggleModal} />
        </Modal>
      )}
    </>
  );
};

export default Header;

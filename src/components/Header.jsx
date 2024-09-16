import React, { useState } from "react";
import Modal from "./Modal";
import Menu from "./Menu";

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
      <div className={`${menuOpen ? "bg-green-600" : "bg-white"}`}>
        <div className="text-gray-800 flex justify-between pl-2 pr-2 mt-6 border border-solid">
          <button
            onClick={handleMenuClick}
            className={`${
              menuOpen ? "animate-slide-up-down" : ""
            } hover:slide-up-down 1s ease-in-out`}
          >
            <span className="text-[16px]  tracking-[.4em] ml-4 p-4">
              {menuOpen ? "CLOSE" : "MENU"}
            </span>
          </button>
          <button onClick={() => sendEmail()}>
            <span className="text-[16px] tracking-[.25em] mr-4 p-4">
              HIRE ME
            </span>
          </button>
        </div>
        {menuOpen && (
          <Modal>
            <Menu handleToggleModal={handleToggleModal} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Header;

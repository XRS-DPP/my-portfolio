import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      // document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      // document.body.style.overflow = "hidden";
    }
  }

  // useEffect(() => {
  //   return function cleanup() {
  //     return (document.body.style.overflow = "");
  //   };
  // }, []);

  return (
    <>
      <nav className={`overflow-hidden ${isMenuOpen ? "relative" : ""}`}>
        <Link
          className={`${
            isMenuOpen ? "float-none block text-left" : "text-center"
          } float-left block px-[14px] py-[16px] font-RobotoSlab hover:bg-slate-300 text-[18px] font-medium`}
          to="/"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          Home
        </Link>

        <div className={`${isMenuOpen ? "" : "hidden"} md:flex`}>
          <Link
            className={`${
              isMenuOpen ? "float-none block text-left" : "text-center"
            }float-left block px-[14px] py-[16px] font-RobotoSlab text-[18px] font-medium hover:bg-slate-300`}
            to="/project"
            onClick={() => setIsMenuOpen(false)}
          >
            Project
          </Link>
          <Link
            className={`${
              isMenuOpen ? "float-none block text-left" : "text-center"
            }float-left block  px-[14px] py-[16px] font-RobotoSlab text-[18px] font-medium hover:bg-slate-300`}
            to="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <button
            className={`${
              isMenuOpen ? "float-none block text-left" : "text-center"
            }float-left block  px-[14px] py-[16px] font-RobotoSlab text-[18px] font-medium hover:bg-slate-300`}
            target="_blank"
            onClick={() => {
              window.open(
                "https://docs.google.com/document/d/17NnCa4snFFWJkOfaA_wqFlHuWedcmV3AZArBl8V3IJU/edit?usp=sharing",
                "_blank"
              );
              setIsMenuOpen(false);
            }}
          >
            Resume
          </button>
        </div>

        <a
          className={`${
            isMenuOpen ? "absolute top-0 right-0 float-none" : ""
          } float-right block px-[14px] py-[16px] md:hidden`}
          onClick={toggleMenu}
        >
          <span
            className={`${
              isMenuOpen ? "transform translate-y-2 rotate-45" : ""
            } block w-[25px] h-[3px] mt-[5px] my-auto transition-all duration-300 ease-in-out bg-[#101010]`}
          ></span>
          <span
            className={`block w-[25px] h-[3px] mt-[5px] my-auto transition-all duration-300 ease-in-out bg-[#101010] ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`${
              isMenuOpen ? "transform -translate-y-2 -rotate-45" : ""
            } block w-[25px] h-[3px] mt-[5px] my-auto transition-all duration-300 ease-in-out bg-[#101010]`}
          ></span>
        </a>
      </nav>
    </>
  );
};

export default Navbar;

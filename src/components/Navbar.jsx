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

  // const navItemsClass = "font-bold text-sm px-2 py-1 rounded-lg";
  // const NavLinks = (
  //   <>
  //     <Link to="/">
  //       Home
  //     </Link>
  //     <Link className={navItemsClass} to="/project">
  //       Project
  //     </Link>
  //     <Link className={navItemsClass} to="/about">
  //       About
  //     </Link>
  //     <a className={navItemsClass}>Resume</a>
  //   </>
  // );
  // return (
  //   <>
  //     <nav className="fixed w-full">
  //       <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
  //         <div className="flex items-baseline justify-between h-12">
  //           <div className="w-full flex items-baseline justify-between">
  //             <div className="hidden md:block">{NavLinks}</div>

  //             <div className="md:hidden">
  //               <button onClick={() => toggleMenu()} type="button">
  //                 <GiHamburgerMenu
  //                   className={`${isMenuOpen ? "hidden" : "visible"}`}
  //                 />
  //                 <RxCross2
  //                   className={`${isMenuOpen ? "visible" : "hidden"} `}
  //                 />
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       {isMenuOpen && (
  //         <div className="mt-3 flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2 ml-6 ">
  //           {NavLinks}
  //         </div>
  //       )}
  //     </nav>
  // </>

  // );
  return (
    <>
      <nav className={`overflow-hidden ${isMenuOpen ? "relative" : ""}`}>
        <Link
          className={`${
            isMenuOpen ? "float-none block text-left" : "text-center"
          } float-left block px-[14px] py-[16px] font-RobotoSlab hover:bg-slate-300 text-[18px] font-medium`}
          to="/"
          onClick={() => setIsMenuOpen(false)}
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
          <a
            className={`${
              isMenuOpen ? "float-none block text-left" : "text-center"
            }float-left block  px-[14px] py-[16px] font-RobotoSlab text-[18px] font-medium hover:bg-slate-300`}
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
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

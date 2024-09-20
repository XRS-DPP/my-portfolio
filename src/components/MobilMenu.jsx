import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const MobilMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div>
        <button
          className="visible mr-4 w-[40px] h-[40px] "
          aria-label="toggle menu"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu className={`${isMenuOpen ? "hidden" : "visible"}`} />
          <RxCross2 className={`${isMenuOpen ? "visible" : "hidden"} `} />
        </button>
      </div>

      {isMenuOpen && (
        <ul className="flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link>Resume</Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default MobilMenu;

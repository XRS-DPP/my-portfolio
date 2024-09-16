import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Menu = ({ handleToggleModal }) => {
  return (
    <>
      <Fade direction="left" duration={1000}>
        <nav className="w-full h-screen flex flex-col ">
          <Link
            to="/"
            className="text-[40px] text-blue-950 font-extrabold tracking-wider"
            onClick={() => {
              handleToggleModal();
            }}
          >
            Home
          </Link>

          <Link
            to="/contact"
            className="text-[40px] text-blue-950 font-extrabold tracking-wider"
            onClick={() => {
              handleToggleModal();
            }}
          >
            Contact
          </Link>
        </nav>
      </Fade>
    </>
  );
};

export default Menu;

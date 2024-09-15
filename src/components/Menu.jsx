import { Link, useNavigate } from "react-router-dom";

const Menu = ({ handleToggleModal }) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="w-full h-screen flex flex-col justify-evenly items-start border border-b-orange-700">
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
    </>
  );
};

export default Menu;

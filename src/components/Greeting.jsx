import AvatarMaker from "../assets/img.svg";
import { getImageUrl } from "../utils/utils";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Greeting = () => {
  const openLinkedin = () =>
    window.open("https://www.linkedin.com/in/xiaoru-s-42664160/");

  const openGithub = () => {
    window.open("https://github.com/Xiaoru-Sun");
  };
  return (
    <>
      <section className="mt-10 w-full flex flex-wrap items-center justify-center font-RobotoSlab ">
        <div className="">
          <img
            src={AvatarMaker}
            alt="portfolio image"
            className="rounded-[20%] px-4"
          ></img>
        </div>

        <div className="p-4 mt-3 flex flex-col items-center">
          <div className="mt-3 w-full h-full flex flex-col items-center justify-between">
            <h2>
              <span className="text-[19px] font-RobotoSlab font-semibold mb-6">
                Hello, I'am{" "}
                <span className="text-[24px] text-green-900">Xiaoru Sun</span>
              </span>
            </h2>
            <p className="mt-2">
              I am a
              <span className="indent-3">
                <Typewriter
                  options={{
                    strings: ["Full stack programmer", "board gamer lover"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </p>
            <p className="pl-10 mt-6">
              I love creating algorithms in JavaScript, transforming designs
              into interactive experiences, and tackling bugs head-on.
            </p>
          </div>

          <div className="flex mt-6 pl-5">
            <button
              className="font-medium text-[16px] mr-4 my-2 flex items-center"
              onClick={() => openLinkedin()}
            >
              <FaLinkedin />
              <span className="ml-1"> Linkedin</span>
            </button>

            <button
              className="font-medium text-[16px] mr-4 my-2 flex items-center"
              onClick={() => openGithub()}
            >
              <FaGithub />
              <span className="ml-1"> Github</span>
            </button>

            <Link
              to="/about"
              className="font-medium text-[16px] mr-4 my-2 flex items-center"
            >
              <FaArrowUpRightFromSquare />
              <span className="ml-1">More About Me</span>
            </Link>

            {/* <Link
              to="/about"
              className="text-[16px] my-2 font-sans font-semibold border-2px text-green-800 mt-8 hover:bg-green-800 hover: p-2 hover:text-white transform hover:scale-110 "
            >
              MORE ABOUT ME
            </Link> */}
          </div>
        </div>

        <div></div>
      </section>
    </>
  );
};

export default Greeting;

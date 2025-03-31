import AvatarMaker from '../assets/img.svg';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Greeting = () => {
  const openLinkedin = () =>
    window.open('https://www.linkedin.com/in/xiaoru-s-42664160/');

  const openGithub = () => {
    window.open('https://github.com/Xiaoru-Sun');
  };
  return (
    <>
      <section className="md:flex-col md:mt-20 mt-10 w-full flex flex-wrap items-center justify-center font-RobotoSlab ">
        <img
          src={AvatarMaker}
          alt="portfolio image"
          className="rounded-[20%] px-4 md:p-4"
        ></img>

        <div className="p-4 mt-3 mb-5 flex flex-col items-center">
          <div className="mt-3 w-full h-full flex flex-col items-center justify-between">
            <h2>
              <span className="text-[19px] font-RobotoSlab font-semibold mb-6">
                Hello, I'am
                <span className="text-[28px] text-green-800 ml-2">Camille</span>
              </span>
            </h2>
            <div className="mt-6">
              <Typewriter
                options={{
                  strings: [
                    "<span>A junior<strong class='ml-2 px-2 py-2 bg-green-100'>Full-Stack Developer</strong></span>",
                    "<span>A career <strong class='text-pink-800 py-3 px-1'>Changer</strong></span>",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'text-[20px]',
                }}
              />
            </div>

            <p className="pl-10 mt-8 text-[14px]">
              I love creating algorithms in JavaScript, transforming designs
              into interactive experiences, and tackling bugs head-on.
            </p>
          </div>

          <div className="flex pl-5 mt-10">
            {/* <button
              className="font-medium text-[16px] mr-4 my-2 flex items-center"
              onClick={() => openLinkedin()}
            >
              <FaLinkedin />
              <span className="ml-1"> Linkedin</span>
            </button> */}

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
              <span className="ml-1">About Me</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Greeting;

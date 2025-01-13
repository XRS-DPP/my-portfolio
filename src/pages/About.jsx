import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Language from '../components/Language';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  const sendEmail = () => {
    window.location = 'mailto: camilledpp.work@gmail.com';
  };

  return (
    <div className="md:mt-[80px] lg:w-[50%] mt-10 h-screen w-[80%]">
      <Fade direction="up" duration={1000}>
        <SectionHeader title="About me" />
        <div className="mt-3 py-2 my-4 font-RobotoSlab">
          <p className="indent-6 md:mt-5">
            I’ve always seen language as the key to unraveling the mysteries of
            civilizations and uncovering hidden wisdom . I encountered
            JavaScript while searching for a way to automate tasks at my
            previous job. I found it to be a language more magical than any
            spoken one, opening up an entirely new realm of logic, creativity,
            and endless possibilities. That’s when my coding journey truly
            began.
          </p>
          <p className="indent-6 mt-2">
            As a problem solver at heart, I’m eager to transition into
            programming, a field that offers a never-ending pursuit of
            challenges and solutions. I believe coding is not just about writing
            code; it's about continuously learning, adapting, and pushing the
            boundaries of what’s possible.
          </p>
          <p className="indent-6 mt-2">
            Besides that, I’m a board game fan and love experimenting in the
            kitchen, trying to bring flavors from around the world into my own
            dishes.
          </p>
        </div>
        <button className="md:mt-5" onClick={() => sendEmail()}>
          <span className="text-[19px] tracking-[.25em] font-sans py-3 bg-transparent font-medium hover:px-4 hover:bg-green-800 hover:text-white hover: rounded-lg ">
            CONTACT
          </span>
        </button>
        {/* <Language /> */}
      </Fade>
    </div>
  );
};

export default About;

import Footer from "../components/Footer";
import Greeting from "../components/Greeting";
import Header from "../components/Header";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen">
        <Greeting />
        <Footer />
      </div>
    </>
  );
};

export default Home;

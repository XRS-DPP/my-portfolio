import PersonalInfo from "../components/PersonalInfo";
import Skills from "../components/Skills";
const Home = () => {
  return (
    <>
      <div className="w-[88%] mt-4 p-4 flex flex-col items-center border border-red-700  ">
        <div className="w-full border border-green-900">
          <PersonalInfo />
        </div>
        <div className="w-full mt-6 border border-green-800 ">
          <Skills />
        </div>
      </div>
    </>
  );
};

export default Home;

import AvatarMaker from "../assets/img.svg";

const PersonalInfo = () => {
  return (
    <>
      <div className="flex items-center mb-4">
        <h1 className="text-[16px]">About</h1>
        <div className="flex flex-grow h-[1px] bg-slate-500 ml-3"></div>
      </div>
      <img src={AvatarMaker} alt="portfolio image"></img>
      <p className="mt-6">
        Deeply invested in a life-long learning mindset and a problem solver at
        heart, I’m dedicated to leveraging technology to create innovative
        solutions, combining my diverse background with a knack for analytical
        thinking and a passion for building impactful applications.
      </p>
    </>
  );
};

export default PersonalInfo;

const Language = () => {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-between font-RobotoSlab">
      <span className="flex items-center justify-start ">
        I speak <strong className="ml-[2px] mr-[2px]">English</strong>
        <img
          className="w-[20px] inline mx-1"
          src="/countryIcons/uk.png"
          alt="FR"
        />
      </span>

      <span className="flex items-center justify-items-start">
        我说 <strong className="ml-[2px] mr-[2px]">汉语</strong>
        <img
          className="w-[20px] inline mr-1"
          src="/countryIcons/cn.png"
          y6
          alt="CN"
        />
      </span>

      <span className="flex items-center justify-start ">
        Ich spreche <strong className="ml-[2px] mr-[2px]">Deutsch</strong>
        <img
          className="w-[20px] inline mr-1"
          src="/countryIcons/de.png"
          alt="DE"
        />
      </span>
      <span className="flex items-center justify-start ">
        Je parle <strong className="ml-[2px] mr-[2px]">Français</strong>
        <img
          className="w-[20px] inline mr-1"
          src="/countryIcons/fr.png"
          alt="FR"
        />
      </span>
    </div>
  );
};

export default Language;

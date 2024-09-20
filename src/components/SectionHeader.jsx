const SectionHeader = ({ title }) => {
  return (
    <>
      <div className="flex items-center justify-evenly">
        <h1 className="text-[25px] font-bold mr-[20px] font-RobotoSlab ">
          {title}
        </h1>
        <div className="flex flex-grow h-[1px] bg-slate-500 ml-3"></div>
      </div>
    </>
  );
};

export default SectionHeader;

const ProjectCard = ({ project }) => {
  return (
    <div className="p-2 font-RobotoSlab my-4">
      <h2 className="mb-5 mt-3 font-semibold text-[18px] ">{project.name}</h2>
      <p className=" text-primary font-normal text-[16px]">
        {project.description}
      </p>
      <p className="mt-4 font-semibold text-gray-700 text-[14px] opacity-90 ">
        {project.technologies.join(" ")}
      </p>
      <button
        onClick={() => {
          window.open(project.githubUrl), "_blank";
        }}
        disabled={project.githubUrl.length}
        className="text-[14px] font-semibold text-blue-800 mt-4 mr-3 hover:bg-blue-300 p-2 hover:text-white transform hover:scale-110 "
      >
        VIEW CODE
      </button>
      <button
        disabled={!project.liveUrl}
        onClick={() => {
          window.open(project.liveUrl, "_blank");
        }}
        className={`${
          project.liveUrl
            ? "bg-white hover:bg-blue-300 p-2 hover:text-white transform hover:scale-110"
            : "text-gray-600 p-2"
        } text-[14px] font-semibold text-blue-800 mt-4 mr-3 }`}
      >
        SEE LIVE
      </button>
    </div>
  );
};

export default ProjectCard;

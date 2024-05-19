const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="bg-light h-72 2xl:h-96 rounded-xl shadow-lg flex flex-col items-center z-10 border-2 border-transparent hover:border-secondary soft">
      <div className="w-full h-56 2xl:h-[19rem] rounded-t-xl">
        <img src={image} alt="preview" className="w-full h-full rounded-t-xl" />
      </div>
      <div className="text-start w-full px-5 py-2 2xl:py-3">
        <h4 className="text-xl 2xl:text-2xl font-semibold">{title}</h4>
        <p className=" text-gray-500 text-[10px] 2xl:text-[13px]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

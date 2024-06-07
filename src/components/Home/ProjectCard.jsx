const ProjectCard = ({ image, title, description, bg }) => {
  return (
    <div
      className={`${bg} relative h-72 2xl:h-96 rounded-xl shadow-lg flex flex-col items-center z-10 border-2 border-transparent hover:border-secondary soft`}
    >
      <div className="w-full h-52 2xl:h-[19rem] rounded-t-xl">
        <img src={image} alt="preview" className="w-full h-full rounded-t-xl" />
      </div>
      <div className="text-start w-full px-5 py-4 2xl:py-3">
        <h4 className="text-xl 2xl:text-2xl font-semibold text-white tracking-wide">
          {title}
        </h4>
        <p className="text-[10px] 2xl:text-[13px] text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

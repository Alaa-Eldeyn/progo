const ServiceCard = ({ title, icon, description }) => {
  return (
    <div
      className="relative text-start h-56 group"
    >
      <div className="w-full h-full bg-primary rounded-lg z-10 p-5 absolute">
        <div className="rounded-full w-12 h-12 p-2 border graphic-service-icon center group-hover:border-secondary group-hover:text-secondary soft">
          <img src={icon} alt="" className="w-7 h-7" />
        </div>
        <h3 className="group-hover:text-secondary soft my-3">{title}</h3>
        <p className="text-sm line-clamp-4 text-[#718096]">{description}</p>
      </div>
      <div className="bg-secondary w-full h-full rounded-xl absolute top-0 z-0 soft group-hover:-rotate-[4deg]"></div>
    </div>
  );
};

export default ServiceCard;

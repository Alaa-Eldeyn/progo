const ValueCard = ({ icon, title, description }) => {
  return (
    <>
      <div className="flex gap-8 rounded-2xl bg-light p-5 z-10 relative">
        <div className="w-56 h-28 2xl:h-32 2xl:w-64 bg-secondary rounded-xl flex items-center justify-center">
          <img src={icon} alt="Icon" className="w-10 h-10 " />
        </div>
        <div className="text-start">
          <h4 className="text-xl 2xl:text-2xl font-bold">{title}</h4>
          <p className="mt-2 2xl:text-lg text-[#797979]">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ValueCard;

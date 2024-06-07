const ValueCard = ({ icon, title, description }) => {
  return (
    <>
      <div className="flex gap-6 md:gap-8 rounded-2xl bg-light p-5 z-10 relative">
        <div className="w-[450px] h-32 md:w-96 md:h-36 2xl:w-80 bg-secondary rounded-xl flex items-center justify-center">
          <img src={icon} alt="Icon" className="w-16 h-16 md:w-14 md:h-14" />
        </div>
        <div className="text-start">
          <h4 className="text-xl 2xl:text-2xl font-bold">{title}</h4>
          <p className="mt-2 text-sm md:text-lg text-[#797979]">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ValueCard;

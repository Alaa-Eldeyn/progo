
const ValueCard = ({ icon, title, description }) => {
  return (
    <>
      <div className="flex gap-8 rounded-2xl bg-light p-5 z-10">
        <div className="w-56 h-28 bg-secondary rounded-xl flex items-center justify-center">
          <img src={icon} alt="Icon" className="w-10 h-10 " />
        </div>
        <div className="text-start">
          <h4 className="text-xl font-bold">{title}</h4>
          <p className="mt-2 text-[#797979]">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ValueCard;

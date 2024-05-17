
const ServiceCard = ({ icon, service }) => {
  return (
    <>
      <div className="bg-primary z-10 rounded-2xl h-40 relative center group hover:bg-secondary soft">
        <div className="rounded-full h-24 w-24 center bg-gradient-to-b from-secondary via-primary to-secondary bg-size-200 bg-pos-0 group-hover:bg-pos-100 soft absolute -top-[60%] translate-y-1/2">
          <img src={icon} alt="" className="w-10 h-10" />
        </div>
        <p className="mt-10 font-bold text-lg group-hover:tracking-wider soft">{service}</p>
      </div>
    </>
  );
};

export default ServiceCard;

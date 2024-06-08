import { t } from "i18next";

const ServiceCard = ({ icon, service }) => {
  return (
    <>
      <div className="bg-primary z-10 rounded-2xl h-40 2xl:h-48 relative center group hover:bg-secondary soft !duration-400">
        <div className="rounded-full h-24 w-24 center bg-gradient-to-b from-secondary via-primary to-secondary bg-size-200 bg-pos-0 group-hover:bg-pos-100 soft !duration-400 absolute -top-[60%] 2xl:-top-[50%] translate-y-1/2">
          <img src={icon} alt="" className="w-10 h-10" />
        </div>
        <p className="mt-10 font-bold text-lg 2xl:text-2xl group-hover:tracking-wider soft">
          {t(service)}
        </p>
      </div>
    </>
  );
};

export default ServiceCard;

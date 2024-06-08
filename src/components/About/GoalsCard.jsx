import { t } from "i18next";

const GoalsCard = ({ title, description }) => {
  return (
    <div className="relative text-start min-w-64 flex-grow max-w-[1000px] h-72 group">
      <div className="w-full h-full bg-light rounded-lg z-10 p-4 absolute text-center">
        <h3 className="group-hover:text-secondary soft my-3 text-3xl">
          {t(title)}
        </h3>
        <div className="center gap-2 mb-5">
          <hr className="bg-secondary border-none h-1 rounded-full w-5" />
          <hr className="bg-secondary border-none h-1 rounded-full w-32" />
        </div>
        <p className="text-lg leading-loose">{t(description)}</p>
      </div>
      <div className="bg-secondary w-full h-full rounded-xl absolute top-0 z-0 soft group-hover:-rotate-[4deg]"></div>
    </div>
  );
};

export default GoalsCard;

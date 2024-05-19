import { t } from "i18next";

const MiniTitle = ({ title }) => {
  return (
    <div className="w-fit max-w-[600px]">
      <h2 className="text-3xl 2xl:text-[40px] font-bold tracking-wider">{t(title)}</h2>
      <hr className="border-2 border-secondary mt-3 w-full rounded-full" />
    </div>
  );
};

export default MiniTitle;

import bg_hero from "../../assets/bg-hero.svg";
import about1 from "../../assets/Rectangle 14.png";
import about2 from "../../assets/Rectangle 13.png";
import MiniTitle from '../MiniTitle';
import { t } from 'i18next';

const About = () => {
  return (
    <section className="relative bg-light min-h-[600px] overflow-hidden">
      <div
        className={`absolute top-[45%] -translate-y-1/2 opacity-5 -translate-x-[72%] `}
      >
        <img src={bg_hero} className={`h-full w-[90%] float-right`} alt="" />
      </div>
      <div className="container py-44 justify-center flex items-center">
        <div className="flex gap-x-28 gap-y-14 flex-col md:flex-row justify-center items-center">
          <div className="bg-primary rounded-lg w-[80%] md:w-[400px] sm:h-[400px] z-10">
            <div className="sm:translate-x-[30%] sm:-translate-y-5 mb-5 sm:mb-0">
              <img src={about1} className="w-full max-w-80" alt="hero" />
            </div>
            <div className="sm:-translate-x-[10%] ">
              <img src={about2} className="w-full max-w-80" alt="hero" />
            </div>
          </div>
          <div className="text-start md:w-1/2">
            <MiniTitle title="About company" />
            <p className="mt-5 text-lg lg:text-3xl max-w-[500px] leading-normal text-justify">
              <span className="text-secondary ">{t("Progo")} </span>
              {t(
                "is a leading software design and development company specializing in the development of websites, mobile applications, and enterprise systems. The company excels in providing innovative and advanced software solutions that meet the needs of clients and help them achieve their goals efficiently and effectively."
              )}
            </p>
            <p className="pt-5 text-lg lg:text-3xl">
              {t("Your Vision,")}
              <span className="text-secondary"> {t("Our Expertise")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
import { t } from "i18next";
import SocialMedia from "../SocialMedia";
import hero from "../../assets/hero.png";
import BgPattern from "../BgPattern";
import bg_hero from "../../assets/bg-hero.svg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[700px]">
      
      <div className={`absolute top-[20%] -translate-y-1/2 max-w-[1200px] max-h-[600px] opacity-10 right-0`}>
        <img src={bg_hero} className={`h-full w-full float-right`} alt="" />
      </div>
      <div className="container">
        <div className="flex justify-between items-center min-h-[600px]">
          <div className="flex flex-col md:text-start md:max-w-[500px] md:w-1/2 text-3xl leading-snug">
            <h2 className="pb-2">{t("Welcome")}</h2>
            <p>
              {t("We")}{" "}
              <span className="text-secondary">{t("develop software")} </span>
              {t(
                `and provide innovative solutions to meet our customers' needs`
              )}
            </p>
            <p className="pt-5">
              {t("Your Vision,")}
              <span className="text-secondary"> {t("Our Expertise")}</span>
            </p>
            <div className="flex items-center gap-6 md:justify-start justify-center mt-5">
              <SocialMedia />
            </div>
          </div>
          <div className="hidden max-w-[700px] md:w-[600px] md:block z-10">
            <img src={hero} className="w-full" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

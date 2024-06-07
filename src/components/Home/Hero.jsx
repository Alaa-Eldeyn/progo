import { t } from "i18next";
import SocialMedia from "../SocialMedia";
import hero from "../../assets/hero.png";
import bg_hero from "../../assets/bg-hero.svg";
import { motion } from "framer-motion";
import { toRight, toLeft } from "../../utils/motionVariants";

const Hero = () => {
  return (
    <section className="relative overflow-hidden md:min-h-[700px] 2xl:min-h-[800px] mt-20">
      <div
        className={`absolute sm:top-[20%] top-[70%] -translate-y-1/2 max-w-[1200px] max-h-[600px] opacity-10 right-0`}
      >
        <img
          src={bg_hero}
          className={`h-full w-full 2xl:h-screen float-right `}
          alt=""
        />
      </div>
      <div className="container">
        <div className="flex justify-center flex-col md:flex-row  md:justify-between gap-6 items-center min-h-[600px] 2xl:min-h-[700px]">
          <motion.div
            initial={toRight.hidden}
            animate={toRight.visible}
            className="flex flex-col text-start md:max-w-[500px] 2xl:max-w-[700px] md:w-1/2 text-2xl md:text-3xl 2xl:text-[40px]"
          >
            <h2 className="pb-2">{t("Welcome")}</h2>
            <p className="leading-snug">
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
            <div className="flex items-center gap-6 2xl:gap-10 justify-start mt-5 2xl:mt-8">
              <SocialMedia />
            </div>
          </motion.div>
          <motion.div
            initial={toLeft.hidden}
            animate={toLeft.visible}
            className="max-w-[700px] 2xl:w-[700px] md:w-[600px] z-10"
          >
            <img src={hero} className="w-full" alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

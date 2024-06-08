import { motion } from "framer-motion";
import { toLeft, toRight } from "../../utils/motionVariants";
import bg_hero from "../../assets/bg-hero.svg";
import { t } from "i18next";
import SocialMedia from "../../components/SocialMedia";
import hero from "../../assets/hero.png";
import bye from "../../assets/About/bye.svg";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden min-h-[700px] 2xl:min-h-[800px] mt-20">
      <div
        className={`absolute top-[20%] -translate-y-1/2 max-w-[1200px] max-h-[600px] opacity-10 right-0 z-0`}
      >
        <img
          src={bg_hero}
          className={`h-full w-full 2xl:h-screen float-right`}
          alt=""
        />
      </div>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center min-h-[600px] 2xl:min-h-[700px] pt-10 gap-5">
          <motion.div
            initial={toRight.hidden}
            animate={toRight.visible}
            className="flex flex-col text-start md:max-w-[500px] 2xl:max-w-[600px] md:w-1/2 text-3xl 2xl:text-[40px] z-10"
          >
            <h2 className="pb-2 flex gap-3">
              {t("Welcome")} <img src={bye} alt="" />
            </h2>
            <p className="md:leading-snug text-[25px]">
              <span className="text-secondary">{t("Everything")} </span>
              {t(`we do we are challenging ourselves to have something new,`)}
              <span className="text-secondary"> {t("something useful")}</span>
            </p>
            <hr className="mt-5 w-64 border-none h-[2px] bg-white rounded-full" />
            <p className="pt-5 text-[16px] md:leading-loose text-justify text-gray-400">
              {t(
                "we believe in small idea can change the whole universe by making helpful products and services, simple to use and globally integrated We are here to have a better world"
              )}
            </p>
            <div className="flex items-center gap-6 2xl:gap-10 justify-start mt-5 2xl:mt-8">
              <SocialMedia />
            </div>
          </motion.div>
          <motion.div
            initial={toLeft.hidden}
            animate={toLeft.visible}
            className=" max-w-[700px] 2xl:w-[700px] md:w-[600px] z-10"
          >
            <img src={hero} className="w-full" alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

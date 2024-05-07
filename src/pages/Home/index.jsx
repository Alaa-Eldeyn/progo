import { t } from "i18next";
import hero from "../../assets/hero.png";
import bg_hero from "../../assets/bg-hero.png";
import { socialMedia } from "../../data/data";

const HomePage = () => {
  return (
    <>
      <div className={`absolute right-0 top-1/2 -translate-y-1/2 h-[600px] `}>
        <img src={bg_hero} className="w-full h-full " alt="" />
      </div>
      <section className="relative">
        <div className="container">
          <div className="flex justify-center items-center min-h-[600px]">
            <div className="flex flex-col md:text-start md:max-w-[500px] md:w-1/2 text-3xl leading-snug">
              <h2 className="pb-2">{t("Welcome")}</h2>
              <p>
                {t("We")}{" "}
                <span className="text-secondary">{t("develop software")}{" "}</span>
                {t(
                  `and provide innovative solutions to meet our customers' needs`
                )}
              </p>
              <p className="pt-5">
                {t("Your Vision,")}
                <span className="text-secondary"> {t("Our Expertise")}</span>
              </p>
              <div className="flex items-center gap-6 md:justify-start justify-center mt-5">
                {socialMedia.map((item) => {
                  return (
                    <a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      aria-label={item.name}
                    >
                      <img
                        src={item.icon}
                        className="w-5 h-5"
                        alt={item.name}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className=" hidden max-w-[700px] md:w-[65%] md:block">
              <img src={hero} className="w-full" alt="hero" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

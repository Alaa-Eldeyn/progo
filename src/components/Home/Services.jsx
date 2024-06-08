import bg_hero from "../../assets/bg-hero.svg";
import { servicesCards } from "../../data/data";
import MiniTitle from "../MiniTitle";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { toUp } from "../../utils/motionVariants";
import { t } from "i18next";

const Services = () => {
  return (
    <section className="relative bg-light min-h-[600px] overflow-hidden">
      <div
        className={`absolute top-[45%] -translate-y-1/2 opacity-5 -translate-x-[72%] z-0`}
      >
        <img src={bg_hero} className={`h-full w-[90%] float-right`} alt="" />
      </div>
      <div className="container py-10 md:py-24">
        <div className="center flex-col">
          <MiniTitle title="Services" />
          <motion.h3
            initial={toUp.hidden}
            animate={toUp.visible}
            transition={{ delay: 0.2 }}
            className="mt-3 text-xl md:text-3xl font-light max-w-[600px]"
          >
            {t(
              "Rhoda, designing and programming applications and the web in the Arab world"
            )}
          </motion.h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20 mt-32">
          {servicesCards.map((item, index) => (
            <motion.div
              key={item.id}
              initial={toUp.hidden}
              animate={toUp.visible}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard key={index} {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

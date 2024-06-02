import bg_hero from "../../assets/Vector.svg";
import MiniTitle from "../MiniTitle";
import { valueCards } from "../../data/data";
import ValueCard from "./ValueCard";
import { motion } from "framer-motion";
import { toRight, toUp } from "../../utils/motionVariants";

const Values = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      <div
        className={`absolute top-[45%] w-1/4 -translate-y-1/2 opacity-50 right-0 z-0`}
      >
        <img src={bg_hero} className={`h-full w-full float-right`} alt="" />
      </div>
      <div className="container py-24">
        <div className="center flex-col">
          <MiniTitle title="Our Values" />
          <motion.h3
            initial={toUp.hidden}
            animate={toUp.visible}
            transition={{ delay: 0.2 }}
            className="mt-3 text-3xl font-light max-w-96"
          >
            The story and values behind our company
          </motion.h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-[1000px] 2xl:max-w-[1200px] mx-auto">
          {valueCards.map((item, index) => (
            <motion.div
              key={item.id}
              initial={toRight.hidden}
              animate={toRight.visible}
              transition={{ delay: index * 0.2 }}
            >
              <ValueCard key={item.id} {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

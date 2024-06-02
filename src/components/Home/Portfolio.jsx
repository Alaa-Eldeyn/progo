import bg_hero from "../../assets/Vector.svg";
import { projectCards } from "../../data/data";
import MiniTitle from "../MiniTitle";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { toRight, toUp } from "../../utils/motionVariants";

const Portfolio = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      <div
        className={`absolute top-[45%] w-1/4 -translate-y-1/2 opacity-50 right-0 z-0`}
      >
        <img src={bg_hero} className={`h-full w-full float-right`} alt="" />
      </div>
      <div className="container pt-24">
        <div className="center flex-col">
          <MiniTitle title="Portfolio" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 ">
          {projectCards.map((item, index) => (
            <motion.div
              key={item.id}
              initial={toUp.hidden}
              animate={toUp.visible}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...item} />
            </motion.div>
          ))}
        </div>
        <motion.a
          initial={toRight.hidden}
          animate={toRight.visible}
          href="#"
          className="text-3xl my-12 group text-secondary center"
        >
          View all
          <p className="soft ml-2 group-hover:translate-x-2">{`>>`}</p>
        </motion.a>
      </div>
    </section>
  );
};

export default Portfolio;

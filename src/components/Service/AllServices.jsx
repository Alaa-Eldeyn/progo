import {
  devServices,
  digitalServices,
  graphicServices,
  uiUxServices,
} from "../../data/data";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { toUp } from "../../utils/motionVariants";
const HeadLine = ({ title }) => {
  return (
    <div className="center gap-3 pb-5">
      <div className="text-xl">{title}</div>
      <hr className="bg-secondary h-1 w-1 border-none rounded-full flex-grow" />
      <hr className="bg-secondary h-1 w-10 border-none rounded-full " />
    </div>
  );
};
const AllServices = () => {
  return (
    <>
      <HeadLine title="Graphic Design" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-16">
        {graphicServices.map((item, index) => (
          <motion.div
            key={item.id}
            initial={toUp.hidden}
            animate={toUp.visible}
            transition={{ delay: index * 0.1 }}
          >
            <ServiceCard {...item} />
          </motion.div>
        ))}
      </div>

      <HeadLine title="UI/UX Design" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pb-16">
        {uiUxServices.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ServiceCard key={item.id} {...item} />
          </motion.div>
        ))}
      </div>

      <HeadLine title="Development" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pb-16">
        {devServices.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ServiceCard key={item.id} {...item} />
          </motion.div>
        ))}
      </div>

      <HeadLine title="Digital Marketing" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pb-16">
        {digitalServices.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ServiceCard key={item.id} {...item} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AllServices;

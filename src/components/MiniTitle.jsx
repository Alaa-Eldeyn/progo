import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { toDown } from "../utils/motionVariants";

const MiniTitle = ({ title }) => {
  const { t } = useTranslation();
  return (
    <div className="w-fit max-w-[600px]">
      <motion.h2
        initial={toDown.hidden}
        animate={toDown.visible}
        transition={{ delay: 0.2 }}
        className="text-3xl 2xl:text-[40px] font-bold tracking-wider"
      >
        {t(title)}
      </motion.h2>
      <motion.hr
        initial={toDown.hidden}
        animate={toDown.visible}
        className="border-2 border-secondary mt-3 w-full rounded-full"
      />
    </div>
  );
};

export default MiniTitle;

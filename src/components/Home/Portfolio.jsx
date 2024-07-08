import bg_hero from "../../assets/Vector.svg";
import { projectCards } from "../../data/data";
import MiniTitle from "../MiniTitle";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { toRight, toUp } from "../../utils/motionVariants";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Modal from "../Portfolio/Modal";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dialogImg, setDialogImg] = useState("");
  const handleOpen = () => setOpen((cur) => !cur);
  const { t } = useTranslation();
  return (
    <>
      <Modal
        open={open}
        handleOpen={handleOpen}
        title={title}
        description={description}
        dialogImg={dialogImg}
      />
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
            {projectCards.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.id}
                initial={toUp.hidden}
                animate={toUp.visible}
                transition={{ delay: index * 0.1 }}
                className="cursor-pointer"
                onClick={() => {
                  setDialogImg(item.fullImg);
                  setTitle(item.title);
                  setDescription(item.description);
                  handleOpen();
                }}
              >
                <ProjectCard {...item} bg={"bg-light"} />
              </motion.div>
            ))}
          </div>
          <motion.a
            initial={toRight.hidden}
            animate={toRight.visible}
            href="/portfolio"
            className="text-3xl my-12 group text-secondary center"
          >
            {t("View all")}
            <p className="soft mx-2 group-hover:translate-x-2">{` >> `}</p>
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

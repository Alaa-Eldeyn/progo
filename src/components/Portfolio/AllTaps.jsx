import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import { portfolioProjects } from "../../data/data";
import ProjectCard from "../../components/Home/ProjectCard";
import { motion } from "framer-motion";
import { toUp } from "../../utils/motionVariants";
import Modal from "./Modal";

const AllTaps = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dialogImg, setDialogImg] = useState("");
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Modal
        open={open}
        handleOpen={handleOpen}
        title={title}
        description={description}
        dialogImg={dialogImg}
      />
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none bg-transparent pb-5 md:pb-14 flex-wrap text-center center gap-5"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-secondary shadow-none rounded-none md:py-5",
          }}
        >
          {portfolioProjects.map(({ value, label }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`
                    text-white text-sm lg:text-lg mx-1 w-fit md:min-w-40 ${
                      activeTab === value ? "border-secondary" : ""
                    }
                  `}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 200 },
            mount: { y: 0 },
            unmount: { y: 200 },
          }}
          className="grid grid-cols-1 gap-4"
        >
          {portfolioProjects.map(({ value, projects }) => (
            <TabPanel
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
              key={value}
              value={value}
            >
              {projects.map(({ id, title, description, image }, index) => (
                <motion.div
                  initial={toUp.hidden}
                  animate={toUp.visible}
                  transition={{ delay: 0.1 * index }}
                  key={index}
                  className="cursor-pointer"
                  onClick={() => {
                    handleOpen();
                    setTitle(title);
                    setDescription(description);
                    setDialogImg(image);
                  }}
                >
                  <ProjectCard
                    key={id}
                    title={title}
                    description={description}
                    image={image}
                    bg={"bg-primary"}
                  />
                </motion.div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
};

export default AllTaps;

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

const AllTaps = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none bg-transparent pb-14"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-secondary shadow-none rounded-none py-5",
        }}
      >
        {portfolioProjects.map(({ value, label }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`
                    text-white text-sm lg:text-lg mx-1 ${
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
                onClick={() => console.log(image)} // open modal ,, set image to modal with state (setState(image))
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
  );
};

export default AllTaps;

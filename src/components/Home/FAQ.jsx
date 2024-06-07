import { useState } from "react";
import bg_hero from "../../assets/Vector3.svg";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { faq } from "../../data/data";
import { motion } from "framer-motion";
import { toRight, toUp } from "../../utils/motionVariants";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const FAQ = ({ bg }) => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className={`relative ${bg} min-h-[700px] overflow-hidden`}>
      <div className={`absolute top-[45%] -translate-y-1/2 opacity-50 z-0`}>
        <img src={bg_hero} className={`h-full w-[90%] float-right`} alt="" />
      </div>
      <motion.div
        initial={toRight.hidden}
        animate={toRight.visible}
        className="container py-10 md:py-24 flex flex-col md:flex-row gap-10"
      >
        <div className=" text-center md:text-start">
          <p className="text-secondary 2xl:text-xl">FAQ</p>
          <h2 className="text-[40px] 2xl:text-[60px] font-bold leading-tight">
            Frequently Asked <span className="text-secondary hidden md:block">Questions</span>{" "}
          </h2>
          <h6 className="pt-2 text-sm 2xl:text-xl">
            If you have any other questions, you can contact me by email
          </h6>
        </div>
        <div className="soft md:max-w-[63%] min-h-[550px] 2xl:min-h-[650px]">
          {/* Loop with the index instead of number */}
          {faq.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={toUp.hidden}
                animate={toUp.visible}
                transition={{ delay: index * 0.1 }}
              >
                <Accordion
                  key={index}
                  open={open === index + 1}
                  icon={<Icon id={index + 1} open={open} />}
                  className="bg-white shadow-md rounded-lg mb-4 text-primary px-6 py-3  2xl:py-5  text-start"
                >
                  <AccordionHeader
                    onClick={() => handleOpen(index + 1)}
                    className="text-md 2xl:text-2xl font-extrabold"
                  >
                    {item.question}
                  </AccordionHeader>
                  <AccordionBody className="text-justify text-sm pt-3 2xl:text-lg">
                    {item.answer}
                  </AccordionBody>
                </Accordion>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;

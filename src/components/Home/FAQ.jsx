import { useState } from "react";
import bg_hero from "../../assets/Vector3.svg";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { faq } from "../../data/data";

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

const FAQ = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="relative bg-light min-h-[700px] overflow-hidden">
      <div
        className={`absolute top-[45%] -translate-y-1/2 opacity-50 z-0`}
      >
        <img src={bg_hero} className={`h-full w-[90%] float-right`} alt="" />
      </div>
      <div className="container py-24 flex flex-col md:flex-row gap-10">
        <div className=" text-start">
          <p className="text-secondary">FAQ</p>
          <h2 className="text-[40px] font-bold leading-tight">
            Frequently Asked <span className="text-secondary">Questions</span>{" "}
          </h2>
          <h6 className="pt-2">
            If you have any other questions, you can contact me by email
          </h6>
        </div>
        <div className="soft md:max-w-[63%] min-h-[550px]">
          {/* Loop with the index instead of number */}
          {faq.map((item, index) => {
            return (
              <Accordion
                key={index}
                open={open === index + 1}
                icon={<Icon id={index + 1} open={open} />}
                className="bg-white shadow-md rounded-lg mb-4 text-primary px-6 text-start"
              >
                <AccordionHeader
                  onClick={() => handleOpen(index + 1)}
                  className="text-md font-extrabold"
                >
                  {item.question}
                </AccordionHeader>
                <AccordionBody className="text-justify text-sm pt-0">
                  {item.answer}
                </AccordionBody>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
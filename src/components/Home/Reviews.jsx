import dots from "../../assets/dots.svg";
import quote from "../../assets/quote.svg";
import { motion } from "framer-motion";
import { toRight, toDown, toUp } from "../../utils/motionVariants";
import { useTranslation } from "react-i18next";
import { testimonials } from "../../data/data";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [current, setCurrent] = useState(1);
  const length = testimonials.length;
  const { t } = useTranslation();
  const nextTestimonial = (index) => {
    setCurrent(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % length);
    }, 10000);

    return () => clearInterval(interval);
  }, [length]);
  return (
    <section className="py-10 md:py-24 relative min-h-[600px]">
      <div>
        <motion.div
          initial={toDown.hidden}
          animate={toDown.visible}
          transition={{ delay: 0.4 }}
          className="text-3xl mx-auto w-fit center gap-2"
        >
          {t("Some reviews of")}
          <div className="flex flex-col gap-1 mt-3">
            <span className=" w-10 bg-secondary h-[2px]"> </span>
            <span className=" w-10 bg-secondary h-[2px]"> </span>
            <span className=" w-10 bg-secondary h-[2px]"> </span>
          </div>
        </motion.div>
        <div className="text-[60px] font-extrabold tracking-wider w-fit mt-4 mx-auto">
          <motion.div
            initial={toRight.hidden}
            animate={toRight.visible}
            className="bg-secondary w-full h-6 bottom-0 z-0"
          />
          <motion.div
            initial={toUp.hidden}
            animate={toUp.visible}
            transition={{ delay: 0.2 }}
            className="-mt-[67px]"
          >
            {t("Our Clients.")}
          </motion.div>
        </div>
      </div>
      <div className="container center flex-col gap-10">
        <div className="absolute left-0 top-56 w-80 hidden md:block">
          <img src={dots} alt="" />
        </div>
        <div className="absolute right-0 rotate-180 top-[26rem] w-80 hidden md:block">
          <img src={dots} alt="" />
        </div>
        <motion.div
          initial={toUp.hidden}
          animate={toUp.visible}
          transition={{ delay: 0.4 }}
          className="bg-light w-full max-w-[800px] min-h-96 mt-20 relative rounded p-7 pt-20 md:pr-32 text-start "
        >
          <div className="absolute -top-5 md:-top-10 left-7 flex gap-1 md:gap-3">
            <img src={quote} alt="" className="w-5 md:w-10" />
            <img src={quote} alt="" className="w-5 md:w-10" />
          </div>
          <div className="absolute top-10 md:top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 md:translate-x-0 md:-right-20">
            <div className="relative mb-1 w-36 h-36">
              <div className="w-4 h-4 bg-secondary absolute -top-2 -right-2"></div>
              <img
                src={testimonials[current]?.logo}
                alt=""
                className="w-36 h-36"
              />
            </div>
            <div>
              <h5 className="text-secondary text-lg">
                {testimonials[current]?.name}
              </h5>
              <div className="flex gap-1 md:flex-col">
                <p className="text-[11px]">{testimonials[current]?.position}</p>
                <p className="text-[11px] uppercase">
                  {testimonials[current]?.projectName}
                </p>
              </div>
            </div>
          </div>
          <div className=" text-lg mt-16 md:mt-0 text-end leading-loose">
            {testimonials[current]?.review}
          </div>
        </motion.div>
        <div className="mx-auto center gap-1">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => nextTestimonial(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                index === current ? "bg-secondary !w-10" : "bg-light"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

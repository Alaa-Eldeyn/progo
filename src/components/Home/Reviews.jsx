import dots from "../../assets/dots.svg";
import quote from "../../assets/quote.svg";
import testo from "../../assets/Rectangle 65.png";
import { motion } from "framer-motion";
import { toRight, toDown, toUp } from "../../utils/motionVariants";

const Reviews = () => {
  return (
    <section className="py-10 md:py-24 relative min-h-[600px]">
      <div>
        <motion.div
          initial={toDown.hidden}
          animate={toDown.visible}
          transition={{ delay: 0.4 }}
          className=" text-3xl mx-auto w-fit center gap-2"
        >
          Some reviews of
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
            Our Clients.
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
          className="bg-light w-full max-w-[800px] h-96 mt-20 relative rounded p-7 pt-20 md:pr-32 text-start "
        >
          <div className="absolute -top-5 md:-top-10 left-7 flex gap-1 md:gap-3">
            <img src={quote} alt="" className="w-5 md:w-10" />
            <img src={quote} alt="" className="w-5 md:w-10" />
          </div>
          <div className="absolute top-10 md:top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 md:translate-x-0 md:-right-20">
            <div className="relative mb-1">
              <div className="w-4 h-4 bg-secondary absolute -top-2 -right-2"></div>
              <img src={testo} alt="" className="w-36 h-36" />
            </div>
            <div>
              <h5 className="text-secondary text-lg">Mark Rise</h5>
              <div className="flex gap-1 md:flex-col">
                <p className="text-[11px]">CEO founder.</p>
                <p className="text-[11px] uppercase">Alarm</p>
              </div>
            </div>
          </div>
          <div className="md:line-clamp-[10] line-clamp-[8] text-lg mt-16 md:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
            lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum
            turpis amet id posuere torto quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </motion.div>
        <div className="mx-auto center gap-1">
          <div className="w-10 h-1 bg-secondary rounded-full"></div>
          <div className="w-2 h-1 bg-light rounded-full"></div>
          <div className="w-2 h-1 bg-light rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

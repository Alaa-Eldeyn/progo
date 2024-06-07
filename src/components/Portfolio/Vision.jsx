import wave1 from "../../assets/Portfolio/Vector 1.svg";
import wave2 from "../../assets/Portfolio/Vector 3.svg";
import wave3 from "../../assets/Portfolio/Vector 48.svg";
import rightArrow from "../../assets/Portfolio/right arrow.svg";

const Vision = () => {
  return (
    <div className="relative md:min-h-[800px] py-10 overflow-hidden center">
      <img
        src={wave1}
        alt=""
        className="w-full absolute top-1/2 -translate-y-1/2"
      />
      <img
        src={wave2}
        alt=""
        className="w-full absolute top-1/2 -translate-y-1/2"
      />
      <img
        src={wave3}
        alt=""
        className="w-full absolute top-1/2 -translate-y-1/2"
      />
      <div className=" relative w-full max-w-[1200px] h-52 md:h-72 mx-8">
        <div className="absolute rounded-xl overflow-hidden md:p-5 bg-light z-10 h-full center w-full">
          <img
            src={wave1}
            alt=""
            className="w-full absolute top-1/2 -translate-y-1/2 z-0"
          />
          <img
            src={wave2}
            alt=""
            className="w-full absolute top-1/2 -translate-y-1/2 z-0"
          />
          <img
            src={wave3}
            alt=""
            className="w-full absolute top-1/2 -translate-y-1/2 z-0"
          />
          <div className="center gap-5 p-5 md:p-10 z-20">
            <div className="text-start max-w-[85%]">
              <h1 className="text-lg md:text-5xl font-bold">
                Your Vision, Our Expertise
              </h1>
              <p className="text-[10px] sm:text-sm leading-loose md:text-md mt-5 md:max-w-[85%]">
                {`Absolutely! "Your Vision, Our Expertise" encapsulates our
                commitment to understanding and realizing your goals with our
                specialized knowledge and skills.`}
              </p>
            </div>
            <button
              type="button"
              className="md:bg-secondary text-white text-sm py-3 md:px-6 rounded-xl mt-5 center group soft z-10 gap-1"
            >
              <p className="w-20">Start now </p>
              <img
                src={rightArrow}
                className="group-hover:translate-x-1 soft"
              />
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-[99%] h-full bg-secondary rounded-xl z-0 -rotate-2 -translate-x-2"></div>
      </div>
    </div>
  );
};

export default Vision;

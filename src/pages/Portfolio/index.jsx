// import PageTitle from "../../components/PageTitle";
import img from "../../assets/Vector4.svg";
import Contact from "../../components/Home/Contact";
import AllTaps from "../../components/Portfolio/AllTaps";
import Vision from "../../components/Portfolio/Vision";
import { ScrollUp } from "../../components/ScrollUp";

const PortfolioPage = () => {
  return (
    <>
      <ScrollUp />
      <section>
        {/* <PageTitle
        left={"38px"}
        smLeft={"61px"}
        mdLeft={"92px"}
        right={"45px"}
        smRight={"72px"}
        mdRight={"108px"}
        coloredWord={"Our"}
        whiteWord={"Portfolio"}
      /> */}
        <div className="h-36 sm:h-52 overflow-hidden relative mt-20">
          <img
            src={img}
            alt=""
            className="absolute top-0 right-0 opacity-10 max-w-[1000px]"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div
              className={`absolute w-[4px] left-[38px] sm:left-[61px] md:left-[92px] sm:w-[6px] md:w-[9px] h-28 sm:h-32 -bottom-24 bg-secondary`}
            />
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
              <span className="text-secondary">Our </span>Portfolio
            </h1>
            <div
              className={`absolute w-[4px] sm:w-[6px] h-36 right-[25px] sm:right-[41px] md:right-[61px] md:w-[9px] -top-32 bg-white`}
            />
          </div>
        </div>
        <div className="bg-light py-10">
          <div className="container">
            <AllTaps />
          </div>
        </div>
        <Vision />
        <Contact />
      </section>
    </>
  );
};

export default PortfolioPage;

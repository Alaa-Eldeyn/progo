import img from "../../assets/Vector4.svg";
import AllServices from "../../components/Service/AllServices";
import Subscribe from "../../components/Service/Subscribe";
import Contact from "../../components/Home/Contact";

const ServicesPage = () => {
  return (
    <section className="mt-20">
      <div className="h-36 sm:h-52 overflow-hidden relative">
        <img
          src={img}
          alt=""
          className="absolute top-0 right-0 opacity-10 max-w-[1000px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div
            className={`absolute w-[4px] left-[38px] sm:left-[61px] md:left-[92px] sm:w-[6px] md:w-[8px] h-28 sm:h-32 -top-24 bg-secondary`}
          />
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
            <span className="text-secondary">Our </span>Services
          </h1>
          <div
            className={`absolute w-[4px] sm:w-[6px] h-36 right-[45px] sm:right-[72px] md:right-[108px] md:w-[9px] -bottom-32 bg-white`}
          />
        </div>
      </div>
      <div className="bg-light md:pb-24">
        <div className="container">
          <div className="text-3xl py-16">
            <p>
              We have <span className="text-secondary">everything</span>
            </p>
            <p>
              you <span className="text-secondary">need</span>
            </p>
          </div>
          <AllServices />
        </div>
      </div>
      <div className="container">
        <Subscribe />
      </div>
        <Contact />
    </section>
  );
};

export default ServicesPage;

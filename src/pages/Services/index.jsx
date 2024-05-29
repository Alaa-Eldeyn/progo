import img from "../../assets/Vector4.svg";
import ServiceCard from "../../components/Service/ServiceCard";
import {
  graphicServices,
  uiUxServices,
  devServices,
  digitalServices,
} from "../../data/data";

const HeadLine = ({ title }) => {
  return (
    <div className="center gap-3 pb-5">
      <div className="text-xl">{title}</div>
      <hr className="bg-secondary h-1 w-1 border-none rounded-full flex-grow" />
      <hr className="bg-secondary h-1 w-10 border-none rounded-full " />
    </div>
  );
};

const ServicesPage = () => {
  return (
    <section>
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
      <div className="bg-light pb-24">
        <div className="text-3xl py-16">
          <p>
            We have <span className="text-secondary">everything</span>
          </p>
          <p>
            you <span className="text-secondary">need</span>
          </p>
        </div>
        <div className="container">
          <HeadLine title="Graphic Design" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-16">
            {graphicServices.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          </div>

          <HeadLine title="UI/UX Design" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pb-16">
            {uiUxServices.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          </div>

          <HeadLine title="Development" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pb-16">
            {devServices.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          </div>

          <HeadLine title="Digital Marketing" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  pb-16">
            {digitalServices.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

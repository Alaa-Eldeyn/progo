import bg_hero from "../../assets/Vector.svg";
import MiniTitle from "../MiniTitle";
import { valueCards } from "../../data/data";
import ValueCard from "./ValueCard";

const Values = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      <div
        className={`absolute top-[45%] w-1/4 -translate-y-1/2 opacity-50 right-0 z-0`}
      >
        <img src={bg_hero} className={`h-full w-full float-right`} alt="" />
      </div>
      <div className="container py-24">
        <div className="center flex-col">
          <MiniTitle title="Our Values" />
          <h3 className="mt-3 text-3xl font-light max-w-96">
            The story and values behind our company
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-[1000px] mx-auto">
          {valueCards.map((item) => (
            <ValueCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;

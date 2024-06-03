import { aboutGoals } from "../../data/data";
import GoalsCard from "./GoalsCard";

const Goals = () => {
  return (
    <section className="py-24 center flex-wrap gap-10 container">
      {aboutGoals.map((item) => (
        <GoalsCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default Goals;

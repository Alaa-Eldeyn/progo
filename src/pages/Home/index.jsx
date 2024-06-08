import Hero from "../../components/Home/Hero";
import About from "../../components/Home/About";
import Values from "../../components/Home/Values";
import Services from "../../components/Home/Services";
import Portfolio from "../../components/Home/Portfolio";
import FAQ from "../../components/Home/FAQ";
import Reviews from "../../components/Home/Reviews";
import Contact from "../../components/Home/Contact";
import { ScrollUp } from "../../components/ScrollUp";

const HomePage = () => {
  return (
    <>
      <ScrollUp />
      <Hero />
      <About />
      <Values />
      <Services />
      <Portfolio />
      <FAQ bg={"bg-light"} />
      <Reviews />
      <Contact />
    </>
  );
};

export default HomePage;

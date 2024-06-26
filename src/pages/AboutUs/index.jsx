import AboutHero from "../../components/About/AboutHero";
import Services from "../../components/Home/Services";
import FAQ from "../../components/Home/FAQ";
import Contact from "../../components/Home/Contact";
import AboutUs from "../../components/About/AboutUs";
import Goals from "../../components/About/Goals";
import { ScrollUp } from "../../components/ScrollUp";

const AboutUsPage = () => {
  return (
    <>
<ScrollUp />
    <section className="mt-20">
      <AboutHero />
      <AboutUs />
      <Goals />
      <Services />
      <FAQ />
      <Contact />
    </section>
    </>
  );
};

export default AboutUsPage;

import Hero from "../../components/Home/Hero";
import Services from "../../components/Home/Services";
import FAQ from "../../components/Home/FAQ";
import Contact from "../../components/Home/Contact";
import AboutUs from "../../components/About/AboutUs";
import Goals from "../../components/About/Goals";

const AboutUsPage = () => {
  return (
    <section>
      <Hero />
      <AboutUs />
      <Goals />
      <Services />
      <FAQ />
      <Contact />
    </section>
  );
};

export default AboutUsPage;

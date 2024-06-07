import img from "../../assets/Vector4.svg";
import Contact from "../../components/Home/Contact";

const ContactPage = () => {
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
            className={`absolute w-[4px] left-[34px] sm:left-[54px] md:left-[81px] sm:w-[6px] md:w-[9px] h-28 sm:h-26 -bottom-24 bg-secondary`}
          />
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
            <span className="text-secondary">Contact </span>Us
          </h1>
          <div
            className={`absolute w-[4px] sm:w-[6px] h-36 right-[27px] sm:right-[44px] md:right-[67px] md:w-[9px] -top-32 bg-white`}
          />
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default ContactPage;

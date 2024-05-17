import dots from "../../assets/dots.svg";
import quote from "../../assets/quote.svg";
import testo from "../../assets/Rectangle 65.png";
const Reviews = () => {
  return (
    <section className="py-24 relative min-h-[600px]">
      <div>
        <div className=" text-3xl mx-auto w-fit center gap-2">
          Some reviews of
          <div className="flex flex-col gap-1 mt-3">
            <span className=" w-10 bg-secondary h-[2px]"> </span>
            <span className=" w-10 bg-secondary h-[2px]"> </span>
            <span className=" w-10 bg-secondary h-[2px]"> </span>
          </div>
        </div>
        <div className="text-[60px] font-extrabold tracking-wider w-fit mt-4 mx-auto">
          <div className="bg-secondary w-full h-6 bottom-0 z-0" />
          <div className="-mt-[67px]">Our Clients.</div>
        </div>
      </div>
      <div className="container center flex-col gap-10">
        <div className="absolute left-0 top-56 w-80">
          <img src={dots} alt="" />
        </div>
        <div className="absolute right-0 rotate-180 top-[26rem] w-80">
          <img src={dots} alt="" />
        </div>
        <div className="bg-light w-full max-w-[800px] h-96 mt-20 relative rounded p-5 pt-20 pr-32 text-start ">
          <div className="absolute -top-10 left-5 flex gap-3">
            <img src={quote} alt="" />
            <img src={quote} alt="" />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-20">
            <div className="relative mb-1">
              <div className="w-4 h-4 bg-secondary absolute -top-2 -right-2"></div>
              <img src={testo} alt="" className="w-36 h-36" />
            </div>
            <div>
              <h5 className="text-secondary text-lg">Mark Rise</h5>
              <p className="text-[11px]">CEO founder.</p>
              <p className="text-[11px] uppercase">Alarm</p>
            </div>
          </div>
          <div className="line-clamp-[10] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
            lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum
            turpis amet id posuere torto quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore.
          </div>
        </div>
        <div className="mx-auto center gap-1">
          <div className="w-10 h-1 bg-secondary rounded-full"></div>
          <div className="w-2 h-1 bg-light rounded-full"></div>
          <div className="w-2 h-1 bg-light rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

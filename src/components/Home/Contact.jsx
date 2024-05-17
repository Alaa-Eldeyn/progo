import Logo from "../Logo";
import mail from "../../assets/mail-svgrepo-com 1.svg";
import phone from "../../assets/call-svgrepo-com (1) 1.svg";
import location from "../../assets/location-svgrepo-com 1.svg";
import clock from "../../assets/clock-svgrepo-com 1.svg";
import { socialMedia } from "../../data/data";

const Contact = () => {
  return (
    <section className="bg-light relative min-h-[600px]">
      <div className="h-full w-[30%] max-w-80 bg-secondary absolute top-0 right-0" />
      <div className="flex justify-between items-center">
        <div className="p-10 text-start md:max-w-[35%]">
          <Logo />
          <h2 className="text-3xl font-bold mt-10">Contact Us</h2>
          <hr className=" bg-secondary h-1 mt-2 rounded max-w-20  border-none " />
          <div className="mt-5 text-2xl text-gray-500">
            Feel free to contact us any time, we will get back to you as soon as
            we can!
          </div>
          <form className="mt-10 flex flex-col gap-10">
            <div className="relative h-11 w-full min-w-[200px] ">
              <input
                placeholder="Name"
                className="peer h-full w-full border-b border-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-gray-500/50 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-200 peer-focus:after:scale-x-100 peer-focus:after:border-secondary peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                Name
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px] ">
              <input
                placeholder="Email"
                className="peer h-full w-full border-b border-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-gray-500/50 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-200 peer-focus:after:scale-x-100 peer-focus:after:border-secondary peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px] ">
              <input
                placeholder="Message"
                className="peer h-full w-full border-b border-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-gray-500/50 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
              />
              <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-white transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-white peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-200 peer-focus:after:scale-x-100 peer-focus:after:border-secondary peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500">
                Message
              </label>
            </div>
            <button className="bg-secondary text-white py-3 rounded-md tracking-[.3rem] hover:tracking-[.5rem] soft text-3xl font-bold">
              Send
            </button>
          </form>
        </div>
        <div className="bg-primary relative min-h-96 w-1/2">
          <div className="w-5 h-5 absolute -top-2 -left-2 bg-secondary"></div>
          <div className=" p-10 text-start">
            <h3 className=" text-3xl mb-5">Info</h3>
            <table className="flex flex-col gap-10 justify-center items-start">
              <tr className="center gap-4">
                <td>
                  <img src={mail} alt="" className="w-8 h-8" />
                </td>
                <td>progodesign.eg@gmail.com</td>
              </tr>
              <tr className="center gap-4">
                <td>
                  <img src={phone} alt="" className="w-8 h-8" />
                </td>
                <td>+20 0112 003 0082</td>
              </tr>
              <tr className="center gap-4">
                <td>
                  <img src={location} alt="" className="w-8 h-8" />
                </td>
                <td>Nasr city</td>
              </tr>
              <tr className="center gap-4">
                <td>
                  <img src={clock} alt="" className="w-8 h-8" />
                </td>
                <td>09:00AM - 05:00PM</td>
              </tr>
            </table>
            <div className="center gap-10 !text-3xl mt-10">
              {socialMedia.map((item) => {
                return (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    aria-label={item.name}
                  >
                    <img src={item.icon} className="w-8 h-8" alt={item.name} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

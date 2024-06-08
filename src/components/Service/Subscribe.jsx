import { subscribeData } from "../../data/data";
import phone from "../../assets/services/phone.svg";
import { t } from "i18next";
const Subscribe = () => {
  return (
    <div className="relative">
      <div className="center pt-10 md:pt-24 pb-20 md:pb-44">
        <div className="flex gap-16 flex-col items-center md:flex-row text-start max-w-[1100px]">
          <div>
            <div className="text-justify md:max-w-[350px]">
              <h1 className="text-[32px] tracking-wider font-extrabold">
                {t("How we can help you")}
              </h1>
              <p className="text-gray-500 pt-2 pb-8">
                {t(
                  "Follow our newsletter. We will regulary update our latest project and availability."
                )}
              </p>
            </div>
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full flex items-center bg-secondary/20 rounded-xl px-4 py-2">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center p-4 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full outline-none text-sm text-white placeholder:text-gray-400 rounded-lg bg-transparent"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required=""
                />
                <div>
                  <button
                    // type="submit" // if we will use form
                    className=" w-full text-sm font-medium text-center text-white rounded-xl cursor-pointer bg-secondary py-2 px-8"
                  >
                    {t("Subscribe")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-6 md:gap-12">
              {subscribeData.map(({ icon, title, description, id }) => (
                <div key={id} className="sm:max-w-44">
                  <img src={icon} alt="" />
                  <h3 className="font-bold py-3 tracking-wide">{t(title)}</h3>
                  <p className="text-sm text-gray-500 tracking-wide">
                    {t(description)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:max-w-[800px] text-gray-700 mx-auto center flex-col !hidden md:!flex md:flex-row gap-5 absolute -bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-white p-5 rounded-2xl flex justify-between items-center gap-5 h-20 w-[100%] min-w-44 flex-grow shadow-lg shadow-white/20">
          <div className="center text-black gap-3">
            <div className="bg-secondary p-3 rounded-xl mr-3">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            Mail us
          </div>
          <div>saasup@gmail.co</div>
        </div>
        <div className="bg-white p-5 rounded-2xl flex justify-between items-center gap-5 h-20 w-[100%] min-w-44 flex-grow shadow-lg shadow-white/20">
          <div className="center text-black gap-3">
            <div className="bg-secondary p-3 rounded-xl mr-3">
              <img src={phone} alt="" className="w-6 h-6" />
            </div>
            Call us
          </div>
          <div>+001 6547 6589</div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

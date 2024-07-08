import { subscribeData } from "../../data/data";
import { useTranslation } from "react-i18next";
const Subscribe = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <div className="center pt-10 md:pt-24 pb-20">
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
    </div>
  );
};

export default Subscribe;

import { NavLink } from "react-router-dom";
import { navItems } from "../data/data";
import { useGlobalContext } from "./context";
import i18n, { t } from "i18next";

const SideBar = () => {
  const { isEnglish, setIsEnglish,sideBarOpen, setSideBarOpen } =
    useGlobalContext();
  return (
    <>
      <div
        onClick={() => setSideBarOpen(false)}
        className={`fixed top-0 left-0 w-screen h-screen bg-black/50 soft overflow-hidden  ${
          sideBarOpen ? "opacity-1 cursor-pointer z-40" : "opacity-0 -z-10"
        }`}
      ></div>
      <aside
        className={`fixed top-20 right-0 z-50 w-[90%] max-w-[300px] bg-primary h-screen transition-transform soft bg-zinc-900 ${
          sideBarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full">
          <ul className="flex flex-col items-center space-y-10 text-lg pt-10">
            {navItems.map(({ name, href }) => (
              <li key={name} className="w-full hover:bg-black/20">
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? "!text-secondary bg-black/20" : null
                    } soft hover:!text-secondary w-full px-10 py-4 w-18 block`
                  }
                  to={href}
                  onClick={() => setSideBarOpen(false)}
                >
                  {t(name)}
                </NavLink>
              </li>
            ))}
            <li
              className="cursor-pointer select-none text-white soft hover:text-secondary border-t block w-full pt-10 border-gray-50"
              onClick={() => {
                i18n.changeLanguage(isEnglish ? "ar" : "en");
                setIsEnglish(!isEnglish);
              }}
            >
              {isEnglish ? "عربي" : "English"}
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;

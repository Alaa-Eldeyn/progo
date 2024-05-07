import { Link, NavLink } from "react-router-dom";
import { navItems } from "../data/data";
import { useGlobalContext } from "./context";
import { t } from "i18next";
import Logo from "./Logo";

const SideBar = () => {
  const { sideBarOpen, setSideBarOpen } = useGlobalContext();
  return (
    <>
      <div
        onClick={() => setSideBarOpen(false)}
        className={`fixed top-0 left-0 w-screen h-screen bg-black/50 soft overflow-hidden ${
          sideBarOpen ? "opacity-1 cursor-pointer z-10" : "opacity-0 -z-10"
        }`}
      ></div>
      <aside
        className={`fixed top-0 right-0 z-50 w-[90%] max-w-[300px] h-screen transition-transform soft bg-zinc-900 ${
          sideBarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full">
          <div className="flex justify-center items-center mt-10 mb-20">
            <Logo />
          </div>
          <ul className="flex flex-col items-center gap-16 text-lg">
            {navItems.map(({ name, href }) => (
              <li key={name}>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-secondary" : null
                    } text-white soft hover:bg-secondary rounded-full px-10 w-18 block`
                  }
                  to={href}
                  onClick={() => setSideBarOpen(false)}
                >
                  {t(name)}
                </NavLink>
              </li>
            ))}
            <div className="">
              <Link
                className="rounded-full px-5 py-1.5 text-sm font-medium text-secondary border border-secondary hover:bg-secondary hover:text-white soft"
                to="#"
                onClick={() => setSideBarOpen(false)}
              >
                {t("start now")}
              </Link>
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;

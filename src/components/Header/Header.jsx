import Logo from "../Logo";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { navItems } from "../../data/data";
const Header = () => {
  const { isEnglish, setIsEnglish, sideBarOpen, setSideBarOpen } =
    useGlobalContext();
  const { t } = useTranslation();
  return (
    <header className="h-20 bg-light">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Logo />
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navItems.map(({ name, href }) => (
                  <li key={name}>
                    <NavLink
                      className={({ isActive }) =>
                        `${
                          isActive ? "bg-secondary" : null
                        } text-white soft hover:bg-secondary rounded-full px-3`
                      }
                      to={href}
                    >
                      {t(name)}
                    </NavLink>
                  </li>
                ))}
                <li className="border border-white w-0 h-6 mt-1"></li>
                <li
                  className="cursor-pointer select-none text-white soft hover:text-secondary"
                  onClick={() => {
                    i18n.changeLanguage(isEnglish ? "ar" : "en");
                    setIsEnglish(!isEnglish);
                  }}
                >
                  {isEnglish ? "عربي" : "English"}
                </li>
              </ul>
            </nav>

            <div className="hidden md:flex">
              <Link
                className="rounded-full px-5 py-1.5 text-sm font-medium text-secondary border border-secondary hover:bg-secondary hover:text-white soft"
                to="#"
              >
                {t("start now")}
              </Link>
            </div>

            <div className="block md:hidden">
              <button
                onClick={() => {
                  setSideBarOpen(!sideBarOpen);
                }}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

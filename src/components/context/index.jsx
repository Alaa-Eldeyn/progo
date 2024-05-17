import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie"

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  let lang = Cookies.get("i18next") || "en";
  const [isEnglish, setIsEnglish] = useState(lang === "en");
  const [sideBarOpen, setSideBarOpen] = useState(false);
  
  return (
    <AppContext.Provider
      value={{ sideBarOpen, setSideBarOpen,isEnglish, setIsEnglish, lang }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

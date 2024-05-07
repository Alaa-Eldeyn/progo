import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home";
import ServicesPage from "./pages/Services";
import PortfolioPage from "./pages/Portfolio";
import AboutUsPage from "./pages/AboutUs";
import ContactPage from "./pages/Contact";
import { useEffect } from "react";
import { useGlobalContext } from "./components/context";
import SideBar from "./components/SideBar";

function App() {
  let { lang } = useGlobalContext();
  useEffect(() => {
    if (lang === "en") {
      window.document.dir = "ltr";
    } else {
      window.document.dir = "rtl";
    }
  }, [lang]);
  return (
    <main className="min-h-screen ">
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about_Us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </main>
  );
}

export default App;

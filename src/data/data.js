import facebook from "../assets/facebook-svgrepo-com 1.svg";
import instagram from "../assets/instagram-svgrepo-com 1.svg";
import whatsapp from "../assets/icons8-whatsapp.svg";
import linkedin from "../assets/linkedin-svgrepo-com 1.svg";
import behance from "../assets/behance-svgrepo-com 1.svg";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "services" },
  { name: "Portfolio", href: "portfolio" },
  { name: "About us", href: "about_us" },
  { name: "Contact", href: "contact" },
];
const socialMedia = [
  {
    id: 1,
    name: "facebook",
    link: "https://www.facebook.com/progo.eg/",
    icon: facebook,
  },
  {
    id: 2,
    name: "instagram",
    link: "https://www.instagram.com/progo.eg/",
    icon: instagram,
  },
  {
    id: 3,
    name: "whatsapp",
    link: "https://wa.me/message/WZ7DCUUIE2JBA1",
    icon: whatsapp,
  },
  {
    id: 4,
    name: "linkedin",
    link: "https://www.linkedin.com/company/progo-soft/",
    icon: linkedin,
  },
  {
    id: 5,
    name: "behance",
    link: "https://www.behance.net/progo_eg",
    icon: behance,
  },
];

export { navItems, socialMedia };

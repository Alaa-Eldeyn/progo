import facebook from "../assets/facebook-svgrepo-com 1.svg";
import instagram from "../assets/instagram-svgrepo-com 1.svg";
import whatsapp from "../assets/icons8-whatsapp.svg";
import linkedin from "../assets/linkedin-svgrepo-com 1.svg";
import behance from "../assets/behance-svgrepo-com 1.svg";
import Innovation from "../assets/Icon.svg";
import TeamWork from "../assets/Icon-1.svg";
import Excellent from "../assets/Icon-2.svg";
import Responsibility from "../assets/Icon-3.svg";
import srv1 from "../assets/ux (1) 1.svg";
import srv2 from "../assets/smartphone-call 1.svg";
import srv3 from "../assets/www 2.svg";
import srv4 from "../assets/Vector2.svg";
import srv5 from "../assets/branding 1.svg";
import srv6 from "../assets/motion-graphics.svg";
import srv7 from "../assets/social-media.svg";
import srv8 from "../assets/seo.svg";
import project1 from "../assets/Hi Community Cover.jpg";
import project2 from "../assets/APPCover.jpg";
import project3 from "../assets/sega.jpeg";

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
    link: "https://wa.me/+201099402670",
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
const valueCards = [
  {
    id: 1,
    title: "Quality",
    description:
      "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout",
    icon: Innovation,
  },
  {
    id: 2,
    title: "Teamwork",
    description:
      "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout",
    icon: TeamWork,
  },
  {
    id: 3,
    title: "Excellence",
    description:
      "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout",
    icon: Excellent,
  },
  {
    id: 4,
    title: "Responsibility",
    description:
      "Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout",
    icon: Responsibility,
  },
];
const servicesCards = [
  {
    id: 1,
    icon: srv1,
    service: "UI/UX Design",
  },
  {
    id: 2,
    icon: srv2,
    service: "Mobile Development",
  },
  {
    id: 3,
    icon: srv3,
    service: "Web Development",
  },
  {
    id: 4,
    icon: srv4,
    service: "Graphic Design",
  },
  {
    id: 5,
    icon: srv5,
    service: "Brand Identity",
  },
  {
    id: 6,
    icon: srv6,
    service: "Motion Graphic",
  },
  {
    id: 7,
    icon: srv7,
    service: "Digital Marketing",
  },
  {
    id: 8,
    icon: srv8,
    service: "SEO",
  },
];
const projectCards = [
  {
    id: 1,
    title: "Hi Community!",
    description: "Development & UI/UX Design & SEO",
    image: project1,
  },
  {
    id: 2,
    title: "Hi Community!",
    description: "Development & UI/UX Design & SEO",
    image: project2,
  },
  {
    id: 3,
    title: "Hi Community!",
    description: "Development & UI/UX Design & SEO",
    image: project3,
  },
  {
    id: 4,
    title: "Hi Community!",
    description: "Development & UI/UX Design & SEO",
    image: project1,
  },
  {
    id: 5,
    title: "Hi Community!",
    description: "Development & UI/UX Design & SEO",
    image: project2,
  },
  {
    id: 6,
    title: "Hi Community!",
    description: "Development & UI/UX Design & SEO",
    image: project3,
  },
];
const faq = [
  {
    id: 1,
    question:
      "Can you cover the software development process from start to finish?",
    answer:
      "Certainly! This is our core service. We are a specialized software design and development company, capable of providing end-to-end coverage of the software development process. We have a strong team of IT experts, including consultants, engineers, and developers, who are responsible for all aspects of software development, from gathering and deriving requirements to software design, programming, deployment, and support",
  },
  {
    id: 2,
    question: "Can we get the software quickly?",
    answer:
      "Certainly! This is our core service. We are a specialized software design and development company, capable of providing end-to-end coverage of the software development process. We have a strong team of IT experts, including consultants, engineers, and developers, who are responsible for all aspects of software development, from gathering and deriving requirements to software design, programming, deployment, and support",
  },
  {
    id: 3,
    question: "What is the cost of software development?",
    answer:
      "Certainly! This is our core service. We are a specialized software design and development company, capable of providing end-to-end coverage of the software development process. We have a strong team of IT experts, including consultants, engineers, and developers, who are responsible for all aspects of software development, from gathering and deriving requirements to software design, programming, deployment, and support",
  },
  {
    id: 4,
    question: "What are your policies for post-launch?",
    answer:
      "Certainly! This is our core service. We are a specialized software design and development company, capable of providing end-to-end coverage of the software development process. We have a strong team of IT experts, including consultants, engineers, and developers, who are responsible for all aspects of software development, from gathering and deriving requirements to software design, programming, deployment, and support",
  },
  {
    id: 5,
    question: "How do you ensure the quality of the software you provide?",
    answer:
      "Certainly! This is our core service. We are a specialized software design and development company, capable of providing end-to-end coverage of the software development process. We have a strong team of IT experts, including consultants, engineers, and developers, who are responsible for all aspects of software development, from gathering and deriving requirements to software design, programming, deployment, and support",
  },
  {
    id: 6,
    question:
      "What is the average time required to create a complete profile for my company?",
    answer:
      "Certainly! This is our core service. We are a specialized software design and development company, capable of providing end-to-end coverage of the software development process. We have a strong team of IT experts, including consultants, engineers, and developers, who are responsible for all aspects of software development, from gathering and deriving requirements to software design, programming, deployment, and support",
  },
];
export { navItems, socialMedia, valueCards, servicesCards, projectCards, faq };

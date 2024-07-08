import { useState } from "react";
import MiniTitle from "../MiniTitle";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const [isFull, setIsFull] = useState(false);
  const { t } = useTranslation();
  const fullDescription = `
          <br />
          ${t(
            "After the project is completed, Progo provides technical support services. The company believes in the importance of providing the necessary technical support to its clients after the project is completed, to ensure the continuity of their work efficiently and smoothly."
          )}
          <br />
          <br />
          ${t(
            "When the project is completed, Progo provides its clients with the necessary tools and resources to control their website or application, and provides periodic technical support to ensure the absence of technical problems or errors."
          )}
          <br />
          <br /> ${t(
            "If there is any problem, the company works to fix it as soon as possible. In addition, clients can contact Progo&apos;s technical support team at any time to obtain the necessary assistance, whether it is to make updates or modifications to the website or application, or to answer any technical questions or inquiries."
          )}
          <br />
          <br /> ${t(
            "Vision: To become a leading company in software design and development, expanding our services to cover new markets in every region around the world."
          )}
          <br />
          <br />
          ${t(
            "Mission: Progo aims to provide its services to a large number of clients worldwide and use the latest technologies and tools to meet global business needs."
          )}`;
  return (
    <div className="bg-light py-24">
      <div className="container center flex-col">
        <MiniTitle title="About Us" />
        <div className=" leading-loose text-md pt-10 text-justify">
          {t(
            "Progo is an Egyptian company established in 2022 as one of the leading web development companies in Egypt. Progo has taken steps towards the global market, providing top-notch design and software development services to a diverse range of clients in the Arab countries and the Gulf. Today, we at Progo serve thousands of clients worldwide, supporting them with the best methods to utilize new technologies and tools to achieve their goals."
          )}{" "}
          <br />
          <br />
          {t(
            "One of the distinctive features of Progo is that the company does not just build your software, but it first familiarizes you with the software concept, its building stages, and the necessary conditions that must be met in the software. This ensures that your software is built correctly, efficiently, and in line with your needs and aspirations."
          )}
          {isFull &&
            fullDescription.split("<br />").map((item, index) => (
              <p key={index}>
                {item}
                <br />
              </p>
            ))}
          <span
            className="text-secondary cursor-pointer"
            onClick={() => setIsFull(!isFull)}
          >
            {isFull ? ` ${t("Read Less")}...` : ` ${t("Read More")}...`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

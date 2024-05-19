import { socialMedia } from "../data/data";

const SocialMedia = () => {
  return (
    <>
      {socialMedia.map((item) => {
        return (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            aria-label={item.name}
          >
            <img
              src={item.icon}
              alt={item.name}
              className={` w-6 h-6 2xl:w-8 2xl:h-8`}
            />
          </a>
        );
      })}
    </>
  );
};

export default SocialMedia;

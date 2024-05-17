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
            <img src={item.icon} className="w-5 h-5" alt={item.name} />
          </a>
        );
      })}
    </>
  );
};

export default SocialMedia;

import img from "../assets/Vector4.svg";

const PageTitle = ({
  left,
  smLeft,
  mdLeft,
  right,
  smRight,
  mdRight,
  coloredWord,
  whiteWord,
}) => {
  return (
    <div className="h-36 sm:h-52 overflow-hidden relative">
      <img
        src={img}
        alt=""
        className="absolute top-0 right-0 opacity-10 max-w-[1000px]"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div
          className={`absolute w-[4px] left-[${left}] sm:left-[${smLeft}] md:left-[${mdLeft}] sm:w-[6px] md:w-[8px] h-32 -top-24 bg-secondary`}
        />
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
          <span className="text-secondary">{coloredWord}</span> {whiteWord}
        </h1>
        <div
          className={`absolute w-[4px] sm:w-[6px] h-36 right-[${right}] sm:right-[${smRight}] md:right-[${mdRight}] md:w-[9px] -bottom-32 bg-white`}
        />
      </div>
    </div>
  );
};

export default PageTitle;

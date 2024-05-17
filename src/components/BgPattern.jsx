const BgPattern = ({ classes, float, bg }) => {
  return (
    <div className={`absolute ${classes}`}>
      <img src={bg} className={`h-full w-full float-${float}`} alt="" />
    </div>
  );
};

export default BgPattern;

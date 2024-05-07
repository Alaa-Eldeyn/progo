import logo from "../assets/Progo.svg";
const Logo = () => {
  return (
    <a className="block max-w-28" href="#">
      <span className="sr-only">Home</span>
      <img src={logo} alt="Logo" className="w-full" />
    </a>
  );
};

export default Logo;

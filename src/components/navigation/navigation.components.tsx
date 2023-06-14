import logo from "../../images/logo.svg";
import hamburgerMenu from "../../images/icon-hamburger.svg";

const Navigation = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <img src={hamburgerMenu} alt="mobile menu" />
      </div>
    </div>
  );
};

export default Navigation;

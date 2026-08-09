import Menu from "../../assets/images/icon-menu.svg";

import "./header.scss";

const Header = () => {
  return (
    <header aria-labelledby="header-title ">
      <h2 id="head-title">
        <a href="/">● Bridge Collective</a>
      </h2>
      <button>
        <img src={Menu} alt="" />
      </button>
    </header>
  );
};
export default Header;

import { useContext } from "react";

import Menu from "../../assets/images/icon-menu.svg";
import Close from "../../assets/images/icon-close.svg";

import { NavContext } from "../../context/NavContext/NavContext";
import Nav from "../Nav/Nav";

import "./header.scss";

const Header = () => {
  const context = useContext(NavContext);
  if (!context) throw new Error("No context!!");

  const { active, setActive } = context;

  const handleNav = () => {
    setActive({ active: !active.active });
  };

  return (
    <>
      <header aria-labelledby="header-title ">
        <h2 id="head-title">
          <a href="/">● Bridge Collective</a>
        </h2>
        <button
          onClick={handleNav}
          aria-controls="primary-navigation"
          aria-expanded={active.active}
          aria-label={
            active.active ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {active.active ? (
            <img src={Close} alt="" />
          ) : (
            <img src={Menu} alt="" />
          )}
        </button>
      </header>
      <Nav />
    </>
  );
};
export default Header;

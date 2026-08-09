import { useContext } from "react";
import "./nav.scss";
import { NavContext } from "../../context/NavContext/NavContext";

const Nav = () => {
  const context = useContext(NavContext);
  if (!context) throw new Error("No context!!");

  const { active } = context;
  return (
    <nav
      className={active.active ? "active" : ""}
      aria-label="Primary navigation"
      id="primary-navigation"
      aria-hidden={!active.active}
    >
      <ul className="nav-items">
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="/work">Our Work</a>
        </li>
        <li className="nav-item">
          <a href="/partners">Partners</a>
        </li>
        <li className="nav-item">
          <a href="/report">Annual Report</a>
        </li>
        <li className="nav-item">
          <a href="/donate">Donate</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;

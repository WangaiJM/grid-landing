import "./nav.scss";

const Nav = () => {
  return (
    <nav>
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

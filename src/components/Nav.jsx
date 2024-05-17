import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <header className="header">
      <h1 className="header__title">Title</h1>
      <nav className="header__nav">
        <ul className="nav__list">
          <Link to={"/"}>
            <li className="list__item">Home</li>
          </Link>
          <Link to={"/projects"}>
            <li className="list__item">Projects</li>
          </Link>
          <Link to={"/contact"}>
            <li className="list__item">Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

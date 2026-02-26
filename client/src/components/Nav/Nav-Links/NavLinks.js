import { Link } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <nav className="nav__bottom__container">
      <div className="bottom__container">
        <ul className="nav">
          <li className="nav-link">
            <Link to="/">Главная</Link>
          </li>
          <li className="nav-link">
            <Link to="/shop">Магазин</Link>{" "}
          </li>
          <li className="nav-link">
            <Link to="/category/men">Букеты из конфет</Link>
          </li>
          <li className="nav-link">
            <Link to="/category/women">Букеты из фруктов</Link>
          </li>
          <li className="nav-link">
            <Link to="/category/kids">Букеты из снеков</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;

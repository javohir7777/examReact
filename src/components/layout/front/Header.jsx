import { NavLink } from "react-router-dom";

import brand from "../../../assets/brand/Logo.png";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="nav-brand">
          <NavLink to="/">
            <img src={brand} alt="" />
          </NavLink>
        </div>
        <div className="nav-menu">
          <ul>
            <NavLink className="nav-menu__items" to="/">
              Home
            </NavLink>
            <NavLink className="nav-menu__items" to="/blog">
              Blog
            </NavLink>
            <NavLink className="nav-menu__items" to="/about">
              About Us
            </NavLink>
            <NavLink className="nav-menu__items" to="/register">
              Register
            </NavLink>
          </ul>
          <button className="btn-login">
            <NavLink className="nav-menu__items" to="/login">
              Login
            </NavLink>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

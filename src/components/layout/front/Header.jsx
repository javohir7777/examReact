import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

import brand from "../../../assets/brand/Logo.png";

import "./Header.scss";

const Header = () => {
  const { isAuthenticed } = useContext(AuthContext);
  return (
    <header>
      <nav className="container">
        <div className="nav-brand">
          {isAuthenticed ? (
            <NavLink className="nav-menu__items" to="/my-blogs">
              My blogs
            </NavLink>
          ) : (
            <NavLink to="/">
              <img src={brand} alt="" />
            </NavLink>
          )}
        </div>
        <div className="nav-menu">
          <ul>
            <NavLink className="nav-menu__items" to="/">
              Home
            </NavLink>
            <NavLink className="nav-menu__items" to={`/posts`}>
              All posts
            </NavLink>
            <NavLink className="nav-menu__items" to="/about">
              About Us
            </NavLink>
            <NavLink className="nav-menu__items" to="/register">
              Register
            </NavLink>
          </ul>
          <button className="btn-login">
            {isAuthenticed ? (
              <NavLink className="nav-menu__items" to="/account">
                Account
              </NavLink>
            ) : (
              <NavLink className="nav-menu__items" to="/login">
                Login
              </NavLink>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

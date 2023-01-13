import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../../Constants/images";
import "./style.css";

const Navbar = () => {
  const [navOpen, isNavOpen] = useState(false);
  const toggle = () => {
    isNavOpen(!navOpen);
  };
  return (
    <header className={`${navOpen ? "headerW" : ""}`}>
      <nav className="nav">
        <div className="nav__wrapper">
          <Link to="/" className="nav__logo">
            <img src={images.logo} alt="Logo" />
          </Link>
          <div className="nav__flex">
            <a href="/" className={`${navOpen ? "hide" : "login"}`} id="btn">
              Log in
            </a>
            <a
              href="/"
              className={`${navOpen ? "hide" : "openAccount"}`}
              id="btn"
            >
              Open Account
            </a>
            <div
              className={`${
                navOpen ? "nav__hamburger open" : "nav__hamburger"
              }`}
              onClick={toggle}
              id="hamburger"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${
          navOpen
            ? "nav__links has-fade fade-in"
            : "nav__links has-fade fade-out"
        }`}
      >
        <div className="wrapper">
          <div className="content">
            <ul className="links">
              <li className="navBtns">
                <a href="/" className="loginBtn">
                  Open Account
                </a>
                <a href="/" className="loginBtn">
                  Login
                </a>
              </li>
              <li>
                <Link to="/" className="desktop-link" onClick={toggle}>
                  About US
                </Link>
                <input type="checkbox" id="show-about" />
                <label htmlFor="show-about">About</label>
                <ul>
                  <li>
                    <Link to="/about" onClick={toggle}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={toggle}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/accounts/lordknight"
                  className="desktop-link"
                  onClick={toggle}
                >
                  Account
                </Link>
                <input type="checkbox" id="show-accounts" />
                <label htmlFor="show-accounts">Accounts</label>
                <ul>
                  <li>
                    <Link to="/accounts/lordknight" onClick={toggle}>
                      LORD KNIGHT
                    </Link>
                  </li>
                  <li>
                    <Link to="/accounts/royalhighness" onClick={toggle}>
                      ROYAL HIGHNESS
                    </Link>
                  </li>
                  <li>
                    <Link to="/accounts/promotions" onClick={toggle}>
                      Promotions
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="/forexTrading"
                  className="desktop-link"
                  onClick={toggle}
                >
                  Trading
                </Link>
                <input type="checkbox" id="show-trading" />
                <label htmlFor="show-trading">Trading</label>
                <ul>
                  <li>
                    <Link to="/forexTrading" onClick={toggle}>
                      Forex Trading
                    </Link>
                  </li>
                  <li>
                    <Link to="/cfdTrading" onClick={toggle}>
                      CFD Trading
                    </Link>
                  </li>
                  <li>
                    <Link to="/crypto" onClick={toggle}>
                      CRYPTOCURRIENCES
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/" className="desktop-link" onClick={toggle}>
                  DOCUMENTATION
                </Link>
                <input type="checkbox" id="show-resources" />
                <label htmlFor="show-resources">DOCUMENTATION</label>
                <ul>
                  <li>
                    <Link to="/documentation/regulation" onClick={toggle}>
                      Regulation
                    </Link>
                  </li>
                  <li>
                    <Link to="/documentation/webiste" onClick={toggle}>
                      Website T&Cs
                    </Link>
                  </li>
                  <li>
                    <Link to="/documentation/privacy" onClick={toggle}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/documentation/risk" onClick={toggle}>
                      Risk Statement
                    </Link>
                  </li>
                  <li>
                    <Link to="/documentation/cookie" onClick={toggle}>
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/documentation/trading" onClick={toggle}>
                      Trading Documents
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/education" className="desktop-link" onClick={toggle}>
                  Education
                </Link>
                <input type="checkbox" id="show-education" />
                <label htmlFor="show-education">education</label>
                <ul>
                  <li>
                    <Link to="/education" onClick={toggle}>
                      Webinars
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-cente">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <a href="index.html" className="logo me-auto me-lg-0">
          <img
            src="assets/img/logo-main-nav.png"
            alt=""
            className="img-fluid"
            width="70px"
            id="logo"
          />
        </a>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                <strong>Home</strong>
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto "
                href="https://cosmo-marketplace.vercel.app/"
              >
                <strong>MarketPlace</strong>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                <strong>About</strong>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#specials">
                <strong>Docs</strong>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#events">
                <strong>Events</strong>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#chefs">
                <strong>Blogs</strong>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#gallery">
                <strong>WhitePaper</strong>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                <strong>Contact</strong>
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a
          href="#book-a-table"
          className="book-a-table-btn scrollto d-none d-lg-flex"
        >
          <strong>Start Exploring</strong>
        </a>
      </div>
    </header>
  );
};

export default Navbar;

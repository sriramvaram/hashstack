import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

import NavLinks from "./NavLinks";
import LogoWhite from "./../../public/images/logo.png";
import LogoDark from "./../../public/images/logo-2.png";
import denusya_logo from "./../../public/images/denusya_logo.png";
import Dhenusya_logo_white from "./../../public/images/Dhenusya_logo_white.png";

const Header3 = ({
  handleOpen,
  handleRemove,
  searchToggle,
  handleToggle,
  scroll,
}) => {
  return (
    <>
      <header
        className={`main-header header-style-three ${
          scroll ? "fixed-header" : ""
        } ${searchToggle ? "moblie-search-active" : ""}`}
      >
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="top-left">
                <ul className="social-icon-one">
                  <li>
                    <Link href="#">
                      <span className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-facebook-square" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-pinterest-p" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="top-right">
                <ul className="list-style-one">
                  <li>
                    <i className="fa fa-envelope" />{" "}
                    <Link href="mailto:support@chromiumsolutions.com">
                      support@chromiumsolutions.com{" "}
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-map-marker" />
                    Dr No 1-56-12/7, Flat No F8, 3Rd Flr Hig, -63/1, Seetha
                    Homes, Mvp, Sec 1, Main Rd, Visakhapatanam, Vishakhapatnam
                    Andhra Pradesh, 530017, India
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-lower">
          <div class="auto-container">
            <div className="main-box">
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    {/* <Image src={denusya_logo} title="Hash Stack" /> */}
                    <Image src={Dhenusya_logo_white} title="Hash Stack" />
                  </Link>
                </div>
              </div>
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <NavLinks extraClassName="header3" />
                </nav>
                <div className="outer-box">
                  <div className="ui-btn-outer border-0">
                    <button
                      className="ui-btn ui-btn search-btn"
                      onClick={handleToggle}
                    >
                      <span className="icon lnr lnr-icon-search" />
                    </button>
                    <Link href="#" className="ui-btn">
                      <i className="lnr-icon-shopping-cart" />
                    </Link>
                  </div>
                  <div className="mobile-nav-toggler" onClick={handleOpen}>
                    <span className="icon lnr-icon-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleRemove} />
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/">
                  {/* <Image src={denusya_logo} title="Hash Stack" /> */}
                  <Image src={Dhenusya_logo_white} title="Hash Stack" />
                </Link>
              </div>
              <div className="close-btn" onClick={handleRemove}>
                <i className="icon fa fa-times" />
              </div>
            </div>
            <MobileMenu />
            <ul className="contact-list-one">
              <li>
                <div className="contact-info-box">
                  <i className="icon lnr-icon-phone-handset" />
                  <span className="title">Call Now</span>
                  <Link href="tel:+91880098670">+91 (8800) - 98670</Link>
                </div>
              </li>
              <li>
                <div className="contact-info-box">
                  <span className="icon lnr-icon-envelope1" />
                  <span className="title">Send Email</span>
                  <Link href="mailto:help@company.com">help@company.com</Link>
                </div>
              </li>
              <li>
                <div className="contact-info-box">
                  <span className="icon lnr-icon-clock" />
                  <span className="title">Send Email</span>
                  Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                </div>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <Link href="#">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-pinterest" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="search-popup">
          <span className="search-back-drop" />
          <button className="close-search" onClick={handleToggle}>
            <span className="fa fa-times" />
          </button>
          <div className="search-inner">
            <form method="post" action="#">
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  placeholder="Search..."
                  required
                />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className={`sticky-header ${
            scroll ? "fixed-header animated slideInDown" : ""
          }`}
        >
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo">
                <Link href="/" title>
                  {/* <Image src={denusya_logo} title="Hash Stack" /> */}
                  <Image src={Dhenusya_logo_white} title="Hash Stack" />
                </Link>
              </div>
              <div className="nav-outer">
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <NavLinks />
                  </div>
                </nav>
                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header3;

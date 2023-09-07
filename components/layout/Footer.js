import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoWhite from "./../../public/images/logo.png";
import LogoDark from "./../../public/images/logo-2.png";
import denusya_logo from "./../../public/images/denusya_logo.png";
import Dhenusya_logo_white from "./../../public/images/Dhenusya_logo_white.png";
import Hashstacklogo1 from "./../../public/images/Hashstacklogo1.png";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div
          className="bg-image"
          style={{ backgroundImage: "url(./images/background/2.jpg)" }}
        />
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
                <div className="footer-widget about-widget">
                  <div className="logo">
                    <a href="/">
                      <Image src={Hashstacklogo1} title="Hash Stack" />
                    </a>
                  </div>
                  <div className="text">
                    Desires to obtain pain of itself, because it is pain, but
                    occasionally circumstances.
                  </div>
                  <ul className="social-icon-two">
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget">
                  <h3 className="widget-title">Explore</h3>
                  <ul className="user-links">
                    <li>
                      <a href="#">About Company</a>
                    </li>
                    <li>
                      <a href="#">Meet the Team</a>
                    </li>
                    <li>
                      <a href="#">News &amp; Media</a>
                    </li>
                    <li>
                      <a href="#">Our Projects</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget contact-widget">
                  <h3 className="widget-title">Contact</h3>
                  <div className="widget-content">
                    <div className="text">
                      Dr No 1-56-12/7, Flat No F8, 3Rd Flr Hig, -63/1, Seetha
                      Homes, Mvp, Sec 1, Main Rd, Visakhapatanam, Vishakhapatnam
                      Andhra Pradesh, 530017, India{" "}
                    </div>
                    <ul className="contact-info">
                      <li>
                        <i className="fa fa-envelope" />{" "}
                        <a href="mailto:support@chromiumsolutions.com">
                          support@chromiumsolutions.com{" "}
                        </a>
                        <br />
                      </li>
                      <li>
                        <i className="fa fa-phone-square" />{" "}
                        <a href="tel:+916668880000">+91 666 888 0000</a>
                        <br />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget gallery-widget">
                  <h3 className="widget-title">Gallery</h3>
                  <div className="widget-content">
                    <div className="outer clearfix">
                      <figure className="image">
                        <a href="#">
                          <img
                            src="/images/resource/project-thumb-1.jpg"
                            title="Hash Stack"
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src="/images/resource/project-thumb-2.jpg"
                            title="Hash Stack"
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src="/images/resource/project-thumb-3.jpg"
                            title="Hash Stack"
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src="/images/resource/project-thumb-4.jpg"
                            title="Hash Stack"
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src="/images/resource/project-thumb-5.jpg"
                            title="Hash Stack"
                          />
                        </a>
                      </figure>
                      <figure className="image">
                        <a href="#">
                          <img
                            src="/images/resource/project-thumb-6.jpg"
                            title="Hash Stack"
                          />
                        </a>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              {/* <div className="copyright-text">
                © Copyright 2023 by{" "}
                <a href="https://themeforest.net/user/thememascot/portfolio">
                  Company.com
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

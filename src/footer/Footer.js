import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { CopyrightRounded } from "@material-ui/icons";

const Footer = () => {
  return (
    <div id="contactus">
      <footer className="footer-area">
        <div className="container">
          <div className="footer-inner">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="widget">
                  <Link className="widget-title" to={"/"}>
                    <img className="footer__logo" src={logo} alt="logo" />
                  </Link>
                  <span className="widget-title pl-1">ABC Bank</span>
                  <ul className="widget-list">
                    <li>123 Main Dr, St 100</li>
                    <li>Dallas, TX, 75050</li>
                    <li>Email:info@mtdbank.com</li>
                    <li>Phone:234-3434567</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6 offset-lg-1">
                <div className="widget">
                  <div className="widget-title">Links</div>
                  <ul className="widget-list">
                    <li>
                      <Link to={"/"}> FAQs</Link>
                    </li>
                    <li>
                      <Link to={"/"}> About Us</Link>
                    </li>
                    <li>
                      <Link to={"/"}> Contact Us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="widget widget-about">
                  <h4 className="widget-title">About Us</h4>
                  <ul className="widget-list">
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/blog"}>Blog</Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Sign in</Link>
                    </li>
                    <li>
                      <Link to={"/"}>My Account</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="widget widget-contact">
                  <h4 className="widget-title">Contact Us.</h4>
                  <p>Please connect with us through following channels</p>
                  <ul className="social-area">
                    <li>
                      <Link to={"/"}>
                        <TwitterIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <FacebookIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <LinkedInIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <PinterestIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12 align-self-center">
              <div className="text-center">
                <ul>
                  <li>
                    <Link to={"/"}>Terms&Conditions</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Site Map</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 align-left-center pb-3">
        <div className="copy-right text-center">
          <span>
            <CopyrightRounded />
          </span>
          2021, ABC Bank All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react'
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PinterestIcon from "@material-ui/icons/Pinterest";

const Footer = () => {
    return (
        <div>
            <footer className="footer-area">
                <div className="container">
                    <div className="footer-inner">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="widget">
                                    <Link className="widget_title" to={"/"}>
                                        <img className="footer__logo" src={logo} alt="logo" />ABC Bank
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            
        </div>
    )
}

export default Footer;

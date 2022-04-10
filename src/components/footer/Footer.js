import React from "react";
import {
  FacebookOutlined,
  GoogleOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row  ">
        <div className="col-md-5 about">
          <h4 className="text-center">ABOUT US</h4>
          <p>
            Lead Shop is focused on providing an excellent customer
            experience,ease-of-purchase, comprehensive customer care and a
            hassle-free shopping and return experience.
          </p>
        </div>

        <div className="col-md-3  menu">
          <h4>QUICK MENU</h4>
          <div>
            <p className="mb-2 ">
              <NavLink to="/about">About Us</NavLink>
            </p>
            <p className="mb-2 ">
              <NavLink to="/contact">Contact Us</NavLink>
            </p>
            <p className="mb-2 ">
              <NavLink to="/mission">Mission & Vission</NavLink>
            </p>
            <p className="mb-2 ">
              <NavLink to="/privacy">Privacy Policy</NavLink>
            </p>
            <p className="mb-2 ">
              <NavLink to="/terms">Terms & Conditions</NavLink>
            </p>
          </div>
        </div>

        <div className="col-md-4  social">
          <h4>SOCIAL LINK</h4>

          <a
            href="https://www.facebook.com/Faisalahmed2410"
            target="_blank"
            rel="noreferrer"
            className="me-3 social-icon"
          >
            <FacebookOutlined />{" "}
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="me-3 social-icon"
          >
            <TwitterOutlined />
          </a>
          <a
            href="https://www.LinkedIn.com"
            target="_blank"
            rel="noreferrer"
            className="me-3 social-icon"
          >
            <LinkedinOutlined />
          </a>

          <a
            href="https://www.facebook.com/Faisalahmed2410"
            target="_blank"
            rel="noreferrer"
            className="me-2 social-icon "
          >
            <GoogleOutlined />
          </a>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="copyright col-md-12">
          <div className="">All Rights Reserved by Lead Shop @ 2022</div>
          <div>Designed and Developed by <span><a href="https://www.facebook.com/Faisalahmed2410"
            target="_blank"
            rel="noreferrer">Faisal Ahmed</a></span></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

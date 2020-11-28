import React from "react";
import Logo from "Component/Logo/Logo";
import Button from "Component/Button/Button";
import "./Footer.scss";
import iconOffice from "Assets/Images/Icons/icon-connect.svg";
import iconMonas from "Assets/Images/Icons/icon-monas.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-3">
            <div className="logo">
              <Logo></Logo>
            </div>
            <h3>We kaboom your beauty holiday instantly and memorable</h3>
          </div>
          <div className="col-auto">
            <h2>Explore Us</h2>
            <ul>
              <li>
                <Button type="link" href="#">
                  Our Careers
                </Button>
              </li>
              <li>
                <Button type="link" href="#">
                  Privacy & Policy
                </Button>
              </li>
              <li>
                <Button type="link" href="#">
                  Terms and Condition
                </Button>
              </li>
              <li>
                <Button type="link" href="#">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h2>For Beginners</h2>
            <ul>
              <li>
                <Button type="link" href="#">
                  Use Payment
                </Button>
              </li>
              <li>
                <Button type="link" href="#">
                  Start Booking Rroom
                </Button>
              </li>
              <li>
                <Button type="link" href="#">
                  Capture The Moment
                </Button>
              </li>
              <li>
                <Button type="link" href="#">
                  Get New Experience
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <h2>Connect Us</h2>
            <div className="connect">
              <img src={iconOffice} alt="" />
              <span
                style={{
                  marginLeft: "20px",
                  fontSize: "18px",
                  color: "#2B4CDE",
                }}
              >
                Office
              </span>
            </div>
            <p
              style={{
                marginTop: "20px",
                fontSize: "16px",
                color: "#2B4CDE",
              }}
            >
              gostaycation@gmail.com
              <br />
              021 - 5474113
              <br />
              Tangerang Selatan, Indonesia
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center mb-5">
          <p className="align-self-end mb-0 mr-3">
            © 2019 - 2020 Staycation.com • All rights reserved • Love from
            Jakarta 
          </p>
          <span>
            <img src={iconMonas} alt="" />
          </span>
        </div>
      </div>
    </footer>
  );
}

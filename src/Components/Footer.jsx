import React from "react";
import InstagramIcon from "../Assets/instagram.svg";
import TwitterIcon from "../Assets/twitter.svg";
import FacebookIcon from "../Assets/facebook.svg";
import Logo from "../Assets/Logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer row gap-48">
        {/* Column 1: Logo and description */}
        <div className="col gap-16">
          <img src={Logo} alt="Kemet Logo" width="120" />
          <p className="p4 blackP">
            Connecting you with authentic Arabic handcrafts <br /> and the
            artisans who create them.
          </p>
        </div>

        {/* Column 2: Company */}
        <div className="col gap-8">
          <p className="p4" style={{ fontWeight: "var(--semibold)" }}>
            Company
          </p>
          <p className="p4">About Us</p>
          <p className="p4">Our Story</p>
          <p className="p4">Become a Seller</p>
        </div>

        {/* Column 3: Support */}
        <div className="col gap-8">
          <p className="p4" style={{ fontWeight: "var(--semibold)" }}>
            Support
          </p>
          <p className="p4">Help Center</p>
          <p className="p4">Contact Us</p>
          <p className="p4">Privacy Policy</p>
        </div>

        {/* Column 4: Follow us */}
        <div className="col gap-16">
          <p
            className="p4"
            style={{ fontWeight: "var(--semibold)", textAlign: "center" }}
          >
            Follow us
          </p>
          <div className="row gap-16" style={{ gap: "16px" }}>
            <img src={InstagramIcon} alt="Instagram" width="24" />
            <img src={FacebookIcon} alt="Facebook" width="24" />
            <img src={TwitterIcon} alt="Twitter" width="24" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider"></div>

      {/* Copyright */}
      <div className="centered copyright">
        <p className="p4">© 2025 Kemet. All rights reserved.</p>
      </div>
    </footer>
  );
}

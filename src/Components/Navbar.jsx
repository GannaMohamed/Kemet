import React from "react";
import logo from "../Assets/Logo.svg";
import downloadIcon from "../Assets/download icon.svg";
export default function Navbar() {
  return (
    <div className="navbar glass centered">
      <img src={logo} />
      <ul className="row">
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Collections">Collections</a>
        </li>
        <li>
          <a href="#OurStory">Our Story</a>
        </li>
        <li>
          <a href="#How">How it works</a>
        </li>
      </ul>
      <button className="centered">
        <img src={downloadIcon} />
        Download App
      </button>
    </div>
  );
}

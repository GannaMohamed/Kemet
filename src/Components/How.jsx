import React from "react";
import img1 from "../Assets/1.svg";
import img2 from "../Assets/2.svg";
import img3 from "../Assets/3.svg";

export default function How() {
  return (
    <div
      id="How"
      className="features container centered"
      style={{ gap: "40px" }}
    >
      <div className="col centered" style={{ gap: "8px" }}>
        <h2>How It Works</h2>
        <p className="p3">Three simple steps to discover authentic crafts </p>
      </div>
      <div
        className="featureCards row"
        style={{ justifyContent: "space-between", gap: "24px" }}
      >
        <div className="featureItem col centered">
          <div>
            <img src={img1} />
          </div>
          <h4>Authentic Artisans</h4>
          <p className="p4">
            Handpicked creators, fair prices, and direct support for local
            craftspeople.
          </p>
        </div>
        <div className="featureItem col centered">
          <div>
            <img src={img2} />
          </div>
          <h4>Learn the artisan's story</h4>
          <p className="p4">
            Read artisan stories, watch short clips, and learn the craft behind
            each piece.
          </p>
        </div>
        <div className="featureItem col centered">
          <div>
            <img src={img3} />
          </div>
          <h4>Shop & track your order</h4>
          <p className="p4">
            Secure, in‑app payment with real-time order tracking.
          </p>
        </div>
      </div>
    </div>
  );
}

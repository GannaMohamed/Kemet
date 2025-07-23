import React from "react";
import img1 from "../Assets/prod1.svg";
import img2 from "../Assets/prod2.svg";
import img3 from "../Assets/prod3.svg";
import img4 from "../Assets/prod4.svg";

export default function Collections() {
  return (
    <div
      id="Collections"
      className="collections col centered"
      style={{ gap: "40px" }}
    >
      <div className="col centered" style={{ gap: "8px" }}>
        <h2>Featured Collections</h2>
        <p className="p3">Curated treasures from master craftspeople</p>
      </div>

      <div className="row" style={{ gap: "24px" }}>
        {/* CARD */}
        <div className="card col">
          <img src={img1} />
          <div className="cardContent" style={{ gap: "8px" }}>
            <h5>Egyptian Pottery & Ceramics</h5>
            <p className="p4">Handcrafted vessels and decorative pieces</p>
          </div>
        </div>
        {/* CARD */}
        <div className="card col">
          <img src={img2} />
          <div className="cardContent" style={{ gap: "8px" }}>
            <h5>Handwoven Textiles</h5>
            <p className="p4">Traditional fabrics and embroidery</p>
          </div>
        </div>
        {/* CARD */}
        <div className="card col">
          <img src={img3} />
          <div className="cardContent" style={{ gap: "8px" }}>
            <h5>Egyptian Pottery & Ceramics</h5>
            <p className="p4">Handcrafted vessels and decorative pieces</p>
          </div>
        </div>
        {/* CARD */}
        <div className="card col">
          <img src={img4} />
          <div className="cardContent" style={{ gap: "8px" }}>
            <h5>Home Decor</h5>
            <p className="p4">Decorative accents and furnishings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

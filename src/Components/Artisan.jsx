import React from "react";
import user from "../Assets/layla.svg";

export default function Artisan() {
  return (
    <div
      id="Artisan"
      className="why container centered"
      style={{ gap: "40px" }}
    >
      <h2>Artisan Spotlight</h2>
      <div className="artisanCard centered col" style={{ gap: "16px" }}>
        <div>
          <img src={user} />
        </div>
        <div className="col" style={{ gap: "42px" }}>
          <p className="p2">
            "Kemet connected me with customers who truly appreciate my work.
            It's more than a marketplace—it's a community."
          </p>
          <div className="col" style={{ gap: "0px" }}>
            <h5>Layla Hassan</h5>
            <p>Ceramic Artist, Cairo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

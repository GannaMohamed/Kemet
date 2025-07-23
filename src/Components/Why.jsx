import React from "react";
import why1 from "../Assets/why1.svg";
import why2 from "../Assets/why2.svg";
import why3 from "../Assets/why3.svg";
export default function Why() {
  return (
    <div id="About" className="why container centered" style={{ gap: "40px" }}>
      <div className="col centered" style={{ gap: "8px" }}>
        <h2>Why Choose Kemet?</h2>
        <p className="p3">
          Connecting you directly with skilled artisans and authentic
          craftsmanship
        </p>
      </div>
      <div
        className="row"
        style={{ justifyContent: "space-between", gap: "24px" }}
      >
        <div className="whyItem col centered">
          <div>
            <img src={why1} />
          </div>
          <h4>Authentic Artisans</h4>
          <p className="p4">
            Handpicked creators, fair prices, and direct support for local
            craftspeople.
          </p>
        </div>
        <div className="whyItem col centered">
          <div>
            <img src={why2} />
          </div>
          <h4>Seamless Experience</h4>
          <p className="p4">
            Browse, favorite, and purchase in just a few taps—secure checkout
            guaranteed.
          </p>
        </div>
        <div className="whyItem col centered">
          <div>
            <img src={why3} />
          </div>
          <h4>Real‑Time Updates</h4>
          <p className="p4">
            Get notified of new collections, live artisan stories, and
            limited‑edition drops.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import mockup from "../Assets/Downdload app mockup.svg";
import apple from "../Assets/App Store.svg";
import google from "../Assets/Google Play.svg";
export default function Download() {
  return (
    <div className="download row">
      <div className="col" style={{ gap: "42px" }}>
        <div className="col" style={{ gap: "60px" }}>
          <h1>Ready to Discover Authentic Egyptian Crafts?</h1>
          <div className="col" style={{ gap: "38px" }}>
            <h3 style={{ fontWeight: "500" }}>
              Buy or Sell Unique Handmade Products with Kemet!
            </h3>
            <p className="p3">
              Download the Kemet app to explore handmade treasures from the
              Egyptian world!
              <br />
              Start your journey today and support local artisans.
            </p>
          </div>
          {/* <h3>Buy or Sell Unique Handmade Products with Kemet!</h3> */}
        </div>
        <div className="appMockup row" style={{ gap: "16px" }}>
          <div>
            <img src={apple} />
          </div>
          <div>
            <img src={google} />
          </div>
        </div>
      </div>
      <div style={{ margin: "0px 104px" }}>
        <img src={mockup} />
      </div>
    </div>
  );
}

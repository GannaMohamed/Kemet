import React from "react";
import img from "../Assets/our stor.svg";
export default function Story() {
  return (
    <div id="OurStory" className="story container row" style={{ gap: "24px" }}>
      <div className="centered" style={{ gap: "24px" }}>
        <img src={img} />
        <div className="col" style={{ gap: "16px" }}>
          <h2>Our Story</h2>
          <p className="p3" style={{ textAlign: "left" }}>
            Kemet was born from a passion to connect the world with Egypt’s rich
            heritage and empower the artisans who keep its traditions alive.
            <br />
            <br />
            Named after the ancient word for Egypt, meaning “Black Land,” Kemet
            is a tribute to the Nile Valley’s creativity and continuity. Our
            mission is to build a sustainable marketplace where artisans proudly
            showcase their craft, and every purchase directly supports them and
            their communities.
          </p>
        </div>
      </div>
    </div>
  );
}

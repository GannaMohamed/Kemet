import React from "react";
import star from "../Assets/star.svg";

export default function Reviews() {
  return (
    <div className="reviews centered col">
      {/* STARS */}
      <div className="row">
        <div className="star">
          <img src={star} />
        </div>
        <div className="star">
          <img src={star} />
        </div>
        <div className="star">
          <img src={star} />
        </div>
        <div className="star">
          <img src={star} />
        </div>
        <div className="star">
          <img src={star} />
        </div>
      </div>
      {/* CONTENT */}
      <h2>4.9/5 from 10,000+ happy buyers</h2>
      <p className="p3">
        Join thousands of satisfied customers discovering authentic crafts
      </p>
    </div>
  );
}

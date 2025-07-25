import apple from "../Assets/apple icon.svg";
import google from "../Assets/google play icon.svg";
import mockup1 from "../Assets/home screen 1.svg";
import mockup2 from "../Assets/home screen 2.svg";
export default function Hero() {
  return (
    <div className="hero" id="#Hero">
      <div
        className="container"
        style={{ flexDirection: "row", gap: "131px", paddingTop: "70px" }}
      >
        {/* CONTENT */}
        <div className="content col" style={{ gap: "32px" }}>
          <div>
            <h1>Discover The Soul Of Egyptian Handcrafts</h1>
            <p className="p2">
              Shop unique, artisan‑made treasures from Egypt and beyond—right
              from your phone.
            </p>
          </div>
          <div className="row" style={{ gap: "24px" }}>
            <button className="centered" style={{ gap: "8px" }}>
              <img src={apple} />
              Download on iOS
            </button>
            <button className="buttonSecondary centered" style={{ gap: "8px" }}>
              <img src={google} />
              Get on Android
            </button>
          </div>
        </div>
        {/* MOCKUP */}
        <div className="heroMockup row">
          <div>
            <img data-aos="fade-right" src={mockup1} className="mockup1Img" />
          </div>
          <div>
            <img data-aos="fade-left" src={mockup2} />
          </div>
        </div>
      </div>
    </div>
  );
}

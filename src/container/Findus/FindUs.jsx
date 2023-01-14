import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => (
  <div
    className="app__findUs app__wrapper app__bg section__padding"
    id="contact"
  >
    <div className="app__findUs-content app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <p className="p__opensans p__color" style={{ marginBottom: "2rem" }}>
        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
      </p>
      <p
        className="p__cormorant"
        style={{ color: "var(--color-golden)", marginBottom: "2rem" }}
      >
        Opening Hours
      </p>
      <p className="p__opensans p__color">Mon - Fri: 10:00 am - 02:00 am</p>
      <p className="p__opensans p__color">Sat - Sun: 10:00 am - 03:00 am</p>
      <button
        className="custom__button"
        type="button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>
    <div className="app__findUs-img app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;

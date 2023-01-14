import React from "react";
import { images } from "../../constants";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contactUs">
        <h4 className="app__footer-title">Contact Us</h4>
        <p className="p__opensans p__color">
          9 W 53rd St, New York, NY 10019, USA
        </p>
        <p className="p__opensans p__color">+1 212-344-1230</p>
        <p className="p__opensans p__color">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links-gericht">
        <h3 className="app__footer-links-gericht_title">Gerícht</h3>
        <p className="p__opensans p__color">
          "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
          Others."
        </p>
        <img className="spoon__img" src={images.spoon} alt="spoon" />
        <div className="app__footer-links-gericht_socials">
          <FiFacebook color="white" />
          <FiTwitter color="white" />
          <FiInstagram color="white" />
        </div>
      </div>
      <div className="app__footer-links-hours">
        <h4 className="app__footer-title">Working Hours</h4>
        <p className="p__opensans p__color">Monday-Friday:</p>
        <p className="p__opensans p__color">08:00 Am - 12:00 Am</p>
        <p className="p__opensans p__color" style={{ marginTop: "1rem" }}>
          Saturday-Sunday:
        </p>
        <p className="p__opensans p__color">07:00 Am - 11:00 Pm</p>
      </div>
    </div>
    <div className="app__footer-copyright">
      <p className="p__opensans p__color">2021 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;

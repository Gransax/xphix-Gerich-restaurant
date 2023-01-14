import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import { data } from "../../constants";
import "./Laurels.css";

const Laurels = () => (
  <div
    className="app__awards app__bg app__wrapper section__padding"
    id="awards"
  >
    <div className="app__awards-content app__wrapper_info">
      <div className="app__awards-content-heading">
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
      </div>
      <div className="app__awards-content-awards">
        {data.awards.map(({ title, subtitle, imgUrl }, index) => (
          <div
            key={`laurel-${index}`}
            className="app__awards-content-awards-item"
          >
            <div className="app__awards-content-awards-item_img">
              <img src={imgUrl} alt="award" />
            </div>
            <div className="app__awards-content-awards-item_title">
              <p className="p__cormorant">{title}</p>
              <p className="p__opensans p__color">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="app__awards-img app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;

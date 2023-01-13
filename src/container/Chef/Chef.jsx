import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__chef app__bg app__wrapper section__padding">
    <div className="app__chef-img app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__chef-content app__wrapper_info">
      <div className="app__chef-content_heading">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
      </div>
      <div className="app__chef-content_speach">
        <div className="app__chef-content_speach-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans p__color">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .
          </p>
        </div>
        <p className="p__opensans p__color">
          Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit.
          Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie
          Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.
        </p>
      </div>
      <div className="app__chef-content-presentation">
        <p className="app__chef-content-presentation_name">Kevin Luo</p>
        <p className="p__opensans p__color">Chef & Founder</p>
      </div>
      <div className="app__chef-content_sign">
        <img src={images.sign} alt="chef signature" />
      </div>
    </div>
  </div>
);

export default Chef;

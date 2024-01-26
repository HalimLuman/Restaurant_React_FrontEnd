import React from "react";
import "./chef.css";

import images from "../../constants/images";
import { SubHeading } from "../../components";

const Chef = () => {
  return (
    <div className="app__bg section__padding app__wrapper">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="Chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="Quote" />
            <p className="p__opensans">
              Lorem Ipsum Is Simply Dummy Text Of The Printing
            </p>
          </div>
          <p className="p__opensans">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
            Ever Since The 1500s
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="Signature" />
        </div>
      </div>
    </div>
  );
};

export default Chef;

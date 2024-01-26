import React from "react";
import "./findUs.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum,
            dolores?
          </p>
          <p className="p__cormorant" style={{color: '#dcca87', margin:'2rem 0'}}>
            Opening Hours
          </p>
          <p className="p__opensans">
            Mon - Fri: 10:00 am - 02:00 am
          </p>
          <p className="p__opensans">
            Sat - Sun: 10:00 am - 03:00 am
          </p>
          <button type="button" style={{marginTop: '2rem'}} className="custom__button">Visit Us</button>
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="Find Us" />
      </div>
    </div>
  );
};

export default FindUs;

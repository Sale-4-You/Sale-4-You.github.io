import React from "react";
import "./Intro.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { intro } from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";

export default function Intro() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="intro">
      <div className="intro-main">
        <div className="intro-text-div">
          <div>
            <h1 className="intro-text">
              {" "}
              {intro.title}
              {" "}
              <span className="drop-emoji">{emoji("🛒")}</span>

              <span className="flip-emoji">{emoji("💰")}</span>
            </h1>
            <p className="intro-text-p subTitle">{intro.subTitle}</p>
            <SocialMedia />
            <div className="button-intro-div">
              <Button text="Contact Us" href="#contact" />
              <Button text="See Advantages" />
            </div>
          </div>
        </div>
        <div className="intro-image-div">
          <img alt="E-commerce page" src={require("../../assets/images/ecommerce.svg")}></img>
        </div>
      </div>
    </div>
    </Fade>
  );
}

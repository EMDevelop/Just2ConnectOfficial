/** @format */

import React from "react";
import PinkTick from "../images/icons/tickIconPink.svg";
import { Grid } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import "./pagescss/ProductPages.css";

function FeatureItem(props) {
  return (
    <Grid item xs={12} sm={12} md={6} lg={props.LargeGrid}>
      <ScrollAnimation
        animateIn="slideInUp"
        duration={0.6}
        delay={300}
        animateOnce={true}
      >
        <div className="featureContainerWrapper">
          {" "}
          <div className="FeatureContainer">
            <ScrollAnimation
              animateIn="slideInDown"
              duration={0.2}
              delay={1000}
              animateOnce={true}
            >
              <img
                src={PinkTick}
                alt="tick"
                className="featureIcon"
                draggable="false"
              />
            </ScrollAnimation>
          </div>
          <div className="FeatureContainerTitles">
            <h1 className="FeatureTitle">{props.featureTitle}</h1>
          </div>
          <div className="FeatureContainerText">
            <h2 className="FeatureText">{props.featureDescription}</h2>
          </div>
        </div>
      </ScrollAnimation>
    </Grid>
  );
}

export default FeatureItem;

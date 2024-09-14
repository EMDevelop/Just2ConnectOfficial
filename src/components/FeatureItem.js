/** @format */

import React from "react";
import PinkTick from "../images/icons/tickIconPink.svg";
import { Grid } from "@material-ui/core";
import "./pagescss/ProductPages.css";

function FeatureItem(props) {
  return (
    <Grid item xs={12} sm={12} md={6} lg={props.LargeGrid}>
      <div className='featureContainerWrapper'>
        {" "}
        <div className='FeatureContainer'>
          <img
            src={PinkTick}
            alt='tick'
            className='featureIcon'
            draggable='false'
          />
        </div>
        <div className='FeatureContainerTitles'>
          <h1 className='FeatureTitle'>{props.featureTitle}</h1>
        </div>
        <div className='FeatureContainerText'>
          <h2 className='FeatureText'>{props.featureDescription}</h2>
        </div>
      </div>
    </Grid>
  );
}

export default FeatureItem;

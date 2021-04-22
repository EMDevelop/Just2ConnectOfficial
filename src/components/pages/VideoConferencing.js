// Imports
import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../pagescss/ProductPages.css";

// Components
import ContactUs from "../ContactUs.js";
import FeatureItem from "../FeatureItem.js";
import FAQItem from "../FAQItem.js";


// Icons and Images
import VideoConferencingHero from "../../images/ProductPage/videoConferencingHero.svg";
import Peanut from "../../images/ProductPage/PinkNutshell.svg";



const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
    height: "100%",
    alignContent: "center",
    alignItems: "alignItems",
  },
}));

function VideoConferencing() {
  const classes = useStyles();

  return (
    <div>
      {/* --------------------------------------- */}
      {/* Hero */}
      {/* --------------------------------------- */}
      <div className="Hero">
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} sm={12} md={7}>
            <div className="HeroSloganPP">
              <h1 className="HeroTitle">Video Conferencing</h1>
              <p className="HeroSubtitle">
                Video Conferencing <b>|</b> Comunicate Face To Face
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <div className="HeroImagePP">
              <img
                src={VideoConferencingHero}
                alt="TelephoneSystems"
                className="Hero_Stock_ImagePP"
                draggable="false"
              />
            </div>
          </Grid>
        </Grid>
      </div>

      {/*----------------------------------------------------------------------- */}
      {/*-------------------------- Page Descripton --------------------------*/}
      {/*----------------------------------------------------------------------- */}

      <div className="descriptionSection">
        <div className="nutshellImage">
          <img
            src={Peanut}
            alt="Nutshell"
            className="nutshellIMG"
            draggable="false"
          />
        </div>
        <h1 className="nutshell">In a nutshell...</h1>
        <p className="descriptionText">
          Web Meet allows up to 100 users at a time to securely video call and
          conference. 
        </p>
      </div>

      {/* --------------------------------------- */}
      {/* Features */}
      {/* --------------------------------------- */}

      <div className="ContentContainer">
        <div className="ContentTitle">Features</div>
        <div className="BenefitsContainer">
          <Grid
            container
            spacing={3}
            className="outerGrid"
            align="center"
            justify="center"
            alignItems="center"
          >
            <FeatureItem
              featureTitle="Screen Sharing"
              featureDescription="Communicate face to face with particpants using screen sharing."
              LargeGrid = {3}
            />
            <FeatureItem
              featureTitle="Instant Messaging"
              featureDescription="Private or public messaging alows you to converse in real time, share links, text and much more."
              LargeGrid = {3}
            />
            <FeatureItem
              featureTitle="Video Recording"
              featureDescription="Record and review your meeting through the Web Meet portal with easy playback."
              LargeGrid = {3}
            />
            <FeatureItem
              featureTitle="Blur Background"
              featureDescription="Hide your location if required by toggling the 'blur background' option."
              LargeGrid = {3}
            />
            <FeatureItem
              featureTitle="Multiple Conferences"
              featureDescription="You can have multiple conferences running simultaneously, with a number of participants in each call."
              LargeGrid = {3}
            />
           <FeatureItem
              featureTitle="Range Of Shortcuts"
              featureDescription="Speed up and customise your call with a range of control shortcuts within the video conference call."
              LargeGrid = {3}
            />
            <FeatureItem
              featureTitle="Speaker Stats"
              featureDescription="Ensure everyone has airtime throughout the conference."
              LargeGrid = {3}
            />
            </Grid>
        </div>
      </div>


      {/* --------------------------------------- */}
      {/* FAQ */}
      {/* --------------------------------------- */}
      <div className="FAQ">
        <div className="FAQTitle">
          <h1 className="FAQText">FAQ</h1>
        </div>

        <FAQItem
          Question="Can I use Web Meet on my mobile & tablet?"
          Answer="Yes, the system is compatible with most devices."
        />
        <FAQItem
          Question="Do I have to pay separately for each video conference?"
          Answer="No, you pay a flat monthly fee for the service and access to as many conferences as you wish with up to 100 particpants in each conference."
        />
        <FAQItem
          Question="Do participants have to pay to dial into the conference by telephone?"
          Answer="We will allocate you a Local rate number for your particpants to call to access the service. They will only pay the same amount they'd pay to their provider to make a local call. If they were using a mobile with unlimited calls, they wouldn't have to pay anything as the cost of the call would be included in their monthly mobile tariff."
        />
        <FAQItem
          Question="Can I join a conference with voice and video turned off?"
          Answer="Yes, you can. Simply click on the voice / audio icons to toggle each one on and off."
        />
      </div>


      {/* --------------------------------------- */}
      {/* Contact Us */}
      {/* --------------------------------------- */}

      <div className="ContactUs">
        <ContactUs />
      </div>
    </div>
  );
}

export default VideoConferencing;

/** @format */
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
import Peanut from "../../images/ProductPage/PinkNutshell.svg";
import SipTrunksHero from "../../images/ProductPage/sipTrunksHero.svg";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
    height: "100%",
    alignContent: "center",
    alignItems: "alignItems",
  },
}));

function SIPTrunks() {
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
              <h1 className="HeroTitle">SIP Trunks</h1>

              <p className="HeroSubtitle">
                Low Cost Calls <b>|</b> No Line Rental <b>|</b> Business
                Continuity
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <div className="HeroImagePP">
              <img
                src={SipTrunksHero}
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
          SIP Trunks enable a traditional PBX telephone system to make and
          receive calls over the internet and soon will be a direct
          replacement for traditional ISDN lines. Our Business SIP connections
          have been designed for reliability and flexibility.
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
              featureTitle="Business Continuity"
              featureDescription="If your office has to be temporarily relocated, continuity can quickly and cost effectively be achieved with SIP Trunking."
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Save Money"
              featureDescription="IP connectivity costs less than ISDN with lower monthly rental charges and generally lower call costs."
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Flexibility"
              featureDescription="Having a SIP connection allows you to move office and keep your same geographic number, without any ongoing call forwarding costs."
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Resilience"
              featureDescription="A phone service that will cope with any situation and ensure up time on your telephony."
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Line Rationalisation"
              featureDescription="SIP Trunks remove the need for ISDN lines, thereby dramatically reducing your monthly line costs."
              LargeGrid = {4}
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
          Question="Can I replace my ISDN lines with a SIP Trunk?"
          Answer="Yes, SIP Trunks are a direct replacement for ISDN lines. You will save money, plus SIP Trunks don't normally have monthly subscription costs, unlike ISDN lines, and calls are cheaper."
        />
        <FAQItem
          Question="Can I use a SIP Trunk on my PBX?"
          Answer="Many have the capability for SIP Trunks already built in. If not, you can either add a SIP card to the PBX or buy a converter box - available from many suppliers."
        />
        <FAQItem
          Question="Can I keep my existing phone numbers?"
          Answer="Yes, you can. You can 'port' your numbers to the SIP Trunk provider and all your incoming and outgoing calls will go over the SIP Trunk. 
          Another option is to retain inbound calls over the ISDN lines, but reduce the number of lines you pay for, and use the SIP Trunk for outbound calls. 
          You wouldn't need to port your numbers in this scenario, and this would also give you greater continuity if either the ISDN lines or the SIP Trunk was down."
        />
        <FAQItem
          Question="How many concurrent calls can I have on my SIP Trunk?"
          Answer="A SIP Trunk can have as many channels/concurrent calls as you need. 
          Most SIP Trunk providers sell channel capacity in batches, however you could have 1 million channels in your SIP Trunk if that’s how many calls were made too and from your business. 
          Each SIP Trunk call takes up 100KB bandwidth on your broadband, so if you have a maximum of 10 concurrent calls at any one time, you would need to have 1MB of broadband available for the calls -
          if you need to ask any questions, give us a call on 01442 573030."
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

export default SIPTrunks;

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
import BroadbandHero from "../../images/ProductPage/broadbandHero.svg";
import Speed1 from "../../images/ProductPage/Speed1.svg";
import Speed2 from "../../images/ProductPage/Speed2.svg";
import Speed3 from "../../images/ProductPage/Speed3.svg";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
    height: "100%",
    alignContent: "center",
    alignItems: "alignItems",
  },
}));

function Broadband() {
  const classes = useStyles();

  return (
    <div>
      {/* --------------------------------------- */}
      {/* Hero */}
      {/* --------------------------------------- */}
      <div className="Hero">
        <Grid container spacing={0} className={classes.grid}>
          <Grid item xs={12} sm={12} md={7}>
            <div className="HeroSloganPP">
              <h1 className="HeroTitle">Business Broadband</h1>
              <p className="HeroSubtitle">
                Fast <b>|</b> Superfast <b>|</b> Ultrafast
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <div className="HeroImagePP">
              <img
                src={BroadbandHero}
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
          We have partnered with the UK's leading award-winning ISP. This gives
          us the best connectivity at very competitive prices. Plus full service
          provisioning and a comprehensive range of fault diagnostic tools, all
          available within our portal.
        </p>
        <p className="descriptionText">
          Our expertise and experience helps select the best option for your
          broadband needs. We manage the installation and monitor the
          performance so that you can be sure you are getting the best from
          your connection.
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
              featureTitle="Unlimited Data Allowance"
              featureDescription="All of our broadband connections provide you with unlimited data allowance."
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Free Static IP Address"
              featureDescription="Access your computer and files from anywhere in the world."
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="UK Support"
              featureDescription="No scripts, just friendly experts when you need us."
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Lifetime Price Guarantee"
              featureDescription="At the end of your contract, we won't increase your price."
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Phone Line Rental"
              featureDescription="When you need it, combine broadband with line rental in one great value package."
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="We’ll Never Slow You Down"
              featureDescription="You’ll always get the fastest speed available, any time of day."
              LargeGrid = {4}
            />
            </Grid>
        </div>
      </div>

      {/* --------------------------------------- */}
      {/* Column Features */}
      {/* --------------------------------------- */}

      <div className="ContentTitle">Broadband Speeds</div>
      <div className="ColumnServices">
        <p className="HeroSubtitle">
          Unlimited Data Allowance <b>|</b> Free Static IP Address <b>| </b>
           Award Winning ISP
        </p>
      </div>

      <div className="ColumnFeatures">
        <Grid
          container
          spacing={0}
          className="outerGridColumn"
          align="center"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <div className="Column">
              <div className="columnTitle">
                <h1 className="columnTitleText">Fast</h1>
              </div>
              <div className="columnImage">
                <img
                  src={Speed1}
                  alt="tick"
                  className="Speedo"
                  draggable="false"
                />
              </div>
              <div className="columnFeatureTitle">
                <p>ADSL</p>
              </div>
              <div className="UpDownContainer">
                <div className="upDown">
                  <div className="mbps">10 MBPS</div>
                  <div className="blabla">*Average Download</div>
                </div>

                <div className="upDown">
                  <div className="mbps">1 MBPS</div>
                  <div className="blabla">*Average Upload</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="Column">
              <div className="columnTitle">
                <h1 className="columnTitleText">Superfast</h1>
              </div>
              <div className="columnImage">
                <img
                  src={Speed2}
                  alt="tick"
                  className="Speedo"
                  draggable="false"
                />
              </div>
              <div className="columnFeatureTitle">
                <p>FTTC & FTTP</p>
              </div>
              <div className="UpDownContainer">
                <div className="upDown">
                  <div className="mbps">35 MBPS</div>
                  <div className="blabla">*Average Download</div>
                </div>

                <div className="upDown">
                  <div className="mbps">17 MBPS</div>
                  <div className="blabla">*Average Upload</div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="Column">
              <div className="columnTitle">
                <h1 className="columnTitleText">Ultrafast</h1>
              </div>
              <div className="columnImage">
                <img
                  src={Speed3}
                  alt="tick"
                  className="Speedo"
                  draggable="false"
                />
              </div>
              <div className="columnFeatureTitle">
                <p>FTTP & G.FAST</p>
              </div>
              <div className="UpDownContainer">
                <div className="upDown">
                  <div className="mbps">300 MBPS</div>
                  <div className="blabla">*Average Download</div>
                </div>

                <div className="upDown">
                  <div className="mbps">50 MBPS</div>
                  <div className="blabla">*Average Upload</div>
                </div>
              </div>

            </div>
          </Grid>
        </Grid>
      </div>


      {/* --------------------------------------- */}
      {/* FAQ */}
      {/* --------------------------------------- */}
      <div className="FAQ">
        <div className="FAQTitle">
          <h1 className="FAQText">FAQ</h1>
        </div>

        <FAQItem
          Question="What is the best broadband for me?"
          Answer="   Generally speaking, the best broadband is the fastest you can get.
          Standard ADSl is available everywhere, FTTC is available in most
          areas, whilst FTTP is only available in limited locations (at the
          moment)."
        />
        <FAQItem
          Question="What are the different types of broadband?"
          Answer=
          {
<           div>
              <li>
                Fast: Known as ADSL - typically with speeds of 10MB Download / 1MB
                Upload
              </li>
              <li>
                Superfast: known as FTTC, VDSL - typically with speeds of 37MB Download / 17MB Upload{" "}
              </li>
              <li>
                Ultrafast: Known as FTTP & G.Fast - typically with speeds of 300MB
                Download / 50MB Upload{" "}
              </li>
              <li>Leased Line - From 100MB - 1,000MB Upload / Download</li>
            </div>
          }
        />
        <FAQItem
          Question="How much should I pay for broadband?"
          Answer=
          {
            <div>
            <p className="faq4text">
                          <p className="faq4text">
              Prices range from £25/month for standard ADSL broadband,
              £40/month for FTTC to £65/month for FTTP.
            </p>
              You need to consider the following factors when selecting your
              broadband:
            </p>
            <ul>
              <li>Do I need a Static IP Address?</li>
              <li>
                What is the contention ratio on the service? (the lower the
                better)
              </li>
              <li>What are the support arrangements?</li>
            </ul>
            <p className="faq4text">
              Usually a business will require most of the above, with
              responsive support arrangements.
            </p>

          </div>
          }
        />
        <FAQItem
          Question="What if I need much faster broadband speeds?"
          Answer={
            <div>
                <p>
                You should consider having your own leased line. This will give
                you from 100MB/100MB to 1000MB/1000MB.
                </p>
                <p>
                A leased line is a direct fibre from your supplier (BT, Virgin or TalkTalk)
                to your premises. Usually you wont have to pay an
                installation cost, but the contract will be for a minimum of 36
                months and cost £275/month.
                </p>
            </div>
          }
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

export default Broadband;

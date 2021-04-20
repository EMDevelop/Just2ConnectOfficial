/** @format */

import "../pagescss/Contact.css";
import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import emailjs from "emailjs-com";

// Icons and Images
import PinkLocation from "../../images/icons/PinkLocation.png";
import PinkPhoneTilt from "../../images/icons/PinkPhoneTilt.png";
import PinkVideoConf from "../../images/icons/PinkVideoConf.png";
import ContactFormIllustration from "../../images/Contact/contactFormIllustration.svg";

// Logo
import TravelTimeWorld from "../../images/Contact/TravelTimeWorld.png";
import Yellowyoyo from "../../images/Contact/Yellowyoyo.svg";
import OliverMyles from "../../images/Contact/OliverMyles.svg";
import DavyAssociates from "../../images/Contact/DavyAssociates.png";
import Greens from "../../images/Contact/Greens.jpg";

//new logos
import Arrow from "../../images/Contact/Arrow.svg";
import AskRupert from "../../images/Contact/AskRupert.png";
import Azuki from "../../images/Contact/Azuki.png";
import BBYO from "../../images/Contact/BBYO.jpg";
import Brash from "../../images/Contact/Brash.png";
import Chamberlain from "../../images/Contact/Chamberlain.svg";
import ChilternDoors from "../../images/Contact/ChilternDoors.png";
import Composites from "../../images/Contact/Composites.jpg";
import Dyslexia from "../../images/Contact/Dyslexia.png";
import EIC from "../../images/Contact/EIC.png";
import Enterprise from "../../images/Contact/Enterprise.png";
import FootClinic from "../../images/Contact/FootClinic.png";
import GoodEgg from "../../images/Contact/GoodEgg.jpg";
import HarpendenGolf from "../../images/Contact/HarpendenGolf.png";
import HJP from "../../images/Contact/HJP.png";
import Hospice from "../../images/Contact/Hospice.png";
import Sabrefish from "../../images/Contact/Sabrefish.png";
import HSD from "../../images/Contact/HSD.png";
import Indigo from "../../images/Contact/Indigo.svg";
import MCA from "../../images/Contact/MCA.jpg";
import NA from "../../images/Contact/NA.png";
import Peony from "../../images/Contact/Peony.png";
import PES from "../../images/Contact/PES.jpg";
import RedBird from "../../images/Contact/RedBird.png";
import TBC from "../../images/Contact/TBC.jpg";
import Vine from "../../images/Contact/Vine.jpg";

function Contact() {
  const [status, setStatus] = useState("Submit");

  //setStatus("Sending...");

  function sendEmail(e) {
    setStatus("Sending...");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7vljfk6",
        "template_iaj6ueg",
        e.target,
        "user_mDTAtWfAVpmZRWrpjPBaB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Thanks for getting in touch, our team will reach out to you");
    setStatus("Sent!");
  }

  return (
    <div>
      {/*----------------------------------------------------------------------- */}
      {/*-------------------------- Hero Banner --------------------------*/}
      {/*----------------------------------------------------------------------- */}

      <div className="ContactHero">
        <h1 className="ContactHeroText">Get in touch with the team</h1>
        <p className="ContactHeroTextSmall">
          No matter your question, our friendly team will help provide you the
          answer
        </p>
      </div>
      {/*----------------------------------------------------------------------- */}
      {/*-------------------------- New Contact us-------------------------- */}
      {/*----------------------------------------------------------------------- */}
      <div className="ContactFormContainer">
        <Grid
          container
          spacing={0}
          className="outerGrid"
          align="center"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={5}>
            <div className="companyContactInfo">
              <div className="contactItem">
                <img
                  src={ContactFormIllustration}
                  alt="Contact Us"
                  className="contactIllustrationIMG"
                />
              </div>

              <div className="contactItem">
                <div className="icon">
                  <img
                    src={PinkLocation}
                    alt="LocationIcon"
                    className="ContactIcon"
                  />
                </div>

                <div className="mainText">
                  <p className="AddressText">Just2Connect Ltd</p>
                  <p className="AddressText">Hertfordshire</p>
                  <p className="AddressText">Berkhamsted</p>
                </div>
              </div>

              <div className="contactItem">
                <div className="icon">
                  <img
                    src={PinkPhoneTilt}
                    alt="PhoneIcon"
                    className="ContactIcon"
                  />
                </div>
                <div className="mainText">
                  <p className="ContactText">01442 573573</p>
                </div>
              </div>

              <div className="contactItem">
                <div className="icon">
                  <img
                    src={PinkVideoConf}
                    alt="EmailIcon"
                    className="ContactIcon1"
                  />
                </div>
                <div className="mainText">
                  <p className="ContactText1">info@just2connect.com</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={0} sm={0} md={1}>
            {/* https://stackoverflow.com/questions/58189940/material-ui-grid-does-not-hide-whe-use-display */}
            <div className="ContactLine"></div>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <p className="emailUsText">Email Us</p>

            <form onSubmit={sendEmail}>
              <div className="formItem">
                <input
                  className="ContactInput"
                  type="text"
                  id="name"
                  required
                  placeholder="Your Name"
                  name="name"
                />
              </div>
              <div className="formItem">
                <input
                  className="ContactInput"
                  type="email"
                  id="email"
                  required
                  placeholder="Your Email"
                  name="email"
                />
              </div>
              <div className="formItem">
                <textarea
                  className="ContactTextInput"
                  id="message"
                  required
                  placeholder="Optional short message"
                  name="message"
                />
              </div>

              <button className="ContactButton" type="submit">
                {status}
              </button>
            </form>
          </Grid>
        </Grid>
      </div>

      {/*----------------------------------------------------------------------- */}
      {/*-------------------------- In Good Company----------------------------------- */}
      {/*----------------------------------------------------------------------- */}

      <div className="GoodCompany">
        <div className="GoodCompanyTitle">
          <h1 className="GoodCompanyText">You're in great company</h1>
        </div>
        <div className="GoodCompanyImages">
          <Grid
            container
            spacing={0}
            className="outerGrid"
            align="center"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={Hospice}
                  alt="Hospice"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={Arrow}
                  alt="Arrow"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={Indigo}
                  alt="Indigo"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={HarpendenGolf}
                  alt="HarpendenGolf"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                <img
                  src={TravelTimeWorld}
                  alt="TravelTime World Logo"
                  className="TravelTimeWorld"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                <img
                  src={Yellowyoyo}
                  alt="Yellowyoyo Logo"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                <img
                  src={OliverMyles}
                  alt="OliverMyles Logo"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                <img
                  src={DavyAssociates}
                  alt="DavyAssociates Logo"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={Sabrefish}
                  alt="Sabrefish Logo"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={AskRupert}
                  alt="AskRupert"
                  className="LogoWithRadius"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={Azuki}
                  alt="Azuki"
                  className="LogoWithRadius"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={BBYO}
                  alt="BBYO"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={Brash}
                  alt="Brash"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={Chamberlain}
                  alt="Chamberlain"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={ChilternDoors}
                  alt="ChilternDoors"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={Composites}
                  alt="Composites"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={Dyslexia}
                  alt="Dyslexia"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={EIC}
                  alt="EIC"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={Enterprise}
                  alt="Enterprise"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={FootClinic}
                  alt="FootClinic"
                  className="LogoWithRadius"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={GoodEgg}
                  alt="GoodEgg"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={Greens}
                  alt="Greens"
                  className="LogoWithRadius"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={HJP}
                  alt="HJP"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={HSD}
                  alt="HSD"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={MCA}
                  alt="MCA"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img src={NA} alt="NA" className="AllLogos" draggable="false" />
              </div>
            </Grid>
            {/* <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={Peony}
                  alt="Peony"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid> */}
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={PES}
                  alt="PES"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={RedBird}
                  alt="RedBird"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={TBC}
                  alt="TBC"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={3} md={2}>
              <div className="logoContainer">
                {" "}
                <img
                  src={Vine}
                  alt="Vine"
                  className="AllLogos"
                  draggable="false"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* Google Maps */}
    </div>
  );
}

export default Contact;

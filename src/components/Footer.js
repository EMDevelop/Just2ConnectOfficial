/** @format */

import React from "react";
import "./Footer.css";

// Icons and Images (Julia's Import - Merge after reviewing the above)

import LinkedinFooter from "../images/Footer/linkedinFooter.svg";
import TwitterFooter from "../images/Footer/twitterFooter.svg";
import EmailFooter from "../images/Footer/emailFooter.svg";
import WavesFooter from "../images/Footer/wavesFooter.svg";

function Footer() {
  return (
    <>
      <img src={WavesFooter} alt="Waves" className="WavesFooterIMG" />
      <div className="footer">
        <div className="footerTop">
          <p className="footerTitle"> © Copyright 2021 Just2Connect</p>
          <a
            href="https://www.linkedin.com/"
            className="footerClickableIcons"
            target="_blank"
          >
            <img src={LinkedinFooter} alt="LinkedIn" className="socialIcon" />{" "}
          </a>
          <a
            href="https://twitter.com/"
            className="footerClickableIcons"
            target="_blank"
          >
            <img src={TwitterFooter} alt="Twitter" className="socialIcon" />{" "}
          </a>
          <a href="/Contact" className="footerClickableIcons" target="_blank">
            <img src={EmailFooter} alt="Email" className="socialIcon" />{" "}
          </a>
          <div>
            <p className="footerLinks">
              {" "}
              <a href="/Privacy" className="footerLinksA">
                Privacy Policy
              </a>
            </p>
            {/* <p className='footerLinks'>|</p> */}
            <p className="footerLinks">
              {" "}
              <a href="/About" className="footerLinksA">
                Company Information
              </a>
            </p>
            {/* <p className='footerLinks'>|</p> */}
            <p className="footerLinks">
              {" "}
              <a href="/Privacy" className="footerLinksA">
                Legal
              </a>
            </p>
          </div>
          <div>
            <p className="footerBottomText">
              Just2Connect Ltd, a company registered in England and Wales with
              company number 07487493, registered office: 52A Western Road,
              Tring, Herts, HP23 4BB
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

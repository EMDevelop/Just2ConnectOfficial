/** @format */

import "../../App.css";
import "../pagescss/About.css";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Grid } from "@material-ui/core";
import Logo from "../../images/Logo.png";

function About() {
  return (
    <>
      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      {/* About Hero */}

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      <div className="AboutHero">
        <h1 className="AboutHeroTitle">About Just2Connect</h1>
        <div className="AboutHeroTextContainer">
          <p className="AboutHeroText">
            Just2Connect have over <b>40 years of experience</b> in providing telecom
            and broadband solutions to businesses. We understand the importance
            of <b>value for money</b> and <b>exceptional customer support</b>.
          </p>
        </div>
        <div className="AboutHeroTextContainer">
          <p className="AboutHeroText">
            We pride ourselves on being an approachable, professional business  
            offering low-cost, <b>flexible and tailored solutions</b> to meet your
            needs
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      {/* Timeline*/}

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      <div className="Timeline">
        <h1 className="TimelineTitle">Our History</h1>
        <div className="TimelineContainer">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(31, 48, 109, 0.8)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(31, 48, 109, 0.4)",
              }}
              iconStyle={{
                background: "#1f306d",
                color: "#fff",
                border: "none",
              }}
            >
              <h3 className="vertical-timeline-element-title">August 2009</h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>Just2Connect is born</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.4)",
              }}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(5px)",
                color: "#3e4a56",
              }}
              iconStyle={{
                background: "#e51a94",
                color: "#e51a94",
                border: "none",
              }}
            >
              <h3 className="vertical-timeline-element-title">May 2016</h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>Just2Connect opens the Berkhamsted Headoffice</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.4)",
              }}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(5px)",
                color: "#3e4a56",
              }}
              iconStyle={{
                background: "#e51a94",
                color: "#e51a94",
                border: "none",
                borderWidth: "0px",
              }}
            >
              <h3 className="vertical-timeline-element-title">June 2016</h3>
              {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
              <p>J2C:</p>
              <ul>
                <li>Joins local prestige networking groups</li>
                <li>Becomes a Hospice of St Grancis Corporate Partner</li>
                <li>
                  {
                    "Becomes member of Berkhamsted & District Chamber of Commerce"
                  }
                </li>
                <li>Joins Berkhamsted BNI</li>
                <li>{"Joins Breakfast Club (Yum!)"}</li>
              </ul>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.4)",
              }}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(5px)",
                color: "#3e4a56",
              }}
              iconStyle={{
                background: "#e51a94",
                color: "#e51a94",
                border: "none",
                borderWidth: "0px",
              }}
            >
              <h3 className="vertical-timeline-element-title">July 2017</h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>J2C features on front page of The Gazette</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.4)",
              }}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(5px)",
                color: "#3e4a56",
              }}
              iconStyle={{
                background: "#e51a94",
                color: "#e51a94",
                border: "none",
                borderWidth: "0px",
              }}
            >
              <h3 className="vertical-timeline-element-title">
                September 2017
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>J2C appoints Goldendoodle ‘Molly' as company mascot</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.4)",
              }}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(5px)",
                color: "#3e4a56",
              }}
              iconStyle={{
                background: "#e51a94",
                color: "#e51a94",
                border: "none",
                borderWidth: "0px",
              }}
            >
              <h3 className="vertical-timeline-element-title">January 2018</h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>J2C joined forces with FNS to provide first line support</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.4)",
              }}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(5px)",
                color: "#3e4a56",
              }}
              iconStyle={{
                background: "#e51a94",
                color: "#e51a94",
                border: "none",
                borderWidth: "0px",
              }}
            >
              <h3 className="vertical-timeline-element-title">July 2019</h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
                J2C mentors team from Hemel School in Dragons Apprentice
                Challenge
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.4)",
              }}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(5px)",
                color: "#3e4a56",
              }}
              iconStyle={{
                background: "#e51a94",
                color: "#e51a94",
                border: "none",
                borderWidth: "0px",
              }}
            >
              <h3 className="vertical-timeline-element-title">July 2020</h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
                J2C helps local businesses adapt to lockdown and home working
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.4)",
              }}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(5px)",
                color: "#3e4a56",
              }}
              iconStyle={{
                background: "#e51a94",
                color: "#e51a94",
                border: "none",
                borderWidth: "0px",
              }}
            >
              <h3 className="vertical-timeline-element-title">January 2021</h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>Goldendoodle Molly appointed as MD (Managing Doggo)</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(31, 48, 109, 0.8)",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(31, 48, 109, 0.4)",
              }}
              iconStyle={{
                background: "#1f306d",
                color: "#fff",
                border: "none",
              }}
            >
              <h3 className="vertical-timeline-element-title">
                The Show Goes On
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>Want to be a part of the journey?</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      {/* OurPeople */}

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      <div className="OurPeopleContainer">
        <div className="ourCEOTitle">
          <h1>Meet Our CEO</h1>
        </div>

        <div className="OurPeople">
          <Grid
            container
            spacing={0}
            align="center"
            justify="center"
            alignItems="center"
            className="peopleGrid"
          >
            <Grid item xs={12} sm={12} md={6}>
              <div className="peopleImageContainer">
                <div className="PeopleImage"></div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div className="PeopleText">
                <div className="personExperienceContainer">
                  <div className="experienceDate">
                    <p>CEO</p>
                  </div>
                  <div className="experienceCompany">
                    <p>Terry Martin, aka Tel</p>
                  </div>
                  <div className="experience">
                    <p>
                      Terry Martin graduated from Bradford Univeristy and
                      started his business carreer at Hewlett Packard. He then
                      moved to Apple UK in the sales team, rising to Sales
                      Director. He subsequently became a sales director of
                      Samsung in 1997 before moving to Ingram Micro as
                      Commercial Sales Director, responsible for sales of over
                      £500 million. He joined Scoot in 1999 as Sales Director,
                      becoming MD in 2001. In 2006, he was appointed to the
                      Baard of Coms plc, which was listed on the London Stock
                      Exchange AIM market in 2006 with a vision to use the
                      internet to carry and deliver voice telephone calls as an
                      alternative to traditional telephony.
                    </p>
                    <p>
                      Terry founded Just2Connect in 2009, offering new and
                      innovative telephony and broadband solutions to businesses
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* Managing Doggo - meet our MD */}

      <div className="OurPeopleContainer2">
        <div className="ourCEOTitle">
          <h1>Meet Our MD</h1>
        </div>

        <div className="OurPeople">
          <Grid
            container
            spacing={0}
            align="center"
            justify="center"
            alignItems="center"
            className="peopleGrid"
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="peopleHiddenContainer1">
                <div className="PeopleImage"></div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <div className="PeopleText">
                <div className="personExperienceContainer">
                  <div className="experienceDate">
                    <p>Top Dog</p>
                  </div>
                  <div className="experienceCompany">
                    <p>Molly, The Goldendoodle</p>
                  </div>
                  <div className="experience">
                    <p>
                      Did you know that having a dog in the office can boost
                      office morale and promotes workplace productivity? Also, a
                      recent study has proved that people who have dogs in the
                      office are happier and less stressed as the day goes on
                      than those who are dog-less. Just a few reasons why we
                      love having Molly around to keep our staff relaxed and
                      happy. She also loves hugs!
                    </p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <div className="peopleHiddenContainer2">
                <div className="PeopleImage"></div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default About;

/** @format */

import "../../App.css";
import "../pagescss/About.css";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} 
from "react-vertical-timeline-component";
import CEO from "../../images/Contact/Terry.jpg";
import MD from "../../images/Contact/Molly.jpg";
import "react-vertical-timeline-component/style.min.css";
import { Grid } from "@material-ui/core";

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
            of value for money and exceptional customer support.
          </p>
        </div>
        <div className="AboutHeroTextContainer">
          <p className="AboutHeroText">
            We pride ourselves on being an approachable, professional business  
            offering <b> low-cost, flexible and tailored solutions</b> to meet your
            needs.
          </p>
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
            <Grid item xs={12} sm={12} md={4}>
              <div className="peopleImageContainer">
                <div className="PeopleImage">
                <img
                src={CEO}
                alt="TelephoneSystems"
                className="CEOImage"
                draggable="false"
              />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <div className="PeopleText">
                <div className="personExperienceContainer">
                  <div className="experienceDate">
                    <p>CEO</p>
                  </div>
                  <div className="experienceCompany">
                    <p>Terry Martin</p>
                  </div>
                  <div className="experience">
                    <p>
                      Terry Martin graduated from Bradford Univeristy and
                      started his business carreer at Hewlett Packard. He then
                      moved to Apple UK in the sales team, rising to Sales
                      Director. He subsequently became a Sales Director of
                      Samsung in 1997 before moving to Ingram Micro as
                      the Commercial Sales Director, responsible for sales of over
                      £500 million. He joined Scoot in 1999 as a Sales Director,
                      becoming Managing Director in 2001. In 2006, he was appointed to the
                      Board of Coms plc, which was listed on the London Stock
                      Exchange AIM market in 2006 with a vision to use the
                      internet to carry and deliver voice telephone calls as an
                      alternative to traditional telephony.
                    </p>
                    <p>
                      Terry founded Just2Connect in 2009, offering new and
                      innovative telephony and broadband solutions to businesses.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
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
              <h3 className="vertical-timeline-element-title">
              2009
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Just2Connect is founded - offering new and innovative telephony solutions to businesses.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2011
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Just2Connect enters the broadband space to significantly improve clients experience.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2012
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Just2Connect becomes a reseller for Timico's Voice platform - Synergy.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2014
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Just2Connect employs an in-house marketing consultant, Richard Quilter.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2016
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Just2Connect relocates from Park Royal, London and opens its Head Office in Berkhamsted, Herts.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2016
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Just2Connect joins the local BNI chapter to Network locally.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2016
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Just2Connect joins the Hospice of St Francis Corporate Partner Programme.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2017
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Just2Connect expands to provide Telephone Systems and Broadband to businesses in Tring, Hemel Hempstead and Aylesbury.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2017
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Berkhamsted & District Chamber of Commerce are formed and Just2Connect becomes a member.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2017
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Just2Connect makes headline frontpage news in The Gazette for supplying superfast broadband to business Industrial Estate in Berkhamsted.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2018
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Just2Connect joins forces with FNS IT to provide first line support to our customers.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2018
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Just2Connect expands to provide Telephone Systems and Broadband to businesses in Watford, Luton and Harpenden.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2019
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Just2Connect mentors a team from JFK School, Hemel Hempstead in Dragons Apprentice Challenge.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2020
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Just2Connect helps local businesses adapt to lockdown and home working during the pandemic.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2021
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Just2Connect expands to provide Telephone Systems and Broadband to businesses in Harrow and St. Albans.
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
              }}
            >
              <h3 className="vertical-timeline-element-title">
              2021
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p>
              Goldendoodle Molly appointed as MD (Managing Doggo).
              </p>
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
              Want to be a part of the journey?
              </h3>
              {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
              <p> Give us a call on 01442 573030.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
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
                <div className="PeopleImage">
                <img
                src={MD}
                alt="TelephoneSystems"
                className="CEOImage"
                draggable="false"
              />
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <div className="PeopleText">
                <div className="personExperienceContainer">
                  <div className="experienceDate">
                    <p>MD</p>
                  </div>
                  <div className="experienceCompany">
                    <p>Molly, Managing Doggo</p>
                  </div>
                  <div className="experience">
                    <p>
                      Did you know that having a dog in the office can boost
                      office morale and promotes workplace productivity? Also, a
                      recent study has proven that people who have dogs in the
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
                <div className="PeopleImage">
                                  <img
                src={MD}
                alt="TelephoneSystems"
                className="CEOImage"
                draggable="false"
              />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>


    </>
  );
}

export default About;

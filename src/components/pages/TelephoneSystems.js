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
import HeroImage from "../../images/Home/grandstream.webp";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
    height: "100%",
    alignContent: "center",
    alignItems: "alignItems",
  },
}));

function TelephoneSystems() {
  const classes = useStyles();

  return (
    <div>
      {/* --------------------------------------- */}
      {/* Hero */}
      {/* --------------------------------------- */}
      <div className='Hero'>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className='HeroSloganPP'>
              <h1 className='HeroTitle'>Telephone Systems</h1>
              <p className='HeroSubtitle'>
                VoIP <b>|</b> Hosted PBX <b>|</b> Cloud Telephony
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className='HeroImagePP'>
              <img
                src={HeroImage}
                alt='Business Phone System Just2Connect'
                className='Hero_Stock_Image'
                draggable='false'
              />
            </div>
          </Grid>
        </Grid>
      </div>

      {/*----------------------------------------------------------------------- */}
      {/*-------------------------- Page Descripton --------------------------*/}
      {/*----------------------------------------------------------------------- */}

      <div className='descriptionSection'>
        <div className='nutshellImage'>
          <img
            src={Peanut}
            alt='Nutshell'
            className='nutshellIMG'
            draggable='false'
          />
        </div>
        <h1 className='nutshell'>In a nutshell...</h1>
        <p className='descriptionText'>
          Cloud telephone systems have an array of benefits for businesses of
          all sizes. Moving a traditional telephone system to the cloud is a
          cost effective alternative for any business, and maintenance expenses
          will be a thing of the past.
        </p>
      </div>

      {/* --------------------------------------- */}
      {/* Features */}
      {/* --------------------------------------- */}

      <div className='ContentContainer'>
        <div className='ContentTitle'>Features</div>
        <div className='BenefitsContainer'>
          <Grid
            container
            spacing={3}
            className='outerGrid'
            align='center'
            justify='center'
            alignItems='center'
          >
            <FeatureItem
              featureTitle='Reliability'
              featureDescription="Reliability is a key part of any service, that's why we built our network with critical failover points across multiple data centres."
              LargeGrid={3}
            />
            <FeatureItem
              featureTitle='Feature Rich'
              featureDescription='We include all value added features with our Hosted PBX service. This gives you everything you need.'
              LargeGrid={3}
            />
            <FeatureItem
              featureTitle='Latest Handsets'
              featureDescription='We supply the latest Grandstream, Polycom, Gigaset, Yealink and Cisco handsets - fully configured and ready to use.'
              LargeGrid={3}
            />
            <FeatureItem
              featureTitle='Customisable'
              featureDescription='All services are configured through our portal. Whether via us, or yourself, there is multilevel access so we are always in full control.'
              LargeGrid={3}
            />
            <FeatureItem
              featureTitle='Online Provisioning'
              featureDescription='Having the ability to provision a service via a user portal is not only more efficient, but also reduces the chance of human error.'
              LargeGrid={3}
            />
            <FeatureItem
              featureTitle='Desktop App'
              featureDescription='Otherwise known as a softphone, use your laptop, tablet or mobile as your office extension.'
              LargeGrid={3}
            />
            <FeatureItem
              featureTitle='Call Recording'
              featureDescription='You have ability to record all incoming and/or outgoing calls, on any extensions.'
              LargeGrid={3}
            />
          </Grid>
        </div>
      </div>

      {/* --------------------------------------- */}
      {/* FAQ */}
      {/* --------------------------------------- */}
      <div className='FAQ'>
        <div className='FAQTitle'>
          <h1 className='FAQText'>FAQ</h1>
        </div>

        <FAQItem
          Question='What is VoIP | Hosted PBX | Cloud Telephony?'
          Answer='They are all different names which essentially mean the same thing.
            It’s a technology that lets you make and receive calls over the
            internet instead of using traditional phone lines.'
        />

        <FAQItem
          Question='Who is this type of telephony suitable for?'
          Answer='Whether your business is mobile, home, or office-based, a cloud-based VoIP system offers a robust, cost-effective solution to your telephony needs. It’s also quick to install, giving you flexibility whether you are setting up or moving office, enjoying rapid growth, or need to take on seasonal staff.'
        />
        <FAQItem
          Question='Why should I consider it for my business?'
          Answer={
            <div>
              <p className='faq4text'>
                The two most obvious reasons to move to VoIP are functionality
                and cost. Calls made over the internet are significantly cheaper
                than calls using traditional phone lines. You also don’t need to
                pay traditional line rental and because it is internet-based,
                there aren’t any hardware maintenance or upgrade charges.
              </p>
              <p className='faq4text'>Other benefits:</p>
              <li>
                Technology is quick and easy to install, configure and maintain
              </li>
              <li>
                Flexible, so you can add new users by just adding a new handset
              </li>
              <li>
                If you're on the move, keep your current telephone number
                wherever you relocate
              </li>
              <li>
                All the features of an enterprise-class phone system at a
                fraction of the cost of traditional phone lines
              </li>
              <li>
                Helping remote workers operate seamlessly within the company
              </li>
            </div>
          }
        />
        <FAQItem
          Question='What if I already have a phone system?'
          Answer='If your current system doesn’t provide the features or flexibility you need, suffers reliability issues or if you are moving office and need to review your systems, you could benefit from a cheaper, flexible VoIP phone system - give us a call on 01442 573030.'
        />
        <FAQItem
          Question='Will switching to a new system mean I lose calls for any length of time?'
          Answer='No, we will organise the switch so that all new phones are in place on the day your numbers ‘port’ onto our system. In that way, the second your number ports, your old phones will stop ringing and your new phones will start.'
        />
        <FAQItem
          Question='Will switching mean a lot of work for my organisation?'
          Answer='No, we will manage the whole process on your behalf. We will ask you the occasional question, but that would be the extent of your involvement.'
        />
        <FAQItem
          Question='Will we have to buy new phones?'
          Answer='It is likely that your existing phones may not be suitable for VoIP telephony. There is a great choice of handsets to select from. You can buy them up front, or we can include them in your monthly subscription.'
        />
        <FAQItem
          Question='Can I include all of my call costs in my monthly subscription?'
          Answer='We have a number of different packages to suit the differing needs of our clients, one of which includes all local, national and mobile numbers.'
        />
      </div>

      {/* --------------------------------------- */}
      {/* Contact Us */}
      {/* --------------------------------------- */}

      <div className='ContactUs'>
        <ContactUs />
      </div>
    </div>
  );
}

export default TelephoneSystems;

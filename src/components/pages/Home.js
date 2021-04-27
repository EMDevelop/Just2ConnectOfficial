/** @format */

//Imports
import "../../App.css";
import React from "react";
import "../pagescss/Home.css";
import ContactUs from "../ContactUs.js";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import ScrollAnimation from "react-animate-on-scroll";

// Icons and Images
import FiveStars from "../../images/icons/FiveStars.svg";
import PinkRouter from "../../images/icons/PinkRouter.png";
import PinkDeskPhone from "../../images/icons/PinkDeskPhone.png";
import PinkSim from "../../images/icons/PinkSim.png";
import PinkVideoConf from "../../images/icons/PinkVideoConf.png";
import Quote66 from "../../images/icons/66a.svg";
import Quote99 from "../../images/icons/99a.svg";
import HeroImage from "../../images/Home/hero.svg";
import WelcomeIllustration1 from "../../images/Home/welcomeIllustration1.svg";
import WelcomeIllustration2 from "../../images/Home/welcomeIllustration2.svg";
import WhyContract from "../../images/Home/whyContract.svg";
import WhyLocation from "../../images/Home/whyLocation.svg";
import WhyPrices from "../../images/Home/whyPrices.svg";
import WhySupport from "../../images/Home/whySupport.svg";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
    height: "100%",
    alignContent: "center",
    alignItems: "alignItems",
  },
}));

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
  { width: 1400, itemsToShow: 3 },
];

function Home() {
  const classes = useStyles();

  return (
    <>
      <div className="MainBanner-container">
        <Grid container spacing={0} className={classes.grid}>

          
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <div className="HeroImage">

                    <img
                      src={HeroImage}
                      alt="Business Phone System Just2Connect"
                      className="Hero_Stock_Image"
                      draggable="false"
                    />

                </div>
              </Grid>

           
                <Grid item xs={12} sm={12} md={7} lg={7}>

                <div className="titlewrapper">

                    <ScrollAnimation
                      animateIn="slideInRight"
                      duration={0.4}
                      animateOnce={true}
                    >
                      <h1 className="HeroCompanySlogan">
                        STAY CONNECTED TO YOUR CUSTOMERS
                      </h1>
                    </ScrollAnimation>

                    
                    <div className="HeroSlogan">
                      <ScrollAnimation
                        animateIn="slideInRight"
                        duration={0.5}
                        animateOnce={true}
                      >
                        <h1 className="Slogan">
                          Business Telephone Systems & Broadband
                        </h1>
                      </ScrollAnimation>

              

                      <ScrollAnimation
                        animateIn="slideInRight"
                        duration={0.6}
                        delay={1400}
                        animateOnce={true}
                      >
                        <h1 className="SloganDescription">
                          We are your local provider in Herts, Beds and Bucks. Whether
                          you need cloud-based telephony, a new number or
                          business-strength broadband, we will provide the right
                          solution for your business, at a price you can afford - all
                          with exceptional service.
                        </h1>
                      </ScrollAnimation>

              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      {/* Our Services */}

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      <div className="OurServices-container">
        <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
          <h1 className="OurServicesTitle">Our Services</h1>
        </ScrollAnimation>

        <Grid
          container
          spacing={0}
          className="outerGrid"
          align="center"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <ScrollAnimation animateIn="slideInUp" duration={0.6} delay={300} animateOnce={true}>
              <div className="ServicesContainerOuter">
                <a className="servicesIcon" href="/TelephoneSystems"> 
                  <img
                    src={PinkDeskPhone}
                    alt="Best Telephone Systems In Hertfordshire"
                    className="ServicesIMG"
                    href="/TelephoneSystems"
                  />
                </a>
                <div className="ServicesTitle">
                  <h1 className="outServicesHeader">Telephone Systems</h1>
                </div>
                <div className="ServicesDescription">
                  <h2 className="ourServicesDescription">
                    Mobile, office or home based, you can <b>connect</b> with
                    your Customers wherever you are
                  </h2>
                </div>
                <a className="learnMoreButton" href="/TelephoneSystems">
                  <p className="learnMoreText">Learn More</p>
                </a>
              </div>
            </ScrollAnimation>
          </Grid>

          {/* Broadband */}

          <Grid item xs={12} sm={12} md={6} lg={3}>
            <ScrollAnimation animateIn="slideInUp" duration={0.6} delay={350} animateOnce={true}>
              <div className="ServicesContainerOuter">
              <a className="servicesIcon" href="/Broadband"> 
                  <img
                    src={PinkRouter}
                    alt="Best Business Mobile Sim Card In Hertfordshire"
                    className="ServicesIMG"
                  />
                </a>
                <div className="ServicesTitle">
                  <h1 className="outServicesHeader">Business Broadband</h1>
                </div>
                <div className="ServicesDescription">
                  <h2 className="ourServicesDescription">
                    We provide fast, superfast and <b>ultrafast</b> broadband
                    for your business
                  </h2>
                </div>
                <a className="learnMoreButton" href="/Broadband">
                  <p className="learnMoreText">Learn More</p>
                </a>
              </div>
            </ScrollAnimation>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={3}>
            <ScrollAnimation animateIn="slideInUp" duration={0.6} delay={400} animateOnce={true}>
              <div className="ServicesContainerOuter">
              <a className="servicesIcon" href="/VideoConferencing"> 
                  <img
                    src={PinkVideoConf}
                    alt="Best Video Conferencing In Hertfordshire"
                    className="ServicesIMG"
                  />
                </a>

                <div className="ServicesTitle">
                  <h1 className="outServicesHeader">Video Conferencing</h1>
                </div>
                <div className="ServicesDescription">
                  <h2 className="ourServicesDescription">
                    Video, voice and content sharing - a must for{" "}
                    <b>remote working</b>
                  </h2>
                </div>
                <a className="learnMoreButton" href="/VideoConferencing">
                  <p className="learnMoreText">Learn More</p>
                </a>
              </div>
            </ScrollAnimation>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={3}>
            <ScrollAnimation animateIn="slideInUp" duration={0.6} delay={450} animateOnce={true}>
              <div className="ServicesContainerOuter">
              <a className="servicesIcon" href="/MobileSIM"> 
                  <img
                    src={PinkSim}
                    alt="Best Business Mobile Sim Card In Hertfordshire"
                    className="ServicesIMG"
                  />
                </a>

                <div className="ServicesTitle">
                  <h1 className="outServicesHeader">Mobile SIM Cards</h1>
                </div>

                <div className="ServicesDescription">
                  <h2 className="ourServicesDescription">
                    <b>Unlimited</b> calls, texts and data packages on a 30 day
                    contract
                  </h2>
                </div>
                <a className="learnMoreButton" href="/MobileSIM">
                  <p className="learnMoreText">Learn More</p>
                </a>
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </div>

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      {/* Welcome To Just2Connect */}

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      {/* <div className="AboutContainer">
        <Grid
          container
          spacing={0}
          align="center"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={8} lg={8}>
            <div className="aboutTextConainer">
              <ScrollAnimation animateIn="slideInLeft" duration={0.6} delay={0} animateOnce={true}>
                <h2 className="aboutHeading1">Welcome to Just2Connect</h2>
                <h2 className="aboutHeading2">
                  Business Telephone Systems & Broadband in Hertfordshire,
                  Bedfordshire & Buckinghamshire
                </h2>

                <p className="aboutParagraph">
                  Low-cost, flexible and tailored solutions to meet your
                  business requirements.
                </p>
              </ScrollAnimation>
            </div>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <div className="AboutUsImages">
              <ScrollAnimation
                animateIn="slideInRight"
                duration={0.6}
                delay={0}
                animateOnce={true}
              >
                <img
                  src={WelcomeIllustration1}
                  alt="Best Business Mobile Sim Card In Hertfordshire"
                  className="AboutUsIMGOne"
                />
              </ScrollAnimation>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={0} className={classes.grid}>
          <Grid item xs={12} md={4} lg={4}>
            <div className="AboutUsImages">
              <ScrollAnimation animateIn="slideInLeft" duration={0.6} delay={0} animateOnce={true}>
                <img
                  src={WelcomeIllustration2}
                  alt="Best Business Mobile Sim Card In Hertfordshire"
                  className="AboutUsIMGTwo"
                />
              </ScrollAnimation>
            </div>
          </Grid>

          <Grid item xs={12} md={8} lg={8}>
            <ScrollAnimation animateIn="slideInRight" duration={0.6} delay={0} animateOnce={true}>
              <div className="aboutTextConainer">
                <p className="aboutParagraph">
                  Our professional, friendly, solution-focussed team provide a
                  first-class local service ensuring our customer needs are at
                  the forefront of everything else.
                </p>
                <p className="aboutParagraph">
                  We offer a range of telephone products and services with
                  particular emphasis on working from multiple locations, whilst
                  still being part of the 'office' phone system. This means that
                  wherever you are, or whatever device is available (desk phone,
                  computer, tablet or mobile phone), your will always stay
                  connected to your customers.
                </p>
                <p className="aboutParagraph">
                  We provide a number of broadband options, speeds and
                  pricepoints to meet all of your needs.
                </p>
                <p className="aboutParagraph">
                  <a href="/Contact" className="ContactBoldLink">
                    Contact us
                  </a>
                  to find out more, we love to chat all things telephony and
                  broadband.
                </p>
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </div> */}

      <div className="transparentSection"></div>

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      {/* Why Just2Connect? */}

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      <div className="whyJ2C-container">
        <ScrollAnimation animateIn="fadeIn" duration={1}>
          <h1 className="WhyJ2CTitle"> Why Just2Connect?</h1>
        </ScrollAnimation>

        <Grid
          container
          spacing={0}
          className="outerGrid"
          align="center"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <ScrollAnimation animateIn="fadeIn" duration={1} delay={100} animateOnce={true}>
              <div className="benefitContainer">
                <div className="illustrationContainer">
                  <img
                    src={WhySupport}
                    alt="Berkhamsted Telephones"
                    className="whyJ2CIllustrations"
                  />
                </div>
                <div className="benefitTitleContainer">
                  <h1 className="BenefitTitle">Unlimited Support</h1>
                </div>
                <div className="benefitDescriptionContainer">
                  <p className="BenefitDescription">
                    Service and site visits are included. Gone are those
                    frustrating support calls or shocking call-out charges.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>

          <Grid item xs={12} md={6}>
            <ScrollAnimation animateIn="fadeIn" duration={1} delay={200} animateOnce={true}>
              <div className="benefitContainer">
                <div className="illustrationContainer">
                  <img
                    src={WhyPrices}
                    alt="Berkhamsted Telephones"
                    className="whyJ2CIllustrations"
                  />
                </div>

                <div className="benefitTitleContainer">
                  <h1 className="BenefitTitle">Competitive Pricing</h1>
                </div>

                <div className="benefitDescriptionContainer">
                  <p className="BenefitDescription">
                    We promise an affordable and reliable soluiton with
                    absolutely no hidden costs.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>

          <Grid item xs={12} md={6}>
            <ScrollAnimation animateIn="fadeIn" duration={1} delay={300} animateOnce={true}>
              <div className="benefitContainer">
                <div className="illustrationContainer">
                  <img
                    src={WhyLocation}
                    alt="Berkhamsted Telephones"
                    className="whyJ2CIllustrations"
                  />
                </div>
                <div className="benefitTitleContainer">
                  <h1 className="BenefitTitle">Friendly & Local</h1>
                </div>
                <div className="benefitDescriptionContainer">
                  <p className="BenefitDescription">
                    Our friendly team provide a first-class local service. Don't
                    just take our word for it, check out our customer reviews below.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>

          <Grid item xs={12} md={6}>
            <ScrollAnimation animateIn="fadeIn" duration={1} delay={400} animateOnce={true}>
              <div className="benefitContainer">
                <div className="illustrationContainer">
                  <img
                    src={WhyContract}
                    alt="Berkhamsted Telephones"
                    className="whyJ2CIllustrations"
                  />
                </div>
                <div className="benefitTitleContainer">
                  <h1 className="BenefitTitle">Short-term Contracts</h1>
                </div>
                <div className="benefitDescriptionContainer">
                  <p className="BenefitDescription">
                    We believe when you choose us you'll never want to leave,
                    which is why we are confident offering most services on a 30
                    day contract.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </div>

      <div className="transparentSection"></div>

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      {/* trusted by */}

      {/* ---------------------------------------------------------------------------------------------------------------------------- */}

      <div className="TrustedBy-container">
        <h1 className="trustedByTitle">Trusted By</h1>

        <Carousel
          breakPoints={breakPoints}
          className="carousel"
          focusOnSelect={true}
        >


          <div className="testimonialContainer">
            <div className="StarConainer">
              <img
                src={FiveStars}
                alt="5 Star Review of Just 2 Connect"
                className="FiveStar"
              />
            </div>

            <div className="QuotationContainer">
              <div className="leftQuote">
                <img src={Quote66} alt="QuotationIcon" className="QuoteIcon" />
              </div>
              <p className="Quote">
                It was the <b>best thing we ever did!</b> Terry and his team
                offer a first-class service - highly recommend them
              </p>
              <div className="rightQuote">
                <img src={Quote99} alt="QuotationIcon" className="QuoteIcon" />
              </div>
            </div>

            <div className="attributionContainer">
              <div className="Name">- Jackie Steadman, Founder</div>
              <div className="Company">TravelTimeWorld</div>
            </div>
          </div>

          <div className="testimonialContainer">
            <div className="StarConainer">
              <img
                src={FiveStars}
                alt="5 Star Review of Just 2 Connect"
                className="FiveStar"
              />
            </div>

            <div className="QuotationContainer">
              <div className="leftQuote">
                <img src={Quote66} alt="QuotationIcon" className="QuoteIcon" />
              </div>
              <p className="Quote">
                Terry Martin is <b>the epitome of great service</b> who goes out
                of his way to make sure everything is first rate. Use him. You
                will not be dissapointed
              </p>
              <div className="rightQuote">
                <img src={Quote99} alt="QuotationIcon" className="QuoteIcon" />
              </div>
            </div>
            <div className="attributionContainer">
              <div className="Name">- Bryan Wright, Director</div>
              <div className="Company">Yellowyoyo</div>
            </div>
          </div>

          <div className="testimonialContainer">
            <div className="StarConainer">
              <img
                src={FiveStars}
                alt="5 Star Review of Just 2 Connect"
                className="FiveStar"
              />
            </div>

            <div className="QuotationContainer">
              <div className="leftQuote">
                <img src={Quote66} alt="QuotationIcon" className="QuoteIcon" />
              </div>
              <p className="Quote">
                They are a great company to work with, they know us and our set
                up personally - I really{" "}
                <b>could not be happier with the service</b>
              </p>
              <div className="rightQuote">
                <img src={Quote99} alt="QuotationIcon" className="QuoteIcon" />
              </div>
            </div>
            <div className="attributionContainer">
              <div className="Name">- Melanie Langley, Managing Director</div>
              <div className="Company">Oliver Myles</div>
            </div>
          </div>

          <div className="testimonialContainer">
            <div className="StarConainer">
              <img
                src={FiveStars}
                alt="5 Star Review of Just 2 Connect"
                className="FiveStar"
              />
            </div>

            <div className="QuotationContainer">
              <div className="leftQuote">
                <img src={Quote66} alt="QuotationIcon" className="QuoteIcon" />
              </div>
              <p className="Quote">
                Amazing and excellent are just not enough to describe the level
                of service received from this company - and{" "}
                <b>fantastic value</b>
              </p>
              <div className="rightQuote">
                <img src={Quote99} alt="QuotationIcon" className="QuoteIcon" />
              </div>
            </div>
            <div className="attributionContainer">
              <div className="Name">- Chris Davy, Owner</div>
              <div className="Company">Davy Associates</div>
            </div>
          </div>

          <div className="testimonialContainer">
            <div className="StarConainer">
              <img
                src={FiveStars}
                alt="5 Star Review of Just 2 Connect"
                className="FiveStar"
              />
            </div>

            <div className="QuotationContainer">
              <div className="leftQuote">
                <img src={Quote66} alt="QuotationIcon" className="QuoteIcon" />
              </div>
              <p className="Quote">
                <b>Reliable, responsive and helpful</b> for my business needs. I
                would highly reccomend them to anyone
              </p>
              <div className="rightQuote">
                <img src={Quote99} alt="QuotationIcon" className="QuoteIcon" />
              </div>
            </div>
            <div className="attributionContainer">
              <div className="Name">- David Green, Owner</div>
              <div className="Company">Greens Of Berkhamsted</div>
            </div>
          </div>

          <div className="testimonialContainer">
            <div className="StarConainer">
              <img
                src={FiveStars}
                alt="5 Star Review of Just 2 Connect"
                className="FiveStar"
              />
            </div>

            <div className="QuotationContainer">
              <div className="leftQuote">
                <img src={Quote66} alt="QuotationIcon" className="QuoteIcon" />
              </div>

              <p className="Quote">
                Very helpful and a <b>pleasure to deal with</b>
              </p>

              <div className="rightQuote">
                <img src={Quote99} alt="QuotationIcon" className="QuoteIcon" />
              </div>
            </div>

            <div className="attributionContainer">
              <div className="Name">- Jamie Rankin, CEO</div>
              <div className="Company">Micklefield Hall</div>
            </div>
          </div>

        </Carousel>
      </div>

      <div className="HomeContactUs">
        <ContactUs />
      </div>
    </>
  );
}

export default Home;

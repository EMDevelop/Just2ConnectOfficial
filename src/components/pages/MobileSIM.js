// Imports
import React from 'react'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import'../pagescss/ProductPages.css';

// Components
import ContactUs from "../ContactUs.js";
import FeatureItem from "../FeatureItem.js";
import FAQItem from "../FAQItem.js";

// Icons and Images 
import Peanut from '../../images/ProductPage/nutshellIcon.svg'
import MobileSIMHero from '../../images/ProductPage/mobileSimHero.svg'


const useStyles = makeStyles((theme)=>({
    grid: {
        width: '100%',
        margin: '0px',
        height: '100%',
        alignContent: 'center',
        alignItems: 'alignItems'
    }
  }));
  

function MobileSIM() {

const classes = useStyles();

    return (
        <div>
            {/* --------------------------------------- */}
            {/* Hero */}
            {/* --------------------------------------- */}
            <div className="Hero">

                        <Grid
                        container spacing={3}
                        className={classes.grid}
                        
                        >
                            <Grid item xs={12} sm={12} md= {7}>
                                <div className="HeroSloganPP">
                                            <h1 className="HeroTitle">
                                                 Business Mobile SIM & eSIM
                                                </h1>                                                       
                                            <p className='HeroSubtitleSIM'>
                                            30 Day Contracts  <b>|</b>  Unlimited Calls <b>|</b> Unlimited Texts <b>|</b> Unlimited Data
                                            </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md= {5}>
                                        <div className = 'HeroImagePP'>
                                            <img src={MobileSIMHero} alt="TelephoneSystems" className='Hero_Stock_ImagePP' draggable="false"/>               
                                        </div>
                            </Grid>
                        </Grid>
            </div>

            {/*----------------------------------------------------------------------- */}
            {/*-------------------------- Page Descripton --------------------------*/}
            {/*----------------------------------------------------------------------- */}

        <div className="descriptionSection">
            <div className='nutshellImage'>
                <img src={Peanut} alt="Nutshell" className='nutshellIMG' draggable="false"/>
            </div>
            <h1 className="nutshell">
                In a nutshell...
            </h1>
                <p className="descriptionText">
                  We provide a range of flexible SIM-only plans on O2 or Vodafone. You don’t have to be tied to a long contract. With our tariffs, 30 days notice is all we need to cancel a SIM.                
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
              featureTitle="30 Day Contract"
              featureDescription="With our tariffs, 30 days notice is all we need to cancel a SIM contract"
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Unlimited Calls/Texts/Data"
              featureDescription="Choose from a range of products including unlimited everything"
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Nationwide Coverage"
              featureDescription="SIMs available for O2 or Vodafone"
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Simple To Provision"
              featureDescription="Place an order you'll be live within 24 hrs - often before"
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Transfer Your Existing Number"
              featureDescription="Transfer your existing mobile number at no cost"
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="2nd eSIM For Your Mobile"
              featureDescription="This gives you a second SIM option (for selected handsets)"
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
          Question="Can I keep my existing Number?"
          Answer="Yes, just request a PAC code from your existing supplier - you can get the code by texting the word 'PAC' to 65075"
        />
        <FAQItem
          Question="Is the contract really only on a 30 day basis?"
          Answer="Yes, all of our SIM's are on a 30 day contract basis"
        />
        <FAQItem
          Question="What is an eSIM?"
          Answer=" An eSIM is a virtual SIM card for selected mobile phones. it provides a second mobile number, allowing you to use one for business and one for personal on the same handset"
        />
        <FAQItem
          Question="Will an eSIM work on all mobile handsets?"
          Answer="Newer iPhones, Google Pixels and Samsung Galaxy handsets support an eSIM. If you want to find out more, give us a call on 01442 573030"
        />
      </div>


            {/* --------------------------------------- */}
            {/* Contact Us */}
            {/* --------------------------------------- */}


            <div className='ContactUs'>
                 <ContactUs/>
             </div>

        </div>
    )
}

export default MobileSIM

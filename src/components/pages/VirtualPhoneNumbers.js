
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
import VirtualPhoneNumbersHero from '../../images/ProductPage/virtualPhoneNumbersHero.svg'


const useStyles = makeStyles((theme)=>({
    grid: {
        width: '100%',
        margin: '0px',
        height: '100%',
        alignContent: 'center',
        alignItems: 'alignItems'
    }
  }));
  

function VirtualPhoneNumbers() {

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
                                                  Virtual Phone Numbers
                                                </h1>                                                       
                                            <p className='HeroSubtitle'>
                                                 Geographic <b>|</b> National <b>|</b> Freephone Numbers
                                            </p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md= {5}>
                                        <div className = 'HeroImagePP'>
                                            <img src={VirtualPhoneNumbersHero} alt="TelephoneSystems" className='Hero_Stock_ImagePP' draggable="false"/>               
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
                 Project the right image for your business by choosing a local, national or freephone number.
                   Calls are diverted automatically to a number of your choice and at a time convenient to you
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
              featureTitle= "Tailored Phone Numbers"
              featureDescription="Select an 01/02/03 or a freephone 0800 number"
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Time Of Day Routing"
              featureDescription="Only receive calls when convenient to you. Out of hours, send them straight to your voicemail"
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Call Recording"
              featureDescription="Optional recording available for all inbound calls"
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Voicemail"
              featureDescription="Customise your business voicemail message and receive messages as an email attachment"
              LargeGrid = {4}
            />
            <FeatureItem
              featureTitle="Fax To Email"
              featureDescription="Use an inbound number for a fax service. Faxes are sent as an email attachment"
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
          Question="Do I need to buy any equipment?"
          Answer="No equipment is necessary. Simply use your existing mobile or office phone to receive calls"
        />
        <FAQItem
          Question="Can I have more than one number?"
          Answer="Yes, you can have as many number as you wish. Choose from an 01, 02, 03 or 0800 number. You can direct all incoming calls to one number or select a different number for each Smart Inbound Number"
        />
        <FAQItem
          Question="What happens if I miss a call?"
          Answer="You can setup calls to re-direct it to another mobile or landline just incase you can't answer, or send them directly to voicemail. Your Smart Inbound Number comes with its own voicemail account, so you can tailor the outgoing message that the caller hears to refelct your business details"
        />
        <FAQItem
          Question="Can I change the number that calls are diverted to, if I am holiday or away from work for the day?"
          Answer="Yes, you can go into the online portal and change the number that calls are diverted to any time you wish. Alternatively, call us and we will do it for you"
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

export default VirtualPhoneNumbers

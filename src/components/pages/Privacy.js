/** @format */

import React from "react";
import "../pagescss/Privacy.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData(
    "To respond to your enquiry raised using our enquiry form on our website",
    "(a) Identity (b) Contact",
    "(a) Necessary for our legitimate interests (for running a business)"
  ),
  createData(
    "To manage our relationship with you which will include:(a) Notifying you about changes to our terms or privacy policy",
    "(a) Identity (b) Contact (c) Profile (d) Marketing and Communications",
    "(a) Performance of a contract with you (b) Necessary to comply with a legal obligation"
  ),
  createData(
    "To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support)",
    "(a) Identity (b) Contact (c) Technical",
    "(a) Necessary for our legitimate interests (for running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise) (b) Necessary to comply with a legal obligation"
  ),
  createData(
    "To make suggestions and recommendations to you about goods or services that may be of interest to you",
    "(a) Identity (b) Contact(c) Technical (d) Usage(e) Profile",
    "Necessary for our legitimate interests (to develop our products/services and grow our business)"
  ),
];

function Privacy() {
  return (
    <>
      <div className="Privacy">
        <div className="PrivacyTitleSection">
          <div className="PrivacyPolicyPop">Just2Connect</div>
          <div className="PrivacyPolicyTitle">Privacy Policy</div>
        </div>

        <div className="PrivacyBody" id="sec-1">
          <div className="PrivacyItem">
            <h1 className="ItemHeader">About us</h1>
            <p>
              We are Just2Connect Ltd, a provider of internet, telephony and
              related services. This privacy notice explains how we use any
              personal information we collect about you when you access the
              Just2Connect website. Our website is operated Just2Connect Limited
              (company registration 06860886 and having its registered office
              at: 52A Western Rd, Tring, Herts HP23 4BB.
            </p>

            <h1 className="ItemHeader">
              What information do we collect about you?
            </h1>
            <p>
              <ul>
                <p>We collect:</p>
                <li>
                  information about you, for example, your name, contact details
                  and the services you are interested in, when you submit an
                  enquiry or register an interest in one of our services as well
                  as any transaction details.
                </li>
                <li>
                  information such as your name and contact details when you
                  voluntarily complete customer surveys published on our website
                  and provide feedback;
                </li>
                <li>
                  information such as your name and contact details when you
                  voluntarily complete customer surveys published on our website
                  and provide feedback;
                </li>
              </ul>
            </p>

            <h1 className="ItemHeader">
              How will we use the information about you?
            </h1>
            <p>
              We collect information about you to enable us to process and
              respond to your enquiry or interest.
            </p>
            <p>
              The information you provide to us when you complete a survey or
              provide feedback will be used to improve the services we provide.
            </p>

            <h1 className="ItemHeader">Cookies</h1>
            <p>
              We use cookies to distinguish between users of our website, to
              collect information about users' online preferences, to provide
              users with a good experience when browsing our website and to
              improve our website. Cookies are small pieces of information sent
              by a web server to a web browser which allow the server to
              uniquely identify the browser on each page.
            </p>
            <p>
              If you are a user of our website and you want to delete any
              cookies already on your computer, please refer to the help and
              support area on your internet browser for instructions on how to
              locate the file or directory that stores cookies. You can block
              cookies by activating the setting on your internet browser that
              allows you to refuse the setting of all or some cookies. Please
              note that if you delete our cookies or disable future cookies, you
              may not be able to access certain areas or features of our
              website.
            </p>
            <p>
              To find out more about cookies, please visit
              www.allaboutcookies.org and www.youronlinechoices.eu.
            </p>

            <h1 className="ItemHeader">Performance cookies</h1>
            <p>
              We use performance cookies which collect anonymous information on
              how people use our website. For example, we use Google Analytics
              cookies to help us to understand how users arrive at our website,
              browse or use our website and highlight areas where we can improve
              such as navigation. The data stored by these cookies never shows
              personal details from which users' individual identities can be
              established.
            </p>

            <h1 className="ItemHeader">Use of web beacons</h1>
            <p>
              Some of our web pages may contain electronic images known as web
              beacons (sometimes known as clear gifs) that allow us to count
              users who have visited these pages. Web beacons collect only
              limited information which includes a cookie number, time and date
              of a page view, and a description of the page on which the web
              beacon resides. We may also carry web beacons placed by third
              party advertisers. These beacons do not carry any personally
              identifiable information and are only used to track the
              effectiveness of a particular campaign.
            </p>

            <h1 className="ItemHeader">Links to other websites</h1>
            <p>
              Our website may contain links to other websites over which we have
              no control. We are not responsible for privacy policies or
              practices of other websites to which users choose to link from our
              website. We encourage users to review the privacy policies of
              those other websites to understand how they collect, use and share
              personal information.
            </p>

            <h1 className="ItemHeader">Call recordings</h1>
            <p>
              All support calls made and received by Just2Connect are recorded
              and may be used to support learning and development of our staff.
              They may also be used when investigating, compliments and
              complaints.
            </p>
            <p>
              Calls will be managed in the same way as all other personal
              information processed by us in line with current legislation.
            </p>

            <h1 className="ItemHeader">How we share information?</h1>
            <p>
              Only Just2Connect staff will have access to your information and
              will not share your data with any other third party. Just2Connect
              will not use or share your information for automated decision
              making, profiling or marketing purposes unless consented too.
            </p>

            <h1 className="ItemHeader">
              How long do we keep your personal data?
            </h1>
            <p>
              We will hold the information you submit to us for 1 year after the
              last contact.
            </p>
            <p>
              The information collected from cookies is kept for as long as is
              reasonably necessary to provide you with a good experience when
              browsing our website.
            </p>

            <h1 className="ItemHeader">
              Legal basis for the processing of your information
            </h1>
            <p>
              We, and you, have a legitimate interest in us providing you with
              the information you ask us for. It is necessary for us to process
              your information in order to do this.
            </p>
            <p>
              We, and users of our services, have a legitimate interest in
              seeking to better understand how we can better improve our
              services. In order to do this it is necessary for us to process
              your information provided when you complete enquires forms,
              customer surveys and feedback questionnaires.
            </p>
            <p>
              When you entered the website you will have been asked to consent
              to the use of cookies.
            </p>

            <h1 className="ItemHeader">Your rights</h1>

            <ul>
              <p>You have a right to:</p>
              <li>access the information we hold about you;</li>
              <li>correct inaccuracies in the information we hold about you</li>
              <li>
                withdraw any consent you have given to the use of your
                information;
              </li>
              <li>
                complain to the relevant supervisory authority in any
                jurisdiction about our use of your information
              </li>
              <li>in some circumstances:</li>
              <li className="list2">erase information we hold about you;</li>
              <li className="list2">
                receive a copy of your personal data in an electronic format and
                require us to provide this information to a third party;
              </li>
              <li className="list2">
                restrict the use of information we hold about you; and
              </li>
              <li className="list2">
                object to the use of information we hold about you.
              </li>
            </ul>
            <p>
              You can exercise these rights by contacting us as detailed below.
            </p>

            <h1 className="ItemHeader">How to contact us</h1>

            <p>Data Protection Officer, 52A Western Road, Tring, HP23 4BB</p>
            <p>Or, info@just2connect.com</p>

            <h1 className="ItemHeader">How to contact us</h1>
            <p>
              You also have the right to raise any concerns about how your
              personal data is being processed by us with the Information
              Commissioners Office (ICO):
            </p>
            <p>https://ico.org.uk/concerns</p>
            <p>0303 123 1113</p>

            <h1 className="ItemHeader">Changes to our privacy notice</h1>
            <p>
              We keep our privacy notice under regular review and we will place
              any updates on this webpage. This privacy notice was last updated
              on 27th November 2020
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Privacy;

import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import VideoConferencing from "./components/pages/VideoConferencing";
import MobileSIM from "./components/pages/MobileSIM";
import VirtualPhoneNumbers from "./components/pages/VirtualPhoneNumbers.js";
import SIPTrunks from "./components/pages/SIPTrunks";
import TelephoneSystems from "./components/pages/TelephoneSystems";
import Broadband from "./components/pages/Broadband";
import Contact from "./components/pages/Contact";
import Privacy from "./components/pages/Privacy";
import Footer from "./components/Footer";
import "pathseg";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING);
    // To Report Page View
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='App'>
      <Router>
        <div className='body-particles'>
          <div id='wrapper'>
            <NavigationBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/VideoConferencing'
                element={<VideoConferencing />}
              />
              <Route path='/MobileSIM' element={<MobileSIM />} />
              <Route
                path='/VirtualPhoneNumbers'
                element={<VirtualPhoneNumbers />}
              />
              <Route path='/SIPTrunks' element={<SIPTrunks />} />
              <Route path='/TelephoneSystems' element={<TelephoneSystems />} />
              <Route path='/Broadband' element={<Broadband />} />
              <Route path='/About' element={<About />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Privacy' element={<Privacy />} />
              <Route path='/company-information' element={<About />} />
              <Route path='/mobile-phones' element={<MobileSIM />} />
              <Route path='/mobile-worker' element={<TelephoneSystems />} />
              <Route path='/home/how-to-help/' element={<Home />} />
              <Route path='/multiple-sites/' element={<TelephoneSystems />} />
              <Route path='/office/' element={<TelephoneSystems />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

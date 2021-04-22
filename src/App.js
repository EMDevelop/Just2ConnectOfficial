import './App.css';
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavigationBar from './components/Navbar';
import Home from './components/pages/Home'
import About from './components/pages/About'
import VideoConferencing from './components/pages/VideoConferencing'
import MobileSIM from './components/pages/MobileSIM'
import VirtualPhoneNumbers from './components/pages/VirtualPhoneNumbers.js'
import SIPTrunks from './components/pages/SIPTrunks'
import TelephoneSystems from './components/pages/TelephoneSystems'
import Broadband from './components/pages/Broadband'
import Contact from './components/pages/Contact'
import Privacy from './components/pages/Privacy'
import Footer from './components/Footer'
import "pathseg";
import ParticlesBackground from "./components/ParticlesBackground.js";
import ReactGA from 'react-ga';


function App() {


  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING);
    // To Report Page View 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  
  return (
      <div className="App">
        <Router>
            <div className="body-particles">
              <div id="wrapper">
                <NavigationBar />
                <Switch>
                  <Route path='/' exact component ={Home}/>
                  <Route path='/VideoConferencing' exact component ={VideoConferencing}/>
                  <Route path='/MobileSIM' exact component ={MobileSIM}/>
                  <Route path='/VirtualPhoneNumbers' exact component ={VirtualPhoneNumbers}/>
                  <Route path='/SIPTrunks' exact component ={SIPTrunks}/>
                  <Route path='/TelephoneSystems' exact component ={TelephoneSystems}/>
                  <Route path='/Broadband' exact component ={Broadband}/>
                  <Route path='/About' exact component ={About}/>
                  <Route path='/Contact' exact component ={Contact}/>
                  <Route path='/Privacy' exact component ={Privacy}/>
                </Switch>
              <Footer/>
              </div>
            </div>
            <div id="particles-background">                
                    <ParticlesBackground/>
            </div>
          
        </Router>  
      </div>
  );
}

export default App;
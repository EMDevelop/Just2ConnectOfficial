import React from "react";
import Particles from "react-particles-js";

function ParticlesBackground()  {

    return (
    <div
        style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
        }}>
         <Particles
        height={window.outerHeight}
        params={{
            "particles": {
                "number": {
                    "value": 150
                },
                "size": {
                    "value": 3,
                    "random": true,

                },
                "color": {
                    "value":"#b1b6bb",
                },

                "shape": {
                "type": "circle",

                "image": {
                    // "src": "https://raw.githubusercontent.com/EMDevelop/images/main/Mobile-Phone-icon.png",
                    "width": 100,
                    "height": 100,
                    },   
                },

                "line_linked": {
                    "enable": true,
                    "distance": 90,
                    "color": "#b1b6bb",
                    "opacity": .6,
                    "width": 1
                },
                "move": {
                "speed": 2,
               }
            },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": false,
                            "mode": "bubble"
                        }
                    }
                }
        }} />
        </div>
        )
    };

 export default  ParticlesBackground; 
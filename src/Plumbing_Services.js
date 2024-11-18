import React from "react";
import "./services.css";
import plumbing from "./assets/plumbing.jpg";
import installation from "./assets/insta.jpg";
import leak from "./assets/leak.jpg";
import drain from "./assets/Drain.jpg";
import pipe from "./assets/pipe.jpg";
import { motion } from "framer-motion";



function Plumbing_Services() {
  return (
    <div className="main1">
      <div className="heading1">PLUMBING SERVICES</div>
      <div className="services1">
        <motion.div className="sub_service1"
        initial={{ opacity: 0, x: -250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}>
          <h1>LEAK DETECTION AND REPAIR</h1>
          <p style={{fontSize:'20px'}}>
            "Expert leak detection and repair services to quickly identify and
            fix leaks, protecting your home from water damage and saving you
            money."
          </p>
        </motion.div>
        <motion.div className="sub_service2"
        initial={{ opacity: 0, x: 250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}>
          <img src={leak} className="service_image1" />
        </motion.div>
      </div>
      <div className="services1">
        <motion.div className="sub_service2"
        initial={{ opacity: 0, x: -250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}>
          <img src={drain} className="service_image1" />
        </motion.div>
        <motion.div className="sub_service1"
        initial={{ opacity: 0, x: 250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}>
          <h1>DRAIN CLEANING AND UNCLOGGING</h1>
          <p style={{fontSize:'20px'}}>
            "Keep your drains flowing smoothly with my expert drain cleaning and
            unclogging services – quick, efficient, and mess-free!"
          </p>
        </motion.div>
      </div>
      <div className="services1">
        <motion.div className="sub_service1"
        initial={{ opacity: 0, x: -250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}>
          <h1>LEAK DETECTION AND REPAIR</h1>
          <p style={{fontSize:'20px'}}>
            "Expert leak detection and repair services to quickly identify and
            fix leaks, protecting your home from water damage and saving you
            money."
          </p>
        </motion.div>
        <motion.div className="sub_service2"
        initial={{ opacity: 0, x: 250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}>
          <img src={pipe} className="service_image1" />
        </motion.div>
      </div>
      <div className="services1">
        <motion.div className="sub_service2"
        initial={{ opacity: 0, x: -250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}>
          <img src={installation} className="service_image1" />
        </motion.div>
        <motion.div className="sub_service1"
        initial={{ opacity: 0, x: 250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}>
          <h1>FIXTURE INSTALLATION</h1>
          <p style={{fontSize:'20px'}}>
            "Installing sinks, faucets, toilets, showers, and other plumbing
            fixtures.Installing water filtration or softening systems to improve
            water quality.Installing new water heaters or repairing existing ones for hot water supply."
          </p>
        </motion.div> 
      </div>
      <div className="footer">
        For More Details, Contact: 9443869381
      </div>
    </div>
  );
}

export default Plumbing_Services;

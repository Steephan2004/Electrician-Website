import React from "react";
import "./services.css";
import plumbing from "./assets/plumbing.jpg";
import installation from "./assets/insta.jpg";
import leak from "./assets/leak.jpg";
import drain from "./assets/Drain.jpg";
import pipe from "./assets/pipe.jpg";
import renovation from "./assets/renovation.jpg";
import commercial from "./assets/commercial.png";
import energyefficient from "./assets/EnergyEfficiency.png";
import safety from "./assets/safety.jpg";
import { motion } from "framer-motion";

function Additional_Services() {
  
  return (
    <div className="main1">
      <div className="heading1">ADDITIONAL SERVICES</div>
      <div className="services1">
        <motion.div
          className="sub_service1"
          initial={{ opacity: 0, x: -250 }} // Initial state of the div
          animate={{ opacity: 1, x: 0 }} // State to animate to
          transition={{ duration: 3 }}
        >
          <h1>RENOVATION AND REMODELLING</h1>
          <p style={{ fontSize: "20px" }}>
            "Transform your space with our renovation and remodeling services,
            blending creativity and craftsmanship to turn your vision into
            reality.Providing electrical and plumbing services for home
            renovations or remodels."
          </p>
        </motion.div>
        <motion.div
          className="sub_service2"
          initial={{ opacity: 0, x: 250 }} // Initial state of the div
          animate={{ opacity: 1, x: 0 }} // State to animate to
          transition={{ duration: 3 }}
        >
          <img src={renovation} className="service_image1" />
        </motion.div>
      </div>
      <div className="services1">
        <motion.div
          className="sub_service2"
          initial={{ opacity: 0, x: -250 }} // Initial state of the div
          animate={{ opacity: 1, x: 0 }} // State to animate to
          transition={{ duration: 3 }}
        >
          <img src={commercial} className="service_image1" />
        </motion.div>
        <motion.div
          className="sub_service1"
          initial={{ opacity: 0, x: 250 }} // Initial state of the div
          animate={{ opacity: 1, x: 0 }} // State to animate to
          transition={{ duration: 3 }}
        >
          <h1>COMMERCIAL SERVICES</h1>
          <p style={{ fontSize: "20px" }}>
            Offering electrical and plumbing solutions for commercial
            properties, including offices, retail spaces, and restaurants.
          </p>
        </motion.div>
      </div>
      <div className="services1">
        <motion.div
          className="sub_service1"
          initial={{ opacity: 0, x: -250 }} // Initial state of the div
          animate={{ opacity: 1, x: 0 }} // State to animate to
          transition={{ duration: 3 }}
        >
          <h1>ENERGY EFFICIENCY UPGRADES</h1>
          <p style={{ fontSize: "20px" }}>
            "Boost your property’s energy performance with our tailored energy
            efficiency upgrades, reducing costs and environmental impact for a
            sustainable future."
          </p>
        </motion.div>
        <motion.div
          className="sub_service2"
          initial={{ opacity: 0, x: 250 }} // Initial state of the div
          animate={{ opacity: 1, x: 0 }} // State to animate to
          transition={{ duration: 3 }}
        >
          <img src={energyefficient} className="service_image1" />
        </motion.div>
      </div>
      <div className="services1">
        <motion.div className="sub_service2"
         initial={{ opacity: 0, x: -250 }} // Initial state of the div
         animate={{ opacity: 1, x: 0 }}    // State to animate to
         transition={{ duration: 3 }}>
          <img src={safety} className="service_image1" />
        </motion.div>
        <motion.div className="sub_service1"
         initial={{ opacity: 0, x: 250 }} // Initial state of the div
         animate={{ opacity: 1, x: 0 }}    // State to animate to
         transition={{ duration: 3 }}>
          <h1>HOME SAFETY INSPECTION</h1>
          <p style={{ fontSize: "20px" }}>
            "Secure your peace of mind with our thorough home safety
            inspections, designed to identify and address potential hazards
            before they become problems."
          </p>
        </motion.div>
      </div>
      <div className="footer">For More Details, Contact: 9443869381</div>
    </div>
  );
}

export default Additional_Services;

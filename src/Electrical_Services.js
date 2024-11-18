import React from "react";
import "./services.css";
import elecrepair from "./assets/elecrepair.jpg";
import rewiring from "./assets/rewiring.jpeg";
import inverter from "./assets/inverter.jpg";
import appliances from "./assets/appliances.jpg";
import { motion } from "framer-motion";


function Electrical_Services() {
  return (
    <div className="main1">
      <div className="heading1">ELECTRICAL SERVICES</div>
      <div className="services1">
        <motion.div className="sub_service1"
        initial={{ opacity: 0, x: -250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}>
          <h1>ELECTRICAL REPAIR</h1>
          <p style={{ fontSize: "20px" }}>
            "From faulty wiring to electrical upgrades, I provide reliable and
            safe electrical repair services to keep your home running smoothly."
          </p>
        </motion.div>
        <motion.div className="sub_service2"
        initial={{ opacity: 0, x: 250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}
        >
          <img src={elecrepair} className="service_image1" />
        </motion.div>
      </div>
      <div className="services1">
        <motion.div className="sub_service2"
        initial={{ opacity: 0, x: -250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}>
          <img src={rewiring} className="service_image1" />
        </motion.div>
        <motion.div className="sub_service1"
        initial={{ opacity: 0, x: 250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}>
          <h1>ELECTRICAL WIRING AND REWIRING</h1>
          <p style={{ fontSize: "20px" }}>
            "Upgrade your electrical system with our professional wiring and
            rewiring services, ensuring safety, efficiency, and compliance with
            the latest standards."
          </p>
        </motion.div>
      </div>
      <div className="services1">
        <motion.div className="sub_service1"
        initial={{ opacity: 0, x: -250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}>
          <h1>INVERTER INSTALLATION AND MAINTENANCE</h1>
          <p style={{ fontSize: "20px" }}>
            "Maximize your power efficiency with our expert inverter
            installation and maintenance services, designed to ensure
            uninterrupted energy supply and optimal performance."
          </p>
        </motion.div>
        <motion.div className="sub_service2"
        initial={{ opacity: 0, x: 250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}>
          <img src={inverter} className="service_image1" />
        </motion.div>
      </div>
      <div className="services1"
      initial={{ opacity: 0, x: -250 }} // Initial state of the div
      animate={{ opacity: 1, x: 0 }} // State to animate to
      transition={{ duration: 2.5 }}>
        <motion.div className="sub_service2">
          <img src={appliances} className="service_image1" />
        </motion.div>
        <motion.div className="sub_service1"
        initial={{ opacity: 0, x: 250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 2.5 }}>
          <h1>ELECTRICAL APPLIANCES INSTALLATION</h1>
          <p style={{ fontSize: "20px" }}>
            "Get your electrical appliances up and running flawlessly with our
            professional installation services, ensuring they perform at their
            best right from the start."
          </p>
        </motion.div>
      </div>
      <div className="footer">For More Details, Contact: 9443869381</div>
    </div>
  );
}

export default Electrical_Services;

import React from "react";
import "./App.css";
import background from "./assets/tools-table.jpg";
import best from "./assets/best.png";
import plumbing from "./assets/plumbing.jpg";
import electrician from "./assets/electrician.jpg";
import elec from "./assets/Elec.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import call from "./assets/call.png";
import email from "./assets/email.png";
import additional from "./assets/additional.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function HomePage() {
  let navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const plumbing_navigate = (e) => {
    e.preventDefault();
    navigate("/PlumbingServices");
  };
  const Electrical_navigate = (e) => {
    e.preventDefault();
    navigate("/ElectricalServices");
  };
  const Additional_navigate = (e) => {
    e.preventDefault();
    navigate("/AdditionalServices");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: "0.9",
        height: "100vh",
      }}
      className="background"
    >
      <div className="nav" id="home">
        <div>
          <ul>
            <a>
              <li>
                <Link to="home" smooth={true} duration={500}>
                  HOME
                </Link>
              </li>
            </a>
            <a>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  ABOUT
                </Link>
              </li>
            </a>
            <a>
              <li>
                <Link to="Services" smooth={true} duration={1000}>
                  SERVICES
                </Link>
              </li>
            </a>
            <a>
              <li>
                <Link to="Contact" smooth={true} duration={1000}>
                  CONTACT
                </Link>
              </li>
            </a>
          </ul>
        </div>
      </div>

      <div className="Title">ELECTRICAL AND PLUMBING SERVICES</div>
      <div
        style={{
          height: "20px",
          width: "100%",
          marginTop: "200px",
          marginBottom: "20px",
        }}
        id="about"
      ></div>
      <div className="About">
        <motion.div
          className="About_page"
          initial={{ opacity: 0, x: -250 }} // Initial state of the div
          animate={{ opacity: 1, x: 0 }} // State to animate to
          transition={{ duration: 2.5 }}
        >
          <p className="para_head">Welcome ,I am Agusteen</p>
          <p className="para">
            "I am a licensed electrician and plumber with above 30 years of
            hands-on experience in providing top-notch residential and
            commercial services. My expertise spans a wide range of electrical
            and plumbing solutions, from complex system installations to routine
            maintenance and emergency repairs. I am dedicated to ensuring every
            job is completed to the highest standards of safety and quality.
            Based in Virudhunagar, I am committed to delivering reliable,
            efficient, and cost-effective services tailored to meet the unique
            needs of my clients."
          </p>
        </motion.div>
        <motion.div
          className="About_best"
          initial={{ opacity: 0, x: 250 }} // Initial state of the div
          animate={{ opacity: 1, x: 0 }} // State to animate to
          transition={{ duration: 1.5 }}
        >
          <img src={best} className="image_best" />
        </motion.div>
      </div>
      <div>
        <h1
          style={{
            textAlign: "center",
            marginTop: "100px",
            fontSize: "45px",
            color: " rgb(20, 20, 141)",
          }}
          id="Services"
        >
          SERVICES
        </h1>
      </div> 
      <div className="services">
        <motion.div className="service_box"
        initial={{ opacity: 0, y: 100 }} // Initial state of the div
        animate={{ opacity: 1, y: 0 }} // State to animate to
        transition={{ duration: 5 }}>
          <img src={electrician} className="service_img " />
          <p className="service_head">ELECTRICAL PROBLEM</p>
          <button className="service_button" onClick={Electrical_navigate}>
            Click For More Details
          </button>
        </motion.div>
        <motion.div className="service_box"
        initial={{ opacity: 0, y: 100 }} // Initial state of the div
        animate={{ opacity: 1, y: 0 }} // State to animate to
        transition={{ duration: 5 }}>
          <img src={plumbing} className="service_img " />
          <p className="service_head">PLUMBING PROBLEMS</p>
          <button className="service_button" onClick={plumbing_navigate}>
            Click For More Details
          </button>
        </motion.div>
        <motion.div className="service_box"
        initial={{ opacity: 0, y: 100 }} // Initial state of the div
        animate={{ opacity: 1, y: 0 }} // State to animate to
        transition={{ duration: 5 }}>
          <img src={additional} className="service_img " />
          <p className="service_head">ADDITIONAL PROBLEMS</p>
          <button
            className="service_button"
            onClick={Additional_navigate}
            title="hii"
          >
            Click For More Details
          </button>
        </motion.div>
        {/* <div className="service_box">
          <img src={electronics} className="service_img " />
        </div>
        <div className="service_box">
          <img src={plumbing} className="service_img " />
        </div>
        <div className="service_box">
          <img src={plumbing} className="service_img " />
        </div> */}
      </div>
      <div className="Expectation">
        <motion.div className="Expectation-image"
        initial={{ opacity: 0, x:-250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 3 }}>
          <img src={elec} className="Expectation-image1" />
        </motion.div>
        <motion.div className="Expectation-about"
        initial={{ opacity: 0, x: 250 }} // Initial state of the div
        animate={{ opacity: 1, x: 0 }} // State to animate to
        transition={{ duration: 1.5 }}>
          <p className="Expectation-about-p">What You Can Expect</p>
          <p className="Expectation-about-p1">
            <b>Honest Communication </b>- Clear and honest communication is
            fundamental to my service. I'm committed to keeping you informed at
            every stage, whether it's updating you on progress or addressing
            concerns. Trust in my transparency and dedication to ensure you're
            always informed and involved in my partnership
          </p>
          <p className="Expectation-about-p1">
            <b>Fair Pricing </b>- I prioritize budget-friendly solutions by
            offering fair and competitive pricing without any hidden fees or
            surprises. My transparent pricing structures ensure peace of mind,
            guaranteeing the best value for your investment in electrical
            services.
          </p>
          <p className="Expectation-about-p1">
            <b>Expertise </b>- Expertise is paramount in electrical work. I am
            experienced and certified electrician stay updated on industry
            standards to provide top-quality service. Trust us to efficiently
            handle any electrical issue, delivering safe and reliable solutions
            every time.
          </p>
        </motion.div>
      </div>
      <h1 style={{ textAlign: "center" }} className="head-slider">
        What Our customers say to us{" "}
      </h1>
      <div className="slider-main">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slider-page">
              <div style={{ padding: 40 }}>
                <p>
                  "I had the pleasure of hiring you for some electrical work in
                  my home, and I couldn't be happier with the results! You are
                  professional, efficient, and extremely knowledgeable. They
                  kept me informed throughout the process and provided fair
                  pricing. I highly recommend their services to anyone in need
                  of an electrician."
                </p>
              </div>
            </div>
            <div className="slider-page">
              <div style={{ padding: 40 }}>
                <p>
                  "I recently had you to fix some electrical issues at my place,
                  and I was thoroughly impressed. You are punctual, courteous,
                  and did an excellent job. Their expertise was evident, and
                  they made sure to explain everything in a way that I could
                  understand. I'll definitely be calling them again for any
                  future electrical needs!"
                </p>
              </div>
            </div>
            <div className="slider-page">
              <div style={{ padding: 40 }}>
                <p>
                  "I can't thank him enough for the outstanding service they
                  provided. From start to finish, He demonstrated
                  professionalism and skill in tackling the electrical problems
                  in my home. Their transparent pricing and honest communication
                  were greatly appreciated. I wouldn't hesitate to recommend him
                  to anyone looking for a reliable electrician."
                </p>
              </div>
            </div>
            <div className="slider-page">
              <div style={{ padding: 40 }}>
                <p>
                  "I had a great experience working with you on a recent
                  electrical project. They were prompt, thorough, and went above
                  and beyond to ensure everything was done to perfection. You
                  provided valuable insights and recommendations, and I felt
                  confident in their abilities throughout the process. I'll
                  definitely be reaching out to you for any future electrical
                  work."
                </p>
              </div>
            </div>
            <div className="slider-page">
              <div style={{ padding: 40 }}>
                <p>
                  "I hired you to install some new lighting fixtures in my home,
                  and I couldn't be happier with the results. You are friendly,
                  professional, and completed the job in a timely manner. Their
                  attention to detail and expertise were evident every step of
                  the way. I highly recommend you for anyone seeking a skilled
                  and reliable electrician."
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="contact" id="Contact">
        <div className="contact_ C_two">
          Make Your Project our next Obsession.
        </div>
        <div className="contact_ C_one">
          <div>
            <p className="contact_one">
              <span style={{ fontSize: "50px" }}>Let's Talk</span>
              <br /> We can't wait to talk about your ideas, goals, needs and
              dreams. Let's set up a call.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={call} className="contact_logo" />
            </div>
            <div
              // style={{
              //   display: "flex",
              //   alignItems: "center",
              //   fontSize: "18px",
              //   justifyContent: "center",
              //   marginLeft: "10px",
              // }}
              className="phone_email"
            >
              9443869381
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={email} className="contact_logo" />
            </div>
            <div
              // style={{
              //   display: "flex",
              //   alignItems: "center",
              //   fontSize: "18px",
              //   justifyContent: "center",
              //   marginLeft: "10px",
              // }}
              className="phone_email"
            >
              Steephan383@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

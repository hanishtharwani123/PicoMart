import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer" data-aos="fade-up">
        <div className="foot_logo" data-aos="fade-up">
          <h1 className="logos">PicoMart</h1>
          <p className="tag">Shop Smart at Pico Mart, Where Products Shine</p>
        </div>
        <div className="catego" data-aos="fade-up">
          <h1 className="categor">Category</h1>
          <ul className="list">
            <li className="li">All</li>
            <li className="li">Mobile</li>
            <li className="li">Laptop</li>
            <li className="li">Headphone</li>
            <li className="li">Watch</li>
            <li className="li">Television</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

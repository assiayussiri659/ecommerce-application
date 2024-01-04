import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";
import "./Footer.scss";
const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                Deploy memory-intensive, complex Machine Learning models 
                via our AI Cloud infrastructure. Text us about your task
                s and we'll help to select an optimal solution.
                Free egress traffic.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                    Vinayak Nagar chaklal Mohammed Naini Prayagraj 211008
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                    Phone:0471 272 0261
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: store@jsdev.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphone</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
                </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
                </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    JSDEVSTORE 2023 CREATED BY AYUSH. PREMIUM E-COMMERCE SOLUTIONS.
                </div>
                <img src={Payment} />
            </div>
        </div>
    </footer>
    );
};

export default Footer;

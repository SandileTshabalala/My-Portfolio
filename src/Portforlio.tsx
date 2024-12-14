import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './index.css'
import images from "./constant/images.js";

import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FcBusinessContact } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaAndroid, FaCss3, FaHtml5, FaJava, FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa";

function Portforlio() {

    return (
        <div className="portfolio-container">
            <div className="hero-section">
                <img src={images.BGI} alt="Background" className="hero-background" />
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to My Digital Space 👋</h1>
                    <h2 className="hero-name">I'm Sandile Joseph Tshabalala</h2>
                    <p className="hero-description">Transforming Ideas into Seamless Digital Experiences</p>
                    <p className="hero-subtitle">Full Stack Developer specializing in React, Mobile, and Backend Development</p>
                    <Link to="/projects" className="cta-button">Explore My Work</Link>
                </div>
            </div>

            <div className="skills-section">
                <h2 className="section-title">My Tech Stack</h2>
                <div className="skills-grid">
                    <div className="skill-card">
                        <div className="skill-icon"><FaReact className="icon react" /></div>
                        <h3>Frontend Development</h3>
                        <p>Building responsive and interactive web applications with React</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">
                            <FaReact className="icon react-native" />
                            <FaJava className="icon java" />
                            <FaAndroid className="icon android" />
                        </div>
                        <h3>Mobile App Development</h3>
                        <p>Creating cross-platform mobile apps with React Native and native Android development with Java</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">
                            <FaPython className="icon python" />
                            <FaNodeJs className="icon node" />
                        </div>
                        <h3>Backend Development</h3>
                        <p>Creating robust server-side solutions with Python and Node.js</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">
                            <img src={images.FB} alt="Firebase" className="icon database" />
                            <img src={images.SQL} alt="MySQL" className="icon database" />
                        </div>
                        <h3>Database Management</h3>
                        <p>Working with both SQL and NoSQL databases including MySQL and Firebase</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">
                            <FaHtml5 className="icon html" />
                            <FaCss3 className="icon css" />
                        </div>
                        <h3>Core Web Technologies</h3>
                        <p>Crafting clean and semantic HTML/CSS structures</p>
                    </div>
                </div>
            </div>

            <div className="contact-section">
                <h2 className="section-title">Let's Connect</h2>
                <div className="contacts-container">
                    <div className="contact-card">
                        <div className="profile-image">
                            <img src={images.pic} alt="Sandile" className="profile-pic" />
                        </div>
                        <h3>Sandile Tshabalala</h3>
                        <p className="role">Full Stack Developer</p>
                    </div>

                    <div className="contact-card">
                        <h3>Contact Details</h3>
                        <div className="contact-item">
                            <MdEmail className="contact-icon" />
                            <a href="mailto:sandilesaar5@gmail.com">sandilesaar5@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <FcBusinessContact className="contact-icon" />
                            <a href="tel:+27638785052">063-878-5052</a>
                        </div>
                    </div>

                    <div className="contact-card">
                        <h3>Social Media</h3>
                        <div className="contact-item">
                            <BsInstagram className="contact-icon instagram" />
                            <a href="https://www.instagram.com/imanobodie/" target="_blank" rel="noopener noreferrer">
                                @imanobodie
                            </a>
                        </div>
                        <div className="contact-item">
                            <BsWhatsapp className="contact-icon whatsapp" />
                            <a href="https://wa.me/27638785052" target="_blank" rel="noopener noreferrer">
                                WhatsApp Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portforlio;
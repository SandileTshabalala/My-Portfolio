import React from "react";
import { Link} from "react-router-dom";
import '../index.css'
import images from "../constant/images.js";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { SiDotnet, SiJavascript, SiPostgresql} from "react-icons/si";
import { FcBusinessContact } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaAndroid, FaCss3, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact, FaDocker, FaGithub } from "react-icons/fa";

function Portforlio() {

    return (
        <div className="portfolio-container">
            
            {/* Hero Section */}
            <div className="hero-section"> 
                <img src={images.BGI} alt="Background" className="hero-background" />
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to My Digital Space 👋</h1>
                    <h2 className="hero-name">I'm Sandile Joseph Tshabalala</h2>
                    <p className="hero-description">Transforming Ideas into Seamless Digital Experiences</p>
                    
                    {/* Updated About Me / Intro */}
                    <p className="hero-subtitle">
                    I am a Full-Stack Software Developer specializing in C# / ASP.NET Core and ReactJS, 
                    with a strong foundation in Java and experience using Python for automation and AI-driven solutions. 
                    I am currently gaining hands-on experience as a trainee on enterprise projects, building scalable backend systems and automating workflows. 
                    I enjoy creating practical software solutions that solve real-world problems and continuously exploring new technologies.
                    </p>
                    
                    <Link to="/projects" className="cta-button">Explore My Work</Link>
                </div>
            </div>

            {/* My Work Experience */}
            <div className="workexperience-section">
                <h2 className="section-title">Work Experience</h2>
                <div className="workexperience-grid">
                    <div className="workexperience-card">
                        <h3>Software Development Intern (Trainee)</h3>
                        <img src={images.logo} alt="Matateni Technologies" className="company-logo" />
                        <p className="workexperience-date">April 2025 - Present</p>

                        <ul className="workexperience-details">
                            <li>Participating in <strong>C# / ASP.NET Core</strong> projects as part of training, gaining hands-on experience in backend development and enterprise application workflows.</li>
                            <li>Completed a <strong>Timesheet Management System</strong> project: implemented role-based authentication, backend APIs, and ReactJS frontend integration.</li>
                            <li>Independently developed a <strong>Python automation tool</strong> for generating consolidated Excel reports, significantly reducing manual work for the team.</li>
                            <li>Gaining practical exposure to full-stack development and modern development tools such as <strong>Docker, PostgreSQL, and ReactJS</strong>.</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* certificates */}
            <div className="certificates-section">
                <h2 className="section-title">Certificates & Achievements</h2>
                <div className="certificates-grid">
                    <div className="certificate-card">
                        <img src={images.compTIA} alt="CompTIA Security+" className="certificate-image" />
                        <p>CompTIA Security+ CE Certification</p>
                        <a href="/certificates/CompTIA Security+ ce certificate.pdf" target="_blank" rel="noopener noreferrer" className="certificate-link">
                            View / Download
                        </a>
                    </div>

                    <div className="certificate-card">      
                        <img src={images.IBM} alt="IBM CC0101EN" className="certificate-image" />
                        <p>IBM CC0101EN Certificate - IBM SkillsBuild</p>
                        <a href="/certificates/IBMCC0101EN.pdf" target="_blank" rel="noopener noreferrer" className="certificate-link">
                            View / Download
                        </a>
                    </div>

                    <div className="certificate-card">                    
                        <img src={images.IBM} alt="IBM CC0201EN" className="certificate-image" />
                        <p>IBM CC0201EN Certificate - IBM SkillsBuild</p>
                        <a href="/certificates/IBMCC0201EN.pdf" target="_blank" rel="noopener noreferrer" className="certificate-link">
                            View / Download
                        </a>
                    </div>
                    <div className="certificate-card">                     
                        <img src={images.hackathon} alt="Hackathon" className="certificate-image" />
                        <p>Hackathon Winner / Participant</p>
                        <a href="/certificates/hackathon2023.pdf" target="_blank" rel="noopener noreferrer" className="certificate-link">
                            View / Download
                        </a>
                    </div>
                </div>
            </div>


            {/* My Tech Stack or skill section */}
            <div className="skills-section">
                <h2 className="section-title">My Tech Stack</h2>
                <div className="skills-grid">
                    <div className="skill-card">
                        <div className="skill-icon">
                            <div className="icon-wrapper">
                                <FaReact className="icon react" />
                                <span className="icon-name">React</span>
                            </div>
                            <div className="icon-wrapper">
                                <SiJavascript className="icon typescript" />
                                <span className="icon-name">TypeScript</span>
                            </div>
                        </div>
                        <h3>Frontend Development</h3>
                        <p>Building responsive and interactive web applications with React</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">
                            <div className="icon-wrapper">
                                <FaReact className="icon react-native" />
                                <span className="icon-name">React Native</span>
                            </div>
                            <div className="icon-wrapper">
                                <FaJava className="icon text-red-500" />
                                <span className="icon-name">Java</span>
                            </div>
                            <div className="icon-wrapper">
                                <FaAndroid className="icon android" />
                                <span className="icon-name">Android</span>
                            </div>
                        </div>
                        <h3>Mobile App Development</h3>
                        <p>Creating cross-platform mobile apps with React Native and native Android development with Java</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">
                            <div className="icon-wrapper">
                                <FaPython className="icon python" />
                                <span className="icon-name">Python</span>
                            </div>
                            <div className="icon-wrapper">
                                <SiDotnet className="icon dotnet text-purple-600" />
                                <span className="icon-name">ASP.NET</span>
                            </div>
                            <div className="icon-wrapper">
                                <FaNodeJs className="icon node" />
                                <span className="icon-name">Node.js</span>
                            </div>
                        </div>
                        <h3>Backend Development</h3>
                        <p>Creating robust server-side solutions with Python and Node.js</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">
                            <div className="icon-wrapper">
                                <img src={images.FB} alt="Firebase" className="icon database" />
                                <span className="icon-name">Firebase</span>
                            </div>
                            <div className="icon-wrapper">
                                {/* <img src={images.SQL} alt="MySQL" className="icon database" /> */}
                                <SiPostgresql className="icon sql text-blue-500" />
                                <span className="icon-name">PostgreSQL</span>
                            </div>
                        </div>
                        <h3>Database Management</h3>
                        <p>Working with both SQL and NoSQL databases including MySQL and Firebase</p>
                    </div>

                    <div className="skill-card">
                        <div className="skill-icon">
                            <div className="icon-wrapper">
                                <FaHtml5 className="icon html" />
                                <span className="icon-name">HTML 5</span>
                            </div>
                            <div className="icon-wrapper">
                                <FaCss3 className="icon css" />
                                <span className="icon-name">CSS 3</span>
                            </div>
                        </div>
                        <h3>Core Web Technologies</h3>
                        <p>Crafting clean and semantic HTML/CSS structures</p>
                    </div>
                    <div className="skill-card">
                    <div className="skill-icon flex space-x-6 justify-center">
                        <div className="icon-wrapper">
                        <FaDocker className="icon docker" />
                        <span className="icon-name">Docker</span>
                        </div>
                        <div className="icon-wrapper">
                        <FaGithub className="icon github" />
                        <span className="icon-name">Git/GitHub</span>
                        </div>
                    </div>
                    <h3>DevOps & Version Control</h3>
                    <p>Managing code, versioning, and containerized applications with Git, GitHub, and Docker</p>
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
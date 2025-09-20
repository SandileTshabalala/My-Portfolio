import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../projects.css";


interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
}

interface ModalProps {
    imageUrl: string;
    title: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, title, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img src={imageUrl} alt={title} />
                <button className="modal-close" onClick={onClose}>&times;</button>
            </div>
        </div>
    );
};

function Projects() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);
    
    const projects: Project[] = [
        {
            title: "Portfolio Website",
            description: "My personal portfolio website built with React and TypeScript, featuring a modern design and smooth animations.",
            technologies: ["React", "TypeScript", "CSS"],
            imageUrl: "/portforlio-preview.png",
            githubUrl: "https://github.com/SandileTshabalala/My-Portfolio",
        },
        {
            title: "Kiosk Service",
            description: "A full-stack Restuarant Kiosk Self Serving built with orders, product management, and payment integration.",
            technologies: ["React", "flask", "PostgreSQL", "Stripe"],
            imageUrl: "/kiosk-preview.png",
            githubUrl: "https://github.com/SandileTshabalala/restuarant-selfservice",
            liveUrl: ""
        },
        {
            title: "IT Services",
            description: "IT Services Static website built with React and JavaScript, for providing IT services.",
            technologies: ["Reactjs", "Css", "Javascript"],
            imageUrl: "/it-preview.png",
            githubUrl: "https://github.com/SandileTshabalala/IT-Services",
            liveUrl: ""
        },
        {
            title: "Tourist Companion App",
            description: "A comprehensive mobile application to help tourists explore and navigate landmarks in Johannesburg with an interactive and user-friendly interface.",
            technologies: ["React Native", "Flask", "Google Maps API","Tailwind CSS"],
            imageUrl: "/tourist-preview.png",
            githubUrl: "https://github.com/SandileTshabalala/tourist-companion",
            liveUrl: ""
        },
        {
            title: "Ambert Alert Admin",
            description: "Admin side of Ambert Alert System, it allows admin to manage users, manage alerts, and manage reports for missing people in South Africa.",
            technologies: ["React + Vite", "Firebase","Css"],
            imageUrl: "/admin-preview.png",
            githubUrl: "https://github.com/SandileTshabalala/admin",
            liveUrl: ""
        },
        {
            title: "Online Voting Sytem",
            description: "Online Voting Sytem built with user authentication, real-time voting, vote counting, single voting token key, and secure data management, admin management.",
            technologies: ["Java", "Jakarta EE", "MySQL", "Css", "Bootstrap"],
            imageUrl: "/votes-preview.png",
            githubUrl: "https://github.com/SandileTshabalala/Online-Voting-App",
            liveUrl: ""
        },
        {
            title: "Spense Tracker",
            description: "Spense Tracker is a full-stack web application It allows users to manage their expenses, set budgets, and track their financial goals.",
            technologies: ["Java", "Jakarta EE ", "MySQL", "Css"],
            imageUrl: "/expense-preview.png",
            githubUrl: "https://github.com/SandileTshabalala/Expense-Tracker",
            liveUrl: ""
        }
    ];

    return (
        <div className="projects-container">
            <div className="projects-header">
                <button className="back-button" onClick={() => navigate('/')}>
                    <FiArrowLeft /> Back to Home
                </button>
                <h1 className="section-title">My Projects</h1>
                <p className="section-subtitle">Here are some of my recent works</p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image" 
                             onClick={() => setSelectedImage({ url: project.imageUrl, title: project.title })}>
                            <img src={project.imageUrl} alt={project.title} />
                            <div className="project-overlay">
                                <div className="project-links">
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} 
                                           target="_blank" 
                                           rel="noopener noreferrer"
                                           onClick={(e) => e.stopPropagation()}>
                                            <FaGithub /> Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} 
                                           target="_blank" 
                                           rel="noopener noreferrer"
                                           onClick={(e) => e.stopPropagation()}>
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <Modal 
                    imageUrl={selectedImage.url}
                    title={selectedImage.title}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </div>
    );
}

export default Projects;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import images from "../constant/images";
import "../projects.css";
import Modal from "../components/Modal.tsx";


interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string[];
  githubUrl?: string;
  liveUrl?: string;
}

function Projects() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "Automated Reports Tool",
      description:
        "Excel comparison and reporting tool for Matateni Pty Ltd with filtering, export, and a streamlined Streamlit interface.",
      technologies: ["Python", "Pandas", "Openpyxl", "Streamlit", "CSS"],
      imageUrl: [
        images.homepage,
        images.nav,
        images.stats,
        images.filters,
        images.data,
      ],
      githubUrl: "https://github.com/SandileTshabalala/Excel-Comparison-Tool",
      liveUrl: "https://systemtestreports.onrender.com/",
    },
    {
      title: "Kiosk Service",
      description:
        "A full-stack Restaurant Kiosk Self Service built with orders, product management, and payment integration.",
      technologies: ["React","Python", "Flask", "PostgreSQL", "Twilio", "Stripe"],
      imageUrl: [images.kioskhome, images.burgers, images.drinks, images.sides, images.cart, images.stripe, images.order, images.success,],
      githubUrl:
        "https://github.com/SandileTshabalala/restuarant-selfservice",
    },
    {
      title: "AI RAG Demo",
      description:
        "RAG (Retrieval-Augmented Generation) Ask your documents anything with AI-powered search & answers.It retrieves context from uploaded files (.txt, .docx, .pdf) and generates responses using GPT-2.",
      technologies: [
        "Python",
        "Streamlit",
        "Hugging Face",
        "Sentence Transformers",
        "FAISS"
      ],
      imageUrl: [images.rag, images.q, images.answer, images.gen],
      githubUrl: "https://github.com/SandileTshabalala/RAG",
      liveUrl: ""
    },
    {
      title: "Timesheet Management System",
      description:
        "A comprehensive full-stack timesheet management application built with modern technologies to streamline employee time tracking, approval workflows, and reporting..",
      technologies: ["React + Vite", "C#","ASP.NET Core", "PostgreSQL","Docker","Shadcn UI"],
      imageUrl: ["/admin-preview.png"],
      githubUrl: "https://github.com/SandileTshabalala/admin",
    },
    {
      title: "Amber Alert AI System",
      description:
        "Facial recognition-based missing persons system that find detect reported people as missing, with separate mobile apps for police and public users.",
      technologies: ["React Native", "Python","Flask", "Firebase", "Face Recognition"],
      imageUrl: ["/votes-preview.png"],
      githubUrl: "https://github.com/SandileTshabalala/Amber-Alert",
    },
    {
      title: "Tourist Companion AI App",
      description:
        "Mobile application to help tourists explore landmarks in Johannesburg with maps and guides.",
      technologies: ["React Native","Python", "Flask", "Google Maps API", "Tailwind CSS"],
      imageUrl: ["/tourist-preview.png"],
      githubUrl:
        "https://github.com/SandileTshabalala/tourist-companion",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <button className="back-button" onClick={() => navigate("/")}>
          <FiArrowLeft /> Back to Home
        </button>
        <h1 className="section-title">My Projects</h1>
        <p className="section-subtitle">Here are some of my recent works</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div
              className="project-image"
              onClick={() => {
                setSelectedProject(project);
                setCurrentIndex(0);
              }}
            >
              <img src={project.imageUrl[0]} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
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
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal
          imageUrls={selectedProject.imageUrl}
          currentIndex={currentIndex}
          onClose={() => setSelectedProject(null)}
          onPrev={() =>
            setCurrentIndex(
              (prev) =>
                (prev - 1 + selectedProject.imageUrl.length) %
                selectedProject.imageUrl.length
            )
          }
          onNext={() =>
            setCurrentIndex(
              (prev) =>
                (prev + 1) % selectedProject.imageUrl.length
            )
          }
        />
      )}
      <div className="view-more flex justify-center mt-6">
        <a
          href="https://github.com/SandileTshabalala"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition-all duration-300"
        >
          <FaGithub className="text-xl" />
          <span>View More Projects on GitHub</span>
        </a>
      </div>

    </div>
  );
}

export default Projects;

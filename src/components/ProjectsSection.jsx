import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
        {
                id: 1,
                title: "Comfy Store",
                description: "A modern e-commerce store built with React, Tailwind CSS, DaisyUI (Front-end Only).",
                image: "/Comfy.png",
                tags: ["React", "TailwindCSS", "DaisyUI"],
                githubUrl: "https://github.com/FatPat117/Comfy_Store",
                demoUrl: "https://react-vite-comfy-store-v2.netlify.app/",
        },
        {
                id: 2,
                title: "Chat app",
                description:
                        "A real-time chat application built with React,TailwindCSS, DaisyUI, Lucide, Node.js, JWT and Socket.io.",
                image: "/ChatApp.png",
                tags: ["React", "TailwindCSS", "DaisyUI", "LucideReact", "Node.js", "Socket.io"],
                githubUrl: "https://github.com/FatPat117/Chat_App",
                demoUrl: "https://chat-app-hih7.onrender.com/login",
        },
        {
                id: 3,
                title: "Youtube Clone API",
                description:
                        "A feature-rich YouTube clone RESTful API built with Express.js, MongoDB, Mongoose, JWT authentication, and Cloudinary for media storage.",
                image: "/youtubeapi.png",
                tags: ["Express.js", "MongoDB", "Mongoose", "JWT", "Cloudinary"],
                githubUrl: "https://github.com/FatPat117/Youtube_Clone_API",
        },
];

const ProjectsSection = () => {
        return (
                <section id="projects" className="py-24 px-4 relative">
                        <div className="container max-w-5xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                                        Featured <span className="text-primary"> Projects</span>
                                </h2>
                                <p className="text-center text-foreground mb-12 max-w-xl mx-auto">
                                        Here are some of my projects. Each project was carefully crafted to showcase my
                                        skills and expertise
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {projects.map((project, idx) => {
                                                return (
                                                        <div
                                                                key={idx}
                                                                className="group bg-card rounded-xl overflow-hidden shadow-md card-hover cursor-pointer"
                                                        >
                                                                <div className="mt-3 w-full">
                                                                        <h3 className="text-xl text-primary font-bold mb-2">
                                                                                {project.title}
                                                                        </h3>
                                                                </div>
                                                                <div className="px-2 h-20 w-full max-w-2.5xl">
                                                                        <p className="text-foreground text-sm mb-4">
                                                                                {project.description}
                                                                        </p>
                                                                </div>
                                                                <div className="mt-3 h-42 overflow-hidden rounded-lg">
                                                                        <img
                                                                                src={project.image}
                                                                                alt={project.title}
                                                                                className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                                                                        />
                                                                </div>
                                                                <div className=" p-6 h-35 w-full ">
                                                                        <div className="flex flex-wrap gap-x-1 gap-y-3 ">
                                                                                {project.tags.map((tag, idx) => {
                                                                                        return (
                                                                                                <span
                                                                                                        key={idx}
                                                                                                        className="text-xs 
                                                                                                        font-medium bg-secondary border-2 border-primary text-secondary-foreground rounded-full px-3 py-1"
                                                                                                >
                                                                                                        {tag}
                                                                                                </span>
                                                                                        );
                                                                                })}
                                                                        </div>
                                                                </div>

                                                                <div className="flex justify-between items-center p-6">
                                                                        <div className="flex space-x-3">
                                                                                <a
                                                                                        href={project.demoUrl}
                                                                                        target="_blank"
                                                                                        className="text-foreground/80 hover:text-primary hover:underline transition-all duration-300"
                                                                                >
                                                                                        <ExternalLink size={20} />
                                                                                </a>
                                                                                <a
                                                                                        href={project.githubUrl}
                                                                                        target="_blank"
                                                                                        className="text-foreground/80 hover:text-primary hover:underline transition-all duration-300"
                                                                                >
                                                                                        <Github size={20} />
                                                                                </a>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                );
                                        })}
                                </div>

                                <div className="text-center mt-12">
                                        <a
                                                hrft="https://github.com/FatPat117"
                                                target="_blank"
                                                className="cosmic-button w-fit flex items-center justify-center mx-auto gap-2"
                                        >
                                                Check my Github <ArrowRight size={16} />
                                        </a>
                                </div>
                        </div>
                </section>
        );
};

export default ProjectsSection;

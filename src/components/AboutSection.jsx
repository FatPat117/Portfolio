import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutSection = () => {
        return (
                <section id="#about" className="py-24 px-4 relative">
                        <div className="container mx-auto max-w-5xl">
                                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                                        About <span className="text-primary">Me</span>
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                        <div className="space-y-6">
                                                <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

                                                <p className="text-foreground ">
                                                        I am a web developer passionate about building clean,
                                                        responsive, and user-friendly websites. I enjoy learning new
                                                        technologies and turning ideas into functional, visually
                                                        appealing web applications.
                                                </p>

                                                <div className="flex flex-col sm:flex-row gap-4 pt-4  justify-center">
                                                        <a href="#contact" className="cosmic-button">
                                                                Get In Touch
                                                        </a>

                                                        <a
                                                                href="#contact"
                                                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/60 hover:text-foreground transition-colors duration-300"
                                                        >
                                                                Download CV
                                                        </a>
                                                </div>
                                        </div>

                                        <div className="grid grid-cols-1 gap-6">
                                                <div className="gradient-border p-6 card-hover">
                                                        <div className="flex items-start gap-4">
                                                                <div className="p-3 rounded-full bg-primary/10">
                                                                        <Code className="h-6 w-6 text-primary" />
                                                                </div>
                                                                <div className="text-left">
                                                                        <h4 className="font-semibold text-lg">
                                                                                Web Development
                                                                        </h4>
                                                                        <p className="text-foreground">
                                                                                Creating responsive websites and web
                                                                                applications with modern framework
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="gradient-border p-6 card-hover">
                                                        <div className="flex items-start gap-4">
                                                                <div className="p-3 rounded-full bg-primary/10">
                                                                        <User className="h-6 w-6 text-primary" />
                                                                </div>
                                                                <div className="text-left">
                                                                        <h4 className="font-semibold text-lg">
                                                                                UI/UX Design
                                                                        </h4>
                                                                        <p className="text-foreground">
                                                                                Designing intuitive user interfaces and
                                                                                user experiences
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="gradient-border p-6 card-hover">
                                                        <div className="flex items-start gap-4">
                                                                <div className="p-3 rounded-full bg-primary/10">
                                                                        <Briefcase className="h-6 w-6 text-primary" />
                                                                </div>
                                                                <div className="text-left">
                                                                        <h4 className="font-semibold text-lg">
                                                                                Project Management
                                                                        </h4>
                                                                        <p className="text-foreground">
                                                                                Managing projects from start to finish
                                                                                with a focus on efficiency and
                                                                                effectiveness
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
};

export default AboutSection;

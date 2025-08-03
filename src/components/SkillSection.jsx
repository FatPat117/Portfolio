import React, { useState } from "react";

const skills = [
        // Frontend
        { name: "HTML/CSS", icon: "/html-css.jpg", category: "frontend" },
        { name: "JavaScript", icon: "/JavaScript.png", category: "frontend" },
        { name: "React", icon: "/react.jpg", category: "frontend" },
        { name: "TypeScript", icon: "/typescript.png", category: "frontend" },
        { name: "Tailwind CSS", icon: "/tailwind.png", category: "frontend" },
        { name: "Next.js", icon: "/nextjs.png", category: "frontend" },

        // Backend
        { name: "Node.js", icon: "/nodejs.png", category: "backend" },
        { name: "Express", icon: "/express.png", category: "backend" },
        { name: "MongoDB", icon: "/mongodb.png", category: "backend" },
        { name: "GraphQL", icon: "/graphql.png", category: "backend" },

        // Tools
        { name: "Git/GitHub", icon: "/git-github.png", category: "tools" },
        { name: "Docker", icon: "/docker.png", category: "tools" },
        { name: "Figma", icon: "/figma.png", category: "tools" },
        { name: "VS Code", icon: "/vscode.png", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillSection = () => {
        const [selectedCategory, setSelectedCategory] = useState("all");
        const filteredSkills = skills.filter((skill) => {
                if (selectedCategory === "all") return true;
                return skill.category === selectedCategory;
        });

        return (
                <section id="skills" className="py-24 px-4 relative bg-secondary/30">
                        <div className="container mx-auto max-w-5xl">
                                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                                        My <span className="text-primary">Skills</span>
                                </h2>

                                <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
                                        {categories.map((category, idx) => (
                                                <button
                                                        key={idx}
                                                        className={`cursor-pointer capitalize px-5 py-2 font-medium rounded-full transition-colors duration-300 ${
                                                                selectedCategory === category
                                                                        ? "bg-primary text-primary-foreground"
                                                                        : "bg-card text-foreground hover:bg-secondary"
                                                        }`}
                                                        onClick={() => setSelectedCategory(category)}
                                                >
                                                        {category}
                                                </button>
                                        ))}
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {filteredSkills.map((skill, idx) => (
                                                <div
                                                        key={idx}
                                                        className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center"
                                                >
                                                        <div className="text-center mb-4 ">
                                                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                                        </div>
                                                        <div className="flex items-center justify-center w-full">
                                                                <img
                                                                        src={skill.icon}
                                                                        alt={skill.name}
                                                                        className="w-60 h-40 object-contain scale-95 rounded-lg"
                                                                />
                                                        </div>
                                                </div>
                                        ))}
                                </div>
                        </div>
                </section>
        );
};

export default SkillSection;

import React from "react";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillSection from "../components/SkillSection";
export default function Home() {
        return (
                <>
                        <HeroSection />
                        <AboutSection />
                        <SkillSection />
                        <ProjectsSection />
                </>
        );
}

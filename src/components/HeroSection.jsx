import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
        return (
                <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
                        <div className="container max-w-4xl mx-auto text-center z-10">
                                <div className="space-y-2">
                                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                                <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                                                <span className="text-primary opacity-0 animate-fade-in-delay-1">
                                                        {" "}
                                                        Tan
                                                </span>
                                                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                                                        {" "}
                                                        Phat
                                                </span>
                                        </h1>
                                        <span className="text-sm tracking-normal font-medium text-muted-foreground animate-fade-in-delay-3">
                                                {" "}
                                                (NickName: Pitachiti)
                                        </span>
                                </div>

                                <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                                        Aspiring Software Engineer with a strong foundation in full-stack web
                                        development. Passionate about problem solving, quick to learn, and eager to
                                        contribute to a dynamic and impactful product team.
                                </p>

                                <div className="mt-5 opacity-0 animate-fade-in-delay-4">
                                        <a href="#projects" className="cosmic-button">
                                                View My Works
                                        </a>
                                </div>
                        </div>

                        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                                <ArrowDown className=" h-6 w-6 text-primary" />
                        </div>
                </section>
        );
};

export default HeroSection;

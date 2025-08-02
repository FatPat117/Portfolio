import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
const navItems = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
];

export default function Navbar() {
        const [isScroll, setIsScroll] = useState(false);
        const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

        const toggleMobileNav = () => {
                setIsMobileNavOpen(!isMobileNavOpen);
        };

        useEffect(() => {
                const handleScroll = () => {
                        setIsScroll(window.scrollY > 0);
                };
                window.addEventListener("scroll", handleScroll);
                return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        return (
                <nav
                        className={`fixed container w-full z-40 transition-all duration-300 px-20 ${
                                isScroll ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
                        }`}
                >
                        <div className=" flex items-center justify-between">
                                <a href="#hero" className="text-sm font-bold flex items-center text-primary">
                                        <span className="relative z-10">
                                                <span className="text-glow  text-xl text-foreground">Pitachiti</span> -
                                                Portfolio
                                        </span>
                                </a>

                                {/* Desktop nav */}
                                <div className="hidden md:flex space-x-8">
                                        {navItems.map((item, idx) => {
                                                return (
                                                        <a
                                                                href={item.href}
                                                                key={idx}
                                                                className="text-sm text-foreground/80 font-medium flex items-center hover:underline hover:text-primary transition-colors duration-300"
                                                        >
                                                                {item.name}
                                                        </a>
                                                );
                                        })}
                                </div>

                                {/* Mobile nav */}
                                <button
                                        onClick={toggleMobileNav}
                                        className="md:hidden p-2 text-foreground z-50"
                                        aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
                                >
                                        {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                                <div
                                        className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-400 md:hidden ${
                                                isMobileNavOpen
                                                        ? "opacity-100 pointer-events-auto"
                                                        : "opacity-0 pointer-events-none"
                                        }`}
                                >
                                        <div className="flex flex-col space-y-8 text-xl">
                                                {navItems.map((item, idx) => {
                                                        return (
                                                                <a
                                                                        href={item.href}
                                                                        key={idx}
                                                                        className="text-sm text-foreground/80 font-medium flex items-center hover:underline hover:text-primary transition-colors duration-300"
                                                                        onClick={() => setIsMobileNavOpen(false)}
                                                                >
                                                                        {item.name}
                                                                </a>
                                                        );
                                                })}
                                        </div>
                                </div>
                        </div>
                </nav>
        );
}

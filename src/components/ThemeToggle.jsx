import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
        const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") || false);

        const toggleTheme = () => {
                setIsDarkMode(!isDarkMode);
        };

        useEffect(() => {
                document.documentElement.classList.toggle("dark", isDarkMode);
                localStorage.setItem("theme", isDarkMode);

                return () => {
                        localStorage.removeItem("theme");
                };
        }, [isDarkMode]);
        return (
                <button
                        className="cursor-pointer fixed max-sm:hidden top-4 right-5 p-2 rounded transition-colors duration-500 focus:outline-none z-100"
                        onClick={toggleTheme}
                >
                        {isDarkMode ? (
                                <Sun className="h-7 w-7 text-yellow-500" />
                        ) : (
                                <Moon className="h-7 w-7 text-blue-700" />
                        )}
                </button>
        );
}

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
export default function PageLayout() {
        return (
                <div className="container min-h-screen  mx-auto overflow-y-auto bg-background text-color over-flow-x-hidden ">
                        {/* Theme Toggle */}
                        <ThemeToggle />
                        {/* Background Effects */}
                        <StarBackground />
                        {/* Navbar */}
                        <Navbar />
                        {/* Main content */}
                        <main>
                                <Outlet />
                        </main>

                        {/* Footer */}
                </div>
        );
}

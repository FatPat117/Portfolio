import React from "react";
import { Outlet } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
export default function PageLayout() {
        return (
                <div className="container min-h-screen  mx-auto overflow-y-auto bg-background text-color over-flow-x-hidden ">
                        {/* Theme Toggle */}
                        <ThemeToggle />
                        {/* Background Effects */}

                        {/* Navbar */}

                        {/* Main content */}
                        <Outlet />

                        {/* Footer */}
                </div>
        );
}

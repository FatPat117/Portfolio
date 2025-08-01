import React from "react";
import { Outlet } from "react-router-dom";
export default function PageLayout() {
        return (
                <div className="min-h-screen max-w-screen-xl mx-auto overflow-y-auto bg-background text-color over-flow-x-hidden ">
                        {/* Theme Toggle */}

                        {/* Background Effects */}

                        {/* Navbar */}

                        {/* Main content */}
                        <Outlet />

                        {/* Footer */}
                </div>
        );
}

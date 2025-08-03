import React from "react";

const Footer = () => {
        return (
                <footer className="bg-background text-foreground py-8">
                        <div className="container mx-auto">
                                <p className="text-center">
                                        &copy; {new Date().getFullYear()} Nguyen Tan Phat. All rights reserved.
                                </p>
                        </div>
                </footer>
        );
};

export default Footer;

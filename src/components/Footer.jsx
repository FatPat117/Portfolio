import { ArrowUpIcon } from "lucide-react";
import React from "react";

const Footer = () => {
        return (
                <footer className="py-12 px-4  relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
                        <p className="text-center">
                                &copy; {new Date().getFullYear()} Nguyen Tan Phat. All rights reserved.
                        </p>

                        <a href="#hero" className="p-2 rounded-full bg-primary hover:bg-primary/80 transition-colors">
                                <ArrowUpIcon />
                        </a>
                </footer>
        );
};

export default Footer;

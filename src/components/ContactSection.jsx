import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";

const ContactSection = () => {
        return (
                <section id="contact" className="py-24 px-4 relative bg-secondary/30">
                        <div className="container max-w-5xl mx-auto">
                                <h2 className="text-center text-3xl  md:text-4xl font-bold mb-4">
                                        Get In <span className="text-primary"> Touch</span>
                                </h2>
                                <p className="text-center text-foreground mb-12 max-w-xl mx-auto">
                                        Have a project in mind or want to collaborate? Feel free to reach out!
                                </p>
                                <div className="grid grid-cols-1 items-center justify-center  gap-12">
                                        <div className="w-full space-y-8 grid grid-cols-1 md:grid-cols-2 justify-between">
                                                <div>
                                                        <h3 className="text-left text-2xl font-semibold mb-6">
                                                                Contact Information
                                                        </h3>
                                                        <div className="space-y-6 grid grid-cols-1 justify-center text-center">
                                                                <div className="flex items-start space-x-4">
                                                                        <div className="p-3 rounded-full bg-primary/10">
                                                                                <Mail className="h-6 w-6 text-primary" />
                                                                        </div>
                                                                        <div className="text-start">
                                                                                <h4 className="font-medium">Email</h4>
                                                                                <a
                                                                                        href="mailto:ntphat110705@gmail.com"
                                                                                        className="text-foreground hover:text-primary transition-colors"
                                                                                >
                                                                                        Click here to mail me
                                                                                </a>
                                                                        </div>
                                                                </div>
                                                                {/* Phone */}
                                                                <div className="flex items-start space-x-4 ">
                                                                        <div className="p-3 rounded-full bg-primary/10">
                                                                                <Phone className="h-6 w-6 text-primary" />
                                                                        </div>
                                                                        <div className="text-start">
                                                                                <h4 className="font-medium">Phone</h4>
                                                                                <a
                                                                                        href="tel:+84915846339"
                                                                                        className="text-foreground hover:text-primary transition-colors"
                                                                                >
                                                                                        Click here to call me
                                                                                </a>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div>
                                                        <div className="pt-8 md:pt-0">
                                                                <h3 className="text-2xl font-semibold mb-6">
                                                                        Connect with me
                                                                </h3>
                                                                <div className="flex space-x-4 justify-center ">
                                                                        <a
                                                                                href="https://www.facebook.com/ngtanphat1107"
                                                                                target="_blank"
                                                                        >
                                                                                <Facebook className="h-6 w-6 text-primary" />
                                                                        </a>
                                                                        <a
                                                                                href="https://www.linkedin.com/in/nguy%E1%BB%85n-t%E1%BA%A5n-ph%C3%A1t-8718622b6/"
                                                                                target="_blank"
                                                                        >
                                                                                <Linkedin className="h-6 w-6 text-primary" />
                                                                        </a>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                {/* Contact form */}
                                {/* <div className="m-4 bg-card p-8 rounded-lg shadow-xs max-w-2xl ">
                                        <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
                                        <form className="space-y-6">
                                                <label htmlFor="name">Your Name: </label>
                                                <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        requried
                                                        className="max-w-2xl px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                                />
                                        </form>
                                </div> */}
                        </div>
                </section>
        );
};

export default ContactSection;

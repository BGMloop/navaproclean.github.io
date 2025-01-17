import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

const socialLinks = [
    { path: "https://www.youtube.com/@NavaProClean-ss7vf", icon: <AiFillYoutube /> },
    { path: "https://github.com/BwalyaMaele", icon: <AiFillGithub /> },
    { path: "https://www.instagram.com/navacleaningservice/", icon: <AiOutlineInstagram /> },
    { path: "https://www.linkedin.com/in/bwalya-gabriel-maele-610980219", icon: <RiLinkedinFill /> },
];

const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6">
                        <img src={logo} alt="Nava Pro Clean logo" className="h-16" />
                        <p className="mt-4">Copyright © {year} developed by BGMloop. All rights reserved.</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a href={link.path} key={index} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
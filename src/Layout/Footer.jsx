import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#005A7D] to-[#0D0023] text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p className="text-sm text-gray-300">
                            We provide innovative solutions to help businesses grow and succeed. Join us to explore a future of endless possibilities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-300 hover:text-yellow-400">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-300 hover:text-yellow-400">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="text-gray-300 hover:text-yellow-400">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-300 hover:text-yellow-400">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-center gap-2">
                                <LocationOnIcon className="text-yellow-400" />
                                123 Innovation Street, Tech City
                            </li>
                            <li className="flex items-center gap-2">
                                <EmailIcon className="text-yellow-400" />
                                support@example.com
                            </li>
                            <li className="flex items-center gap-2">
                                <PhoneIcon className="text-yellow-400" />
                                +123-456-7890
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-500"
                            >
                                <FacebookIcon />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-400"
                            >
                                <TwitterIcon />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-600"
                            >
                                <LinkedInIcon />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-pink-500"
                            >
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

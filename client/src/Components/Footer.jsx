import React from 'react'
import { Link } from 'react-router-dom';
import linkedInLogo from "../assets/Linkedin-Logo.svg";
import twitterLogo from "../assets/Twitter-Logo.svg";
import instagramLogo from "../assets/Instagram-Logo.svg";

const Footer = () => {
    return (
    <footer className="bg-gray-800 text-white mt-16 p-4 text-center">
        <div className="mb-4">
            <a href="/privacy-policy" className="text-white hover:underline mx-2">Privacy Policy</a>
            <a href="/terms-of-service" className="text-white hover:underline mx-2">Terms of Service</a>
            <a href="/contact" className="text-white hover:underline mx-2">Contact Us</a>
        </div>
        <div>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagramLogo} alt="Instagram" className="inline-block h-6 mx-2"/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src={twitterLogo} alt="Twitter" className="inline-block h-6 mx-2"/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={linkedInLogo} alt="LinkedIn" className="inline-block h-6 mx-2"/>
            </a>
        </div>
        <p className="mt-4">&copy; 2024 ResumeAI. All rights reserved.</p>
    </footer>

    )
}

export default Footer

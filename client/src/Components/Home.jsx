import React from "react";
import Nav from "./Nav";
import linkedInLogo from "../assets/Linkedin-Logo.svg";
import twitterLogo from "../assets/Twitter-Logo.svg";
import instagramLogo from "../assets/Instagram-Logo.svg";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-800 tracking-wider animate-fadeIn">
            Welcome to ResumeAI
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            This is a brief introduction to our application. We hope you find it useful!
          </p>
          <button
            className="bg-green-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-8 transition-all duration-300"
            aria-label="Create Your First AI-Powered Resume"
          >
            Create Your Resume
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Why Choose ResumeAI?</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/path/to/feature1-icon.svg" alt="Feature 1" className="mx-auto mb-4"/>
            <h3 className="text-2xl font-bold text-gray-800">AI-Powered Suggestions</h3>
            <p className="text-gray-600 mt-2">Get personalized resume suggestions using the latest AI technology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/path/to/feature2-icon.svg" alt="Feature 2" className="mx-auto mb-4"/>
            <h3 className="text-2xl font-bold text-gray-800">Easy to Use</h3>
            <p className="text-gray-600 mt-2">Build your resume effortlessly with our user-friendly interface.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/path/to/feature3-icon.svg" alt="Feature 3" className="mx-auto mb-4"/>
            <h3 className="text-2xl font-bold text-gray-800">Professional Templates</h3>
            <p className="text-gray-600 mt-2">Choose from a variety of professionally designed resume templates.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-semibold text-gray-800">What Our Users Say</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">"ResumeAI helped me land my dream job in just two weeks!"</p>
            <p className="text-gray-800 mt-4 font-bold">- Jane Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">"The AI suggestions were spot on. My resume has never looked better!"</p>
            <p className="text-gray-800 mt-4 font-bold">- John Smith</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">"So easy to use and the templates are fantastic!"</p>
            <p className="text-gray-800 mt-4 font-bold">- Emily Johnson</p>
          </div>
        </div>
      </div>

      {/* Footer */}
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
    </>
  );
};

export default Home;

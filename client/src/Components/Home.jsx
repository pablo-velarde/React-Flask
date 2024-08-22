import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Rotator from "./Rotator";

const Home = () => {
  return (
    <div>
      <Nav />
      <Rotator />

      {/* Features Section */}
      <div className="mt-12 text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Why Choose ResumeAI?</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg">
            <img src="../assets/feature1-icon.svg" alt="AI-Powered Suggestions Icon" className="mx-auto mb-4"/>
            <h3 className="text-2xl font-bold text-gray-800">AI-Powered Suggestions</h3>
            <p className="text-gray-600 mt-2">Get personalized resume suggestions using the latest AI technology.</p>
          </div>
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg">
            <img src="../assets/feature2-icon.svg" alt="Easy to Use Icon" className="mx-auto mb-4"/>
            <h3 className="text-2xl font-bold text-gray-800">Easy to Use</h3>
            <p className="text-gray-600 mt-2">Build your resume effortlessly with our user-friendly interface.</p>
          </div>
          <div className="feature-card bg-white p-6 rounded-lg shadow-lg">
            <img src="../assets/feature3-icon.svg" alt="Professional Templates Icon" className="mx-auto mb-4"/>
            <h3 className="text-2xl font-bold text-gray-800">Professional Templates</h3>
            <p className="text-gray-600 mt-2">Choose from a variety of professionally designed resume templates.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-semibold text-gray-800">What Our Users Say</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">"ResumeAI helped me land my dream job in just two weeks!"</p>
            <p className="text-gray-800 mt-4 font-bold">- Jane Doe</p>
          </div>
          <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">"The AI suggestions were spot on. My resume has never looked better!"</p>
            <p className="text-gray-800 mt-4 font-bold">- John Smith</p>
          </div>
          <div className="testimonial-card bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">"So easy to use and the templates are fantastic!"</p>
            <p className="text-gray-800 mt-4 font-bold">- Emily Johnson</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

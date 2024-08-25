import React from "react";
import Nav from "../Components/Nav.jsx";
import Footer from "../Components/Footer.jsx";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
    return (
        <>
            <Nav />
            <div className="h-screen flex justify-center items-center">
                <div className="w-full md:w-1/2 xl:w-1/3 flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-semibold text-purple-600">Start Your Journey Today</h2>
                    <p className="text-base mt-4 text-gray-400 mb-8 mx-16">Begin your path to landing your dream job with us. Our platform is designed to help you succeed.</p>
                    <img src='' alt="Login image" className=" object-cover rounded-lg mb-8"/>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3">
                    <SignIn />
                </div>
            </div>
        </>
    );
}

export default Login

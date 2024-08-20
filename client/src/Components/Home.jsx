import React from "react";
import Nav from "./Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center h-screen bg-gray-200 px-4 py-12">
        <h1 className="text-6xl font-bold text-gray-800 tracking-wider">Home</h1>
      </div>
    </>
  );
};

export default Home;

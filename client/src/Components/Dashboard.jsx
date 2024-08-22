import React from "react";
import Nav from "./Nav";

const Dashboard = () => {
    return (
        <>
            <Nav />
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-6xl font-bold text-gray-800">Dashboard</h1>
            </div>
        </>
    );
}

export default Dashboard

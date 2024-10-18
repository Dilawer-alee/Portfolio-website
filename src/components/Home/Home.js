import React from "react";
import dddd from "../../Images/dddd.png";
import TextChange from "../TextChange";

const Home = () => {
    return (
        <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
            <div className="md:w-2/4 md:pt-10">
                <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
                    {/* Hello, I am Dilawer ali */}
                    <TextChange />
                </h1>
                <p className="text-sm md:text-2xl tracking-tight mt-7">
                    {/* Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod */}
                    MERN Stack Developer with expertise in building responsive web applications using MongoDB, Express, React, and Node.js
                </p>
                <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                    Contact me
                </button>
            </div>
            <div>
                <img className="w-[380px] h-[380px]" src={dddd} alt="Background" />
            </div>
        </div>
    );
};

export default Home;
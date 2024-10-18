import React from "react";
import asdfg from "../../Images/asdfg.avif";

const About = () => {
    return (
        <div id="About" className="relative text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl
        mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
            <div>
                <h2 className="text-2xl md:text-4xl font-bold">About</h2>
                <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                    <img className="md:h-80 mr-20 border-none	" src={asdfg} alt="About"/>

                    <ul>
                        <div className="flex gap-3 py-4">
                          <span className="w-96">
                             <h1 className="text-xl md:text-2xl font-semibold leading-normal"><i className="fa-solid fa-arrow-right -ml-[40px] absolute"></i>Frontend Developer</h1>
                             <p className="text-sm md:text-md leading-tight">
                                Experienced in building responsive web interfaces using modern frameworks and best practices.
                                Passionate about creating interactive and user-friendly applications.
                             </p>
                          </span>
                        </div>
                        <div className="flex gap-3 py-4">
                          <span className="w-96">
                             <h1 className="text-xl md:text-2xl font-semibold leading-normal"><i className="fa-solid fa-arrow-right text-white -ml-[40px] absolute "></i>WordPress Developer</h1>
                             <p className="text-sm md:text-md leading-tight">
                                Skilled in developing custom themes and plugins to enhance website functionality.
                                Committed to delivering scalable and high-performance WordPress solutions.
                             </p>
                          </span>
                        </div>
                        <div className="flex gap-3 py-4">
                          <span className="w-96">
                             <h1 className="text-xl md:text-2xl font-semibold leading-normal"><i className="fa-solid fa-arrow-right -ml-[40px] absolute"></i>Fullstack Developer</h1>
                             <p className="text-sm md:text-md leading-tight">
                                Proficient in both front-end and back-end technologies, with a focus on seamless integration.
                                Dedicated to building end-to-end solutions that meet client needs and business goals.
                             </p>
                          </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;

import React from "react";
import Aurora from "./Aurora";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#050816]">

            {/* Aurora Background */}
            <div className="absolute inset-0">
                <Aurora
                    colorStops={["#151A2E", "#6D5DFB", "#00A3FF"]}
                    amplitude={0.6}
                    blend={0.25}
                    speed={0.4}
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Hero Section */}
            <div className="relative z-10 min-h-screen flex items-center">

                <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

                    <div className="grid lg:grid-cols-2 items-center gap-24">

                        {/* LEFT */}
                        <div>

                            <span className="
              text-cyan-400
              border
              border-cyan-500/30
              px-5
              py-2
              rounded-full
              text-sm
              ">
                                👋 Welcome To My Portfolio
                            </span>

                            <h1 className="
              text-white
              text-6xl
              md:text-8xl
              font-bold
              mt-6
              leading-tight
              drop-shadow-[0_0_30px_rgba(0,163,255,.3)]
              ">
                                Habib Dev.
                            </h1>

                            <h2 className="
              text-cyan-400
              text-2xl
              md:text-4xl
              font-semibold
              mt-5
              min-h-[60px]
              ">

                                <Typewriter
                                    words={[
                                        "Creative Developer",
                                        "Frontend Engineer",
                                        "UI Craftsman",
                                        "Problem Solver",
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                />

                            </h2>

                            <p className="
              text-gray-300
              mt-6
              max-w-[550px]
              leading-8
              ">
                                Building modern web experiences with
                                clean code, smooth interactions and
                                premium user experiences.
                            </p>

                            <div className="flex flex-wrap gap-5 mt-10">

                                <button className="
                px-8
                py-4
                rounded-full
                bg-cyan-500
                text-white
                font-semibold
                hover:scale-105
                duration-300
                shadow-[0_0_35px_rgba(0,163,255,.3)]
                ">
                                    View Projects
                                </button>

                                <button className="
                px-8
                py-4
                rounded-full
                border
                border-white/20
                bg-white/5
                backdrop-blur-xl
                text-white
                hover:bg-white/10
                duration-300
                ">
                                    Download Resume
                                </button>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="flex justify-center items-center relative">

                            {/* outer glow */}
                            <div className="absolute w-[420px] h-[420px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

                            {/* main card */}
                            <div className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[30px] p-6 w-[340px] shadow-2xl">

                                {/* top */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src="/Habib.png"
                                        alt=""
                                        className="w-20 h-20 rounded-full border-2 border-cyan-400 object-cover"
                                    />

                                    <div>
                                        <h3 className="text-white text-xl font-bold">
                                            Habib Dev.
                                        </h3>

                                        <p className="text-cyan-400">
                                            Frontend Engineer
                                        </p>

                                        <div className="flex items-center gap-2 mt-2">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

                                            <span className="text-gray-400 text-sm">
                                                Available for work
                                            </span>

                                        </div>

                                    </div>
                                </div>

                                {/* skills */}
                                <div className="flex flex-wrap gap-2 mt-8">

                                    {[
                                        "React",
                                        "Tailwind",
                                        "GSAP",
                                        "Framer",
                                        "Next JS"
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 rounded-full bg-white/5 border border-cyan-400/20 text-cyan-300 text-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}

                                </div>

                                {/* stats */}
                                <div className="grid grid-cols-2 gap-4 mt-8">

                                    <div className="bg-black/30 p-4 rounded-xl">
                                        <h2 className="text-white text-2xl font-bold">
                                            25+
                                        </h2>

                                        <p className="text-gray-400 text-sm">
                                            Projects
                                        </p>
                                    </div>

                                    <div className="bg-black/30 p-4 rounded-xl">
                                        <h2 className="text-white text-2xl font-bold">
                                            2+
                                        </h2>

                                        <p className="text-gray-400 text-sm">
                                            Years Exp
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>


    );
};

export default Banner;
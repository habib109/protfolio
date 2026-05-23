import React from "react";
import Aurora from "./Aurora";
import { Typewriter } from "react-simple-typewriter";
import { Container } from "../../layouts/Container";

const Banner = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#120F17]">

            <Container>
                {/* Aurora BG */}
                <div className="absolute inset-0">
                    <Aurora
                        colorStops={["#1b2650", "#6D5DFB", "#00A3FF"]}
                        amplitude={1}
                        blend={0.76}
                        speed={0.5}
                    />
                </div>

                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* content */}
                <div className="relative z-10 min-h-screen flex flex-col justify-center gap-2 items-left text-left p-5">


                    <h1 className="text-white text-7xl font-bold">
                        Habib Dev.
                    </h1>

                    <h2 className="text-cyan-400 text-3xl mt-5 font-semibold">

                        <Typewriter
                            words={[
                                "Creative Developer",
                                "Frontend Engineer",
                                "UI Craftsman",
                                "Problem Solver"
                            ]}
                            loop={0}
                            cursor
                        />

                    </h2>

                    <p className="text-gray-300 max-w-xl mt-6">
                        Building modern web experiences with clean code
                        and creative design.
                    </p>

                    <div className="flex gap-4 mt-8">

                        <button className="px-7 py-3 rounded-full bg-cyan-500 text-white">
                            View Projects
                        </button>

                        <button className="px-7 py-3 rounded-full border border-white text-white">
                            Download Resume
                        </button>

                    </div>

                </div>

            </Container>
        </section>
    );
};

export default Banner;
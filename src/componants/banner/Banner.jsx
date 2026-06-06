import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const techIcons = [
  {
    icon: <FaReact />,
    size: "text-6xl",
    color: "text-cyan-400",
    top: "10%",
    left: "20%",
    duration: 6,
  },
  {
    icon: <SiJavascript />,
    size: "text-5xl",
    color: "text-yellow-400",
    top: "70%",
    left: "15%",
    duration: 5,
  },
  {
    icon: <SiTailwindcss />,
    size: "text-5xl",
    color: "text-sky-400",
    top: "20%",
    left: "75%",
    duration: 7,
  },
  {
    icon: <FaFigma />,
    size: "text-5xl",
    color: "text-pink-500",
    top: "70%",
    left: "75%",
    duration: 6,
  },
  {
    icon: <SiNextdotjs />,
    size: "text-5xl",
    color: "text-white",
    top: "50%",
    left: "85%",
    duration: 8,
  },
  {
    icon: <SiTypescript />,
    size: "text-5xl",
    color: "text-blue-500",
    top: "45%",
    left: "10%",
    duration: 7,
  },
  {
    icon: <FaGithub />,
    size: "text-5xl",
    color: "text-white",
    top: "15%",
    left: "55%",
    duration: 5,
  },
  {
    icon: <FaHtml5 />,
    size: "text-5xl",
    color: "text-orange-500",
    top: "80%",
    left: "50%",
    duration: 6,
  },
  {
    icon: <FaCss3Alt />,
    size: "text-5xl",
    color: "text-blue-400",
    top: "35%",
    left: "65%",
    duration: 7,
  },
];

const Banner = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[150px]" />

      <div className="container mx-auto px-6">
        <div className="grid min-h-screen items-center gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="z-10"
          >
            <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm backdrop-blur-md">
              Frontend Developer
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
              Building
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Digital
              </span>
              <br />
              Experiences
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-300">
              I craft modern, fast and interactive web applications using
              React, Next.js, Tailwind CSS and cutting-edge frontend
              technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105">
                View Projects
              </button>

              <button className="rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white/10">
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="relative flex h-[650px] items-center justify-center">
            {/* Center Circle */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              className="absolute h-[300px] w-[300px] rounded-full border border-cyan-500/20"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                repeat: Infinity,
                duration: 35,
                ease: "linear",
              }}
              className="absolute h-[450px] w-[450px] rounded-full border border-purple-500/20"
            />

            {/* Main Card */}
            <motion.div
              animate={{
                y: [-15, 15, -15],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="relative z-20 flex h-64 w-64 items-center justify-center rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <FaReact className="text-8xl text-cyan-400" />
            </motion.div>

            {/* Floating Icons */}
            {techIcons.map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.size} ${item.color}`}
                style={{
                  top: item.top,
                  left: item.left,
                }}
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                  {item.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
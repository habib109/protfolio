import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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

const orbitIcons = [
  {
    icon: <FaReact />,
    color: "text-cyan-400",
    position:
      "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: <SiTailwindcss />,
    color: "text-sky-400",
    position:
      "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  {
    icon: <SiJavascript />,
    color: "text-yellow-400",
    position:
      "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: <FaFigma />,
    color: "text-pink-500",
    position:
      "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: <SiTypescript />,
    color: "text-blue-500",
    position:
      "top-[15%] right-[15%]",
  },
  {
    icon: <FaGithub />,
    color: "text-white",
    position:
      "bottom-[15%] left-[15%]",
  },
];

const Banner = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* ===================== */}
      {/* Background Glow */}
      {/* ===================== */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[180px] animate-pulse" />

        <div className="absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[180px] animate-pulse" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[150px]" />
      </div>

      {/* Grid Effect */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)
        `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid min-h-screen items-center gap-16 lg:grid-cols-2">
          {/* ===================== */}
          {/* LEFT CONTENT */}
          {/* ===================== */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-20"
          >
            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl"
            >
              <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

              Available For Work
            </motion.div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Habib
              </span>

              <br />

              <span className="text-white">
                Crafting Future
              </span>

              <br />

              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Web Experiences
              </span>
            </h1>

            {/* Typewriter */}

            <div className="mt-6 text-2xl font-semibold text-cyan-400">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Developer",
                  "Next.js Developer",
                  "UI Engineer",
                  "JavaScript Expert",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </div>

            {/* Description */}

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              I build modern, fast, scalable and visually stunning web
              applications using React, Next.js, Tailwind CSS and modern
              frontend technologies.
            </p>

            {/* Tech Stack */}

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "JavaScript",
                "Tailwind",
                "TypeScript",
                "Figma",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-bold text-black shadow-[0_0_40px_rgba(34,211,238,0.4)]"
              >
                View Projects
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          {/* ===================== */}
          {/* RIGHT SIDE */}
          {/* ===================== */}

          <div className="relative flex h-[700px] items-center justify-center">
            {/* Outer Ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[550px] w-[550px] rounded-full border border-cyan-500/10"
            />

            {/* Middle Ring */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[420px] w-[420px] rounded-full border border-purple-500/20"
            />

            {/* Orbit Icons */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[500px] w-[500px]"
            >
              {orbitIcons.map((item, index) => (
                <div
                  key={index}
                  className={`absolute ${item.position}`}
                >
                  <div
                    className={`rounded-2xl border border-white/10 bg-white/5 p-4 text-5xl backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.08)] ${item.color}`}
                  >
                    {item.icon}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Main Card */}

            <motion.div
              animate={{
                y: [-20, 20, -20],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative z-20 flex h-72 w-72 items-center justify-center rounded-[40px] border border-cyan-500/20 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(34,211,238,0.25)]"
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <FaReact className="text-[140px] text-cyan-400" />
              </motion.div>
            </motion.div>

            {/* Small Floating Icons */}

            <motion.div
              animate={{
                y: [-15, 15, -15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute right-20 top-16"
            >
              <SiNextdotjs className="text-5xl text-white" />
            </motion.div>

            <motion.div
              animate={{
                y: [15, -15, 15],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute bottom-20 right-10"
            >
              <FaHtml5 className="text-5xl text-orange-500" />
            </motion.div>

            <motion.div
              animate={{
                y: [-15, 15, -15],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
              }}
              className="absolute left-10 bottom-24"
            >
              <FaCss3Alt className="text-5xl text-blue-500" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white/20">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
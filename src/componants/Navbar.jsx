import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Container } from "../layouts/Container";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full border-b border-white/10 bg-[#0f172a]/95 backdrop-blur-md sticky top-0 z-50">
      <Container >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="text-3xl font-bold text-white ">
            Dev<span className="text-cyan-400">.</span>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition duration-300
                    ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="hidden md:block">
            <button className="px-6 py-3 rounded-full bg-cyan-500 hover:scale-105 duration-300 text-white font-medium">
              Hire Me
            </button>
          </div>

          {/* Mobile icon */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl text-white"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-5 pb-5">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink
                  onClick={() => setOpen(false)}
                  to={item.path}
                  className="text-gray-300 hover:text-cyan-400"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button className="w-full py-3 rounded-full bg-cyan-500 text-white">
            Hire Me
          </button>
        </div>
      </div>
      </Container>
    </nav>
  );
};

export default Navbar;
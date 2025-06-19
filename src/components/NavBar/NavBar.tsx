"use client";
import { useState } from "react";

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar fixed top-0 left-0 right-0 bg-slate-900 text-white p-4 shadow-md z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo/Brand */}
                <div className="text-xl font-bold">
                    Portfolio
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6">
                    <li>
                        <a href="#about" className="hover:text-teal-400 transition-colors">
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="hover:text-teal-400 transition-colors">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-teal-400 transition-colors">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-teal-400 transition-colors">
                            Contacts
                        </a>
                    </li>
                    <li>
                        <a href="/resume" className="hover:text-teal-400 transition-colors">
                            Resume
                        </a>
                    </li>
                </ul>


                <button
                    className="md:hidden p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-6 flex flex-col justify-center items-center">
                        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
                    </div>
                </button>
            </div>


            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <ul className="flex flex-col gap-4 pt-4 pb-2">
                    <li>
                        <a href="#about" onClick={closeMenu} className="block py-2 hover:text-teal-400 transition-colors">
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="#experience" onClick={closeMenu} className="block py-2 hover:text-teal-400 transition-colors">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={closeMenu} className="block py-2 hover:text-teal-400 transition-colors">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={closeMenu} className="block py-2 hover:text-teal-400 transition-colors">
                            Contacts
                        </a>
                    </li>
                    <li>
                        <a href="/resume" onClick={closeMenu} className="block py-2 hover:text-teal-400 transition-colors">
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
"use client";
import { useState } from "react";

const desktopLinkClass =
    "text-sm font-medium tracking-wide text-slate-200 transition-colors duration-200 rounded-lg px-3 py-2 hover:bg-white/5 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const mobileLinkClass =
    "block w-full rounded-lg px-3 py-2.5 text-sm font-medium tracking-wide text-slate-200 transition-colors duration-200 hover:bg-white/5 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 text-white shadow-lg shadow-black/20 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold tracking-tight text-white">
                        Portfolio
                    </div>

                    <ul className="hidden items-center gap-1 md:flex">
                        <li>
                            <a href="#about" className={desktopLinkClass}>
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className={desktopLinkClass}>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className={desktopLinkClass}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={desktopLinkClass}>
                                Contacts
                            </a>
                        </li>
                        <li>
                            <a href="/resume" className={desktopLinkClass}>
                                Resume
                            </a>
                        </li>
                    </ul>

                    <button
                        type="button"
                        className="rounded-lg p-2 hover:bg-white/10 md:hidden"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        <div className="flex h-6 w-6 flex-col items-center justify-center">
                            <span
                                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? "translate-y-1 rotate-45" : "-translate-y-1"}`}
                            />
                            <span
                                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                            />
                            <span
                                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${isMenuOpen ? "-translate-y-1 -rotate-45" : "translate-y-1"}`}
                            />
                        </div>
                    </button>
                </div>

                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}
                >
                    <ul className="mt-2 space-y-1 rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                        <li>
                            <a href="#about" onClick={closeMenu} className={mobileLinkClass}>
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={closeMenu} className={mobileLinkClass}>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={closeMenu} className={mobileLinkClass}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={closeMenu} className={mobileLinkClass}>
                                Contacts
                            </a>
                        </li>
                        <li>
                            <a href="/resume" onClick={closeMenu} className={mobileLinkClass}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

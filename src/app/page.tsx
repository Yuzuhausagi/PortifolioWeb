import PortifolioItem from "@/components/portifolioItem";
import {NavBar} from "@/components/NavBar";
import {Header} from "@/components/Header";
import Observer from "@/components/Observer";
import PythonIcon from "@/icons/python-logo-only.svg";
import ContactSection from "@/components/ContactSection";
import {TechnologyList} from "@/components/TechnologyList";
import Terminal from "@/components/Terminal";

export default function Home() {
    return (
        <main className="flex justify-center bg-slate-950">
            <NavBar/>
            <div
                className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-16 lg:p-24 gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl">
                <section id="about"
                         className="flex flex-col gap-4 items-center text-center w-full pt-16 pb-16 sm:pb-24 md:pb-32">
                    <Header>About Me</Header>
                    <Terminal/>
                    <div className="flex flex-col items-center mt-4 sm:mt-6 md:mt-8">
                        <TechnologyList/>
                    </div>

                </section>

                {/* Experience Section */}
                <Observer threshold={0.2}>
                    <section id="experience"
                             className="flex flex-col gap-6 sm:gap-8 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32 text-center w-full">
                        <Header>Experience</Header>
                        <div className="flex flex-col gap-8 sm:gap-12">
                            {/* Experience Item */}
                            <div className="flex flex-col items-start text-left gap-3 sm:gap-4">
                                <h3 className="text-lg sm:text-xl font-bold text-teal-400">Course instructor</h3>
                                <span className="text-gray-400 text-sm sm:text-base">Jan 2023 – May 2025</span>
                                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
                                    <li>Guided over 100 students in developing basic and advanced programming skills.
                                    </li>
                                    <li>Collaborated with academic staff to provide tailored support in debugging
                                        complex
                                        code, improving students' learning outcomes.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-start text-left gap-3 sm:gap-4">
                                <h3 className="text-lg sm:text-xl font-bold text-teal-400">Freelance Mod Developer</h3>
                                <span className="text-gray-400 text-sm sm:text-base">Sep 2023 – Mars 2024</span>
                                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
                                    <li>Developed a JavaScript Reddit bot for content moderation and data analysis,
                                        enhancing user engagement and content quality.
                                    </li>
                                    <li>Created custom mods in C# for improving user experience and security features in
                                        a
                                        Rust multiplayer environment.
                                    </li>
                                    <li>Designed and implemented a Discord server admin bot using JavaScript for
                                        automated
                                        moderation and enhanced security.
                                    </li>
                                    <li>Leading development of the RapidCard language learning app using Python,
                                        FastAPI,
                                        and web technologies, focusing on interactive modules and user retention.
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col items-start text-left gap-3 sm:gap-4">
                                <h3 className="text-lg sm:text-xl font-bold text-teal-400">Developer (Bachelor Project),
                                    Customs</h3>
                                <span className="text-gray-400 text-sm sm:text-base">Jan 2024 – May 2024</span>
                                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
                                    <li>Led the development of a web application for managing import/export requests
                                        in compliance with Norwegian customs regulations.
                                    </li>
                                    <li>Implemented AI-driven solutions to automate product classification, optimize
                                        processing times, and reduce manual workload.
                                    </li>
                                    <li>Coordinated with cross-functional teams to adapt the application to security,
                                        usability, and compliance standards.
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-start text-left gap-3 sm:gap-4">
                                <h3 className="text-lg sm:text-xl font-bold text-teal-400">Geenie Unity | Technical
                                    Support
                                    Specialist</h3>
                                <span className="text-gray-400 text-sm sm:text-base">Jan 2022 – Feb 2024</span>
                                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1">
                                    <li>Provided technical support for web applications, enhancing front-end performance
                                        and
                                        user experience by implementing optimized CSS and JavaScript solutions.
                                    </li>
                                    <li>Developed comprehensive user guides and documentation to streamline support
                                        processes and improve customer satisfaction.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </Observer>

                {/* Projects Section */}
                <Observer>
                    <section id="projects"
                             className="flex flex-col gap-2 pt-16 sm:pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32 w-full">
                        <Header>Projects</Header>
                        <section id="portifolio"
                                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
                            <PortifolioItem
                                topic="Portifolio"
                                description="A Discord Bot using the Discord API to automate the server management. It can send welcome messages to newly joined users and assign roles based on their emoticon selections in server messages."
                                footer={["NextJS", "React", "TypeScript"]}
                            />
                            <PortifolioItem
                                topic="AI Integration Customs"
                                description="The project facilitates user requests for importing and exporting goods through a user-friendly web interface, checking against Norwegian customs regulations. It classifies goods, provides their category and toll ID, and offers likely classifications in uncertain cases."
                                footer={["Python", "API", "React", "TypeScript"]}
                            />
                            <PortifolioItem
                                topic="RapidCard"
                                description="Develops a language learning web application with a Python and FastAPI backend, and an HTML, CSS, and JavaScript frontend. It integrates MongoDB and continuously improves and expands functionalities to enhance language learning."
                                footer={["MongoDB", "Python", "API", "HTML", "CSS"]}
                            />
                            <PortifolioItem
                                topic="Modding Rust (Game)"
                                description="Custom mods for the Rust game to improve the gaming experience for an online gaming community."
                                footer={["C#", "Unity"]}
                            />
                            <PortifolioItem
                                topic="Discord Server Management Bot"
                                description="Developed a Discord bot with JavaScript to enhance server management. Features: Ban Detector for logging IPs and flagging banned accounts, Discord Logger for tracking events (logins, logouts, edits), user management commands (muting, cursing, message prep), and Embed Creator for automated embed deployment."
                                footer={["JavaScript", "API"]}
                            />
                            <PortifolioItem
                                topic="Reddit Bot"
                                description="Developed a bot that automatically retrieves and displays the top post from a specific subreddit, creates a dedicated discussion thread, and includes a command to refresh and display recent top posts."
                                footer={["JavaScript"]}
                            />
                        </section>
                    </section>
                </Observer>

                {/* Contact Section */}
                <ContactSection/>

                {/* Social Links Section */}
                <section className="social-links-section">
                    <div className="social-links fixed bottom-4 left-4 flex flex-col space-y-4 text-gray-400 z-20">
                        <a href="https://github.com/Yuzuhausagi" target="_blank">
                            <img
                                src="/icon/github.svg"
                                alt="Github"
                                className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transform transition-transform duration-300 text-gray-200 opacity-90"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/yosaf-zamir/" target="_blank">
                            <img
                                src="/icon/linkedin.svg"
                                alt="LinkedIn"
                                className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transform transition-transform duration-300 text-gray-200 opacity-90"
                            />
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}
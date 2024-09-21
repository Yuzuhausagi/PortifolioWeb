import PortifolioItem from "@/components/portifolioItem";
import {NavBar} from "@/components/NavBar";
import {Header} from "@/components/Header";
import Observer from "@/components/Observer";

export default function Home() {
    return (
        <main className="flex justify-center bg-slate-950">
            <NavBar/>
            <div className="flex min-h-screen flex-col items-center justify-between p-24 gap-8" style={{width: 1700}}>

                {/* About Me Section */}
                <section id="about" className="flex flex-col gap-4 items-center text-center w-full pt-16 pb-32">
                    <Header>About Me</Header>
                    <Observer>
                        <p className="text-lg text-gray-300 max-w-3xl">
                            I am a technology enthusiast with a solid educational background and a proficient
                            understanding
                            of programming. My passion lies in continuously expanding my knowledge base and refining my
                            skills as a developer, especially within the dynamic technology landscape. Beyond
                            professional
                            endeavors, I am deeply engaged in cybersecurity and find great satisfaction in mentoring
                            students within the university's academic fields.
                        </p>
                        <div className="flex flex-col items-center mt-8">
                            <span className="text-green-400 text-xl mb-4">Technologies:</span>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-gray-100">
                                <div className="flex items-center gap-2">
                                    <img src="/icons/c--4.svg" alt="C Icon" className="w-6 h-6"/>
                                    <span className="font-medium">C</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/icons/c--4.svg" alt="C++ Icon" className="w-6 h-6"/>
                                    <span className="font-medium hover:text-green-400 transition-colors duration-200">C++</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/icons/java-logo.svg" alt="Java Icon" className="w-6 h-6"/>
                                    <span className="font-medium">Java</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/icons/python-logo-only.svg" alt="Python Icon" className="w-6 h-6"/>
                                    <span className="font-medium border-b-2 border-transparent hover:border-green-400 transition-all duration-200">Python</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/icons/javascript-logo-svgrepo-com.svg" alt="JavaScript Icon"
                                         className="w-6 h-6"/>
                                    <span className="font-medium">JavaScript</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/icons/html-1.svg" alt="HTML & CSS Icon" className="w-6 h-6"/>
                                    <span className="font-medium">HTML & CSS</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/icons/github-logo.svg" alt="GitHub Actions Icon" className="w-6 h-6"/>
                                    <span className="font-medium">GitHub Actions</span>
                                </div>
                            </div>
                        </div>
                    </Observer>
                </section>

                {/* Experience Section */}
                <section id="experience" className="flex flex-col gap-2 pt-32 pb-32 text-center">
                    <Header>Experience</Header>
                    <p className="text-3xl font-bold">Raichuu is gei</p>
                </section>

                {/* Projects Section */}
                <section id="projects" className="flex flex-col gap-2 pt-32 pb-32">
                    <Header>Projects</Header>
                    <section id="portifolio" className="flex flex-wrap gap-3 sm:max-w-full">
                        {/* Include All Portfolio Items */}
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
                            description={`Developed a Discord bot to enhance server management using JavaScript. Features include:
                            Ban Detector to scan and log IP addresses, flagging previously banned accounts.
                            Discord Logger to track server events like logins, logouts, and message edits.
                            User management commands for muting and cursing, along with message preparation.
                            Embed Creator for automated deployment of embeds to channels.`}
                            footer={["JavaScript", "API"]}
                        />
                        <PortifolioItem
                            topic="Reddit Bot"
                            description="Developed a bot that automatically retrieves and displays the top post from a specific subreddit, creates a dedicated discussion thread, and includes a command to refresh and display recent top posts."
                            footer={["JavaScript"]}
                        />
                    </section>
                </section>

                {/* Contact Section */}
                <section id="contact" className="flex flex-col gap-2 fade pt-32 pb-32">
                    <Header>Contact</Header>
                    <span>Don't hesitate to reach out to me. I'll get back to you promptly.</span>
                    <div className="flex justify-center">
                        <a
                            href="mailto:x"
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                            style={{opacity: 1, transform: "translateY(0px)"}}
                        >
                            Contact me!
                        </a>
                    </div>
                </section>

                {/* Social Links Section */}
                <section className="social-links-section">
                    <div className="social-links fixed bottom-4 left-4 flex flex-col space-y-4 text-gray-400">
                        <a href="https://github.com/Yuzuhausagi" target="_blank">
                            <img
                                src="/icon/github.svg"
                                alt="Github"
                                className="w-10 h-10 hover:scale-110 transform transition-transform duration-300 text-gray-200 opacity-90"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/yosaf-zamir/" target="_blank">
                            <img
                                src="/icon/linkedin.svg"
                                alt="LinkedIn"
                                className="w-10 h-10 hover:scale-110 transform transition-transform duration-300 text-gray-200 opacity-90"
                            />
                        </a>
                    </div>
                </section>

            </div>
        </main>
    );
}

import Image from "next/image";
import PortifolioItem from "@/components/portifolioItem";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <div className="flex flex-wrap gap-3 sm:max-w-full" style={{width: 1700}}>

                    <PortifolioItem topic={"Portifolio"}
                                    description={"A Discord Bot using the Discord API to automate the server management. It can send welcome messages to newly joined users and assign roles based on their emoticon selections in server messages."}
                                    footer={["NextJS", "React", "TypeScript"]}/>
                    <PortifolioItem topic={"AI Integration Customs"}
                                    description={"The project facilitates user requests for importing and exporting goods through a user-friendly web interface, checking against Norwegian customs regulations. It classifies goods, provides their category and toll ID, and offers likely classifications in uncertain cases."}
                                    footer={["Python", "API", "React", "TypeScript"]}/>
                    <PortifolioItem topic={"RapidCard"}
                                    description={"Develops a language learning web application with a Python and FastAPI backend, and an HTML, CSS, and JavaScript frontend. It integrates MongoDB and continuously improves and expands functionalities to enhance language learning.."}
                                    footer={["MongoDB", "Python", "API", "HTML", "CSS"]}/>
                    <PortifolioItem topic={"Modding Rust (Game)"}
                                    description={"Custom mods for the Rust game to improve the gaming experience for an online gaming community."}
                                    footer={["C#", "Unity"]}/>
                    <PortifolioItem topic={"Discord Server Management Bot "}
                                    description={"• Developed a Discord bot to enhance server management using JavaScript. Features include:.\n" +
                                        "Ban Detector to scan and log IP addresses, flagging previously banned accounts.\n" +
                                        "Discord Logger to track server events like logins, logouts, and message edits.\n" +
                                        "User management commands for muting and cursing, along with message preparation.\n" +
                                        "Embed Creator for automated deployment of embeds to channels.\n"}
                                    footer={["JavaScript", "API"]}/>
                    <PortifolioItem topic={"Reddit bot"}
                                    description={"Developed a bot that automatically retrieves and displays the top post from a specific subreddit, creates a dedicated discussion thread, and includes a command to refresh and display recent top posts."}
                                    footer={["JavaScript"]}/>
                </div>
            </div>
        </main>
    );
}

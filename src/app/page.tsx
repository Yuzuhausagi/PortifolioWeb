import Image from "next/image";
import PortifolioItem from "@/components/portifolioItem";
import {NavBar} from "@/components/NavBar";
import {Header} from "@/components/Header";

export default function Home() {
    return (
        <main className="flex justify-center bg-slate-950">
            <NavBar/>
            <div className="flex min-h-screen flex-col items-center justify-between p-24 gap-8" style={{width: 1700}}>
                <section id={"about"} className="flex flex-col gap-2">
                    <Header>About Me</Header>
                    <p className="text-3xl font-bold ">
                        Jeg er en teknologientusiast med en solid utdanningsbakgrunn og en dyktig forståelse for program-
                        mering. Min lidenskap ligger i kontinuerlig å utvide kunnskapsbasen og forfine mine ferdigheter som
                        utvikler, spesielt innenfor det dynamiske teknologilandskapet. Utover profesjonelle bestrebelser er
                        jeg
                        sterkt engasjert i cybersikkerhet og finner stor tilfredsstillelse i å veilede studenter innen
                        universitetets
                        fagområder.
                    </p>
                </section>
                <section id={"portifolio"} className="flex flex-wrap gap-3 sm:max-w-full">

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
                </section>
            </div>
        </main>
    );
}

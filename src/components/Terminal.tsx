"use client"
import {useEffect, useState, useRef} from 'react';
import TerminalWriter from "@/components/TerminalWriter";

const Terminal = () => {
    const finalValue = "I am a technology enthusiast with a solid educational background and a proficient understanding of programming. My passion lies in continuously expanding my knowledge base and refining my skills as a developer, especially within the dynamic technology landscape. Beyond professional endeavors, I am deeply engaged in cybersecurity and find great satisfaction in mentoring students within the university's academic fields."
    const [blinkHidden, setBlinkHidden] = useState(false);
    const [typeBio, setTypeBio] = useState(false);
    const [showP, setShowP] = useState(false);

    function startTypingBio() {
        setTypeBio(true);
    }

    function liesOfP() {
        setShowP(true);
    }

    useEffect(() => {
        async function allowWriting() {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setBlinkHidden(true);
        }

        allowWriting();
    }, []);

    return (
        <div className="bg-gray-900 text-green-400 text-base sm:text-lg md:text-xl p-0 rounded-lg hover:shadow-emerald-500 hover:shadow-xl transition-shadow shadow-emerald-500/60 shadow mt-4 sm:mt-6 md:mt-8 w-full max-w-3xl h-64 sm:h-80 md:h-96">
            <div className="flex items-center bg-gray-800 p-2 sm:p-3 rounded-t-lg">
                <div className="flex space-x-1 sm:space-x-2">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span>
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></span>
                </div>
                <span className="text-gray-400 ml-2 text-xs sm:text-sm">YuzuhaUsagi@terminal: ~/portfolio</span>
            </div>
            <div className="p-3 sm:p-4 text-green-400 bg-gray-900 rounded-b-lg">
                <p className="text-green-400 text-left text-sm sm:text-base">$<span
                    className={`ml-1 blink${blinkHidden ? " hidden" : ""}`}>|</span> <TerminalWriter
                    allowWrite={blinkHidden} onFinishedTyping={startTypingBio}>
                    whoami
                </TerminalWriter></p>

                <p className="ml-2 sm:ml-4 text-gray-300 text-left text-xs sm:text-sm md:text-base">
                    <TerminalWriter allowWrite={typeBio} onFinishedTyping={liesOfP}>
                        {finalValue}
                    </TerminalWriter>
                </p>
                <p className={`text-green-400 text-left items-center text-sm sm:text-base${showP ? " flex" : " hidden"}`}>
                    <span>$</span>
                    <span className={`ml-1 blink`}>|</span>
                </p>
            </div>

        </div>
    );
};

export default Terminal;